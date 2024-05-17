//<section class="quadrato"></section>

const Grid = document.querySelector('.grid')
const playButton = document.querySelector('button')

playButton.addEventListener('click', function () {
    Grid.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('section')
        cell.classList.add('quadrato')
        cell.append(i)
        Grid.appendChild(cell)
        cell.addEventListener('click', function () {
            cell.classList.toggle('bg_blue')
        })
    }
})