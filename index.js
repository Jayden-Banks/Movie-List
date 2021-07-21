document.querySelector('form').addEventListener('submit', addMovie)
const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector('input') //difference here, value should go on line 9
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value

    //crossOffMovie call
    movieTitle.addEventListener('click', crossOffMovie) //need movieTitle.add....
    
    movie.appendChild(movieTitle)

    //delete button
    const deleteBtn = document.createElement('button') 
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    inputField.value = '' //Why doesn't this work? because .value needs to be there
    //what is .value exactly?
}

function deleteMovie(event) {
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`

    event.target.parentNode.remove()

    revealMessage()

}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')
    setTimeout(function test() {
        message.classList.add('hide')}, 1000)
    }



