//<section class="quadrato"></section>

const Grid = document.querySelector('.grid')
const playButton = document.querySelector('button')

playButton.addEventListener('click', function () {
    generateGrid(100, 'tencell')
})

function generateGrid(max, measures) {
    Grid.innerHTML = '';
    for (let i = 1; i <= max; i++) {
        const cell = document.createElement('section')
        cell.classList.add(measures)
        cell.append(i)
        Grid.appendChild(cell)
        cell.addEventListener('click', function () {
            cell.classList.toggle('bg_blue')
        })
    }
}