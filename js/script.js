//<section class="quadrato"></section>

const Grid = document.querySelector('.grid')
const playButton = document.querySelector('button')

playButton.addEventListener('toggle', function () {
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('section')
        cell.classList.add('quadrato')
        cell.append(i)
        Grid.appendChild(cell)
    }
})