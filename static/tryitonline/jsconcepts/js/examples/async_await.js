// Chaining with async await
async function getScores() {
    const BASE_URL = 'http://localhost/proyectos/api'
    
    try {
        const data1 = await fetch(`${BASE_URL}/scores.php?level=1`)
        console.log(data1)
        
        const data2 = await fetch(`${BASE_URL}/scores.php?level=2`)
        // const data2 = await fetch(`http://novalid.novalid`)
        console.log(data2)
        
        const data3 = await fetch(`${BASE_URL}/scores.php?level=3`)
        console.log(data3)
                
    } catch (err) {
        console.log('ERROR!', err)
    }
}

getScores()