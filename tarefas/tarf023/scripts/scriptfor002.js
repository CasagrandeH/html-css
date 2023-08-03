/* Este js é para poder ver a funcionalidade dos componentes abaixo 
sem deixar o HTML ficar totalmente poluido com codigo:

ESTILO ZEBRADO
CABEÇALHO FIXO AKA STICKY HEADER

*/

let par = document.querySelector('#paragraph')
let tbody = document.querySelector('#tbody')

let table = '<tr><td>São Paulo</td><td class="num">44 169 350</td></tr><tr><td>Minas Gerais</td><td class="num">20 777 672</td></tr><tr><td>Rio de Janeiro</td><td class="num">16 497 395</td></tr>'

let lorem = '<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi iste quam vitae pariatur rerum ratione totam voluptatibus sequi reprehenderit ab voluptate, numquam beatae tempore neque natus, nobis voluptates nisi?</span>'

for (c = 0; c <= 4; c++) {
    tbody.innerHTML += table
}

for (c = 0; c <= 40; c++) {
    par.innerHTML += lorem
}