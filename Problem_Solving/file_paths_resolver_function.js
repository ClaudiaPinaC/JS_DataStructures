const { resolve } = require('bluebird');
const fs = require('fs');
const path = require('path');

function main(resolvedPath, callback) {
    return new Promise(async (resolve, reject) => {
        try {
            const stats = await fs.promises.stat(resolvedPath);
            const results = [];

            //function to get the metadata from the path given and the stats obj
            const getMetadata = (itemPath, itemStats) => {
                const fileName = path.basename(itemPath);

                let relativePath = path.relative(process.cwd(), itemPath).replace(/\\/g, '/');
                if (!relativePath.startsWith('/')) {
                    relativePath = '/' + relativePath;
                }

                let date = itemStats.birthtime || itemStats.ctime || itemStats.mtime || new Date();
                if (!(date instanceof Date) || isNaN(date.getTime())) {
                    date = new Date(date);
                }

                const day = String(date.getUTCDate()).padStart(2, '0');
                const month = String(date.getUTCMonth() + 1).padStart(2, '0');
                const year = date.getUTCFullYear();

                const createdAt = `${day}-${month}-${year}`;

                return {
                    fileName,
                    filePath: relativePath,
                    size: itemStats.size,
                    createdAt,
                    isDirectory: itemStats.isDirectory()
                }
            }

            if (stats.isFile()) {
                results.push(getMetadata(resolvedPath, stats));
                if (callback) callback(null, results);
                return resolve(results);
            }

            if (stats.isDirectory()) {
                const files = await fs.promises.readdir(resolvedPath);

                for (const file of files) {
                    if (file.startsWith('.')) continue;

                    const childPath = path.join(resolvedPath, file);
                    const childStats = await fs.promises.stat(childPath);
                    results.push(getMetadata(childPath, childStats));
                }

                results.sort((a, b) => a.fileName.localeCompare(b.fileName));

                if (callback) callback(null, results);
                return resolve(results);
            }
        } catch (error) {
            const pathError = new Error('Invalid Path');
            if (callback) callback(pathError);
            return reject(pathError);
        }
    });
};

module.exports = main;