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
    message.textContent = 'Movie deleted!'

    event.target.parentNode.remove()


}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}
















//////////Copy of part 1/////////////////
// function addMovie(event) {
//     event.preventDefault()
//     let inputField = document.querySelector('input').value
//     let movie = document.createElement('li')
//     let movieTitle = document.createElement('span')
//     movieTitle.textContent = inputField
    
//     movie.appendChild(movieTitle)
//     document.querySelector('ul').appendChild(movie)
//     inputField = '' //Why doesn't this work?
// }

// document.querySelector('form').addEventListener('submit', addMovie)