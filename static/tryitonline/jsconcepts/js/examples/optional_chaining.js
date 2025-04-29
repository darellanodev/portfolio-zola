const data = {
    "level1" : {
        "author" : "michael",
        "scores" : {
            "score1": 258000,
            "score2": 145200,
        }
    },
    "level2" : {
        "author" : "harry",
    }

};

const level1HighScore = data.level1?.scores?.score1
console.log(level1HighScore) // 258000

const level1ThirdScore = data.level1?.scores?.score3
console.log(level1ThirdScore) // undefined (instead of an error)

const level2HighScore = data.level2?.scores?.score1
console.log(level2HighScore) // undefined (instead of an error)

const level3HighScore = data.level3?.scores?.score1
console.log(level3HighScore) // undefined (instead of an error)