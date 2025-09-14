function maxFreqSum(s: string): number {
    const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u']);
    const freq: Record<string, number> = {};

    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let maxVowel: number = 0;
    let maxConsonant: number = 0;

    for (const ch in freq) {
        const count = freq[ch];
        if (vowels.has(ch)) {
            maxVowel = Math.max(maxVowel, count);
        } else {
            maxConsonant = Math.max(maxConsonant, count);
        }
    }

    return maxVowel + maxConsonant;
}

console.log(maxFreqSum("aeiou"));
console.log(maxFreqSum("leetcode"));
console.log(maxFreqSum("successes"));