// The nullish coalescing operator (??)
// returns the right side when left side is null or undefined
// Great to stablish default values

const level1HighScores = {
    "score1": 258000,
    "score2": 145200,
}
console.log(level1HighScores?.score3) // undefined
const l1ThirdScore = level1HighScores?.score3 ?? 0
console.log(l1ThirdScore) // 0 (because left side is undefined)

const level2HighScores = null
console.log(level2HighScores) // null
const l2ThirdScore = level2HighScores ?? {"score1" : 0}
console.log(l2ThirdScore)
// {"score1" : 0} (because left side is null)

const isDemoMode = false
const currentMode = isDemoMode ?? true
console.log(currentMode)
// false (the left side is neither null nor undefined
// so returns the left side (false), not the right side