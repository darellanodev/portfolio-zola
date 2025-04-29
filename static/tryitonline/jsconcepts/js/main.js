const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault()

        paintButtonSelected(this)
        
        const example = `${this.id}.js`
        loadExample(example)

    })
})

const paintButtonSelected = (element) => {
    navLinks.forEach(link => {
        link.classList.remove('current')
    })

    element.classList.add('current')
}

const loadExample = (example) => {
    fetch(`./js/examples/${example}`)
            .then(response => response.text())
            .then(data => {
                fillData(data)
                hljs.highlightAll()
            })
            .catch(error => {
                console.error('Error loading file:', error)    
            })
}
const fillData = (data) => {
    const codeBlock = document.querySelector('pre code')
            
    codeBlock.removeAttribute('data-highlighted')
    codeBlock.textContent = data
}