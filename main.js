function creategame(player1, hour, player2) {
    return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
  </li>
    `
}

let delay = - 0.4;
function createcard(date, day, games) {
    delay = delay + 0.4;
return `  
<div class="card" style= "animation-delay:${delay}s">
<h2>${date} <span>${day}</span></h2>
<ul>
  ${games}
</ul>
</div>
`
}

document.querySelector('#app').innerHTML = `
</header>
<main id="cards">
 ${createcard('24/11', 'Quinta-feira', creategame('brazil', '16:00', 'serbia'))}
 ${createcard('28/11', 'Segunda-feira', creategame('brazil', '13:00', 'switzerland'))}
 ${createcard('02/12', 'Sexta-feira', creategame('brazil', '16:00', 'cameroon'))}
</main>
`