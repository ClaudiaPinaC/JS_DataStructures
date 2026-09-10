// A coding competition organized to recruit software developers includes a problem
// involving the bitwise-OR operation. The score of a sequence is defined as the result of the bitwise-OR
// operation on its elements. Given an array arr of length n, identify all possible distinct scores that can be
// obtained by selecting any strictly increasing subsequence from the array. Return the results sorted in ascending order.

// Example
// n = 4
// arr = [4,2,4,1]

function getDistinctScoreValues(arr: number[]): any[] {
  // dp[v][s] indicates if a score 's' is reachable ending with value 'v'
  const dp: Uint8Array[] = Array.from(
    { length: 1024 },
    () => new Uint8Array(1024),
  );

  // union_dp[v][s] indicates if a score 's' is reachable ending with any value <= v
  const union_dp: Uint8Array[] = Array.from(
    { length: 1024 },
    () => new Uint8Array(1024),
  );

  for (const x of arr) {
    const newScores: number[] = [];

    // 1. Extend from existing valid subsequences ending in a value < x
    if (x > 0) {
      for (let s = 0; s < 1024; s++) {
        if (union_dp[x - 1][s] === 1) {
          const newS = s | x;
          if (dp[x][newS] === 0) {
            dp[x][newS] = 1;
            newScores.push(newS);
          }
        }
      }
    }

    // 2. Form a single-element subsequence [x]
    if (dp[x][x] === 0) {
      dp[x][x] = 1;
      newScores.push(x);
    }

    // 3. Efficiently propagate new scores to union_dp
    for (const ns of newScores) {
      for (let v = x; v < 1024; v++) {
        if (union_dp[v][ns] === 1) break; // Already propagated in a prior step
        union_dp[v][ns] = 1;
      }
    }
  }

  // Collect all unique scores
  const uniqueScores = new Set<number>();
  uniqueScores.add(0); // Account for the empty subsequence

  for (let s = 0; s < 1024; s++) {
    if (union_dp[1023][s] === 1) {
      uniqueScores.add(s);
    }
  }

  // Return the scores sorted in ascending order
  return Array.from(uniqueScores).sort((a, b) => a - b);
}
