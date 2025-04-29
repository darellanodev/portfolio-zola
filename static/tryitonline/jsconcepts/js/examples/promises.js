// Chaining promises (using return)
function getScores() {
    const BASE_URL = 'http://localhost/proyectos/api'
    fetch(`${BASE_URL}/scores.php?level=1`)
    .then( data1 => {
        console.log(data1)
        return fetch(`${BASE_URL}/scores.php?level=2`)
    })
    .then( data2 => {
        console.log(data2)
        return fetch(`${BASE_URL}/scores.php?level=3`)
    })
    .then( data3 => {
        console.log(data3)
    })
    .catch( err => console.log('ERROR!', err))
}

getScores()