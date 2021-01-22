function jogar(val) {
  const pc = Math.floor(Math.random() * 3);
  const result = document.querySelector('div#result')
  const arr = ['Pedra', 'Papel', 'Tesoura']
  let resultado = ''

  if (val === 0) {
    if (pc === 0)
      resultado = '<p class="tied">Empate!</p>'

    if (pc === 1)
      resultado = '<p class="lose">Perdeu!</p>'

    if (pc === 2)
      resultado = '<p class="win">Ganhou!</p>'
  } else
  if (val === 1) {
    if (pc === 0)
      resultado = '<p class="win">Ganhou!</p>'

    if (pc === 1)
      resultado = '<p class="tied">Empate!</p>'

    if (pc === 2)
      resultado = '<p class="lose">Perdeu!</p>'
  } else
  if (val === 2) {
    if (pc === 0)
      resultado = '<p class="lose">Perdeu!</p>'

    if (pc === 1)
      resultado = '<p class="win">Ganhou!</p>'

    if (pc === 2)
      resultado = '<p class="tied">Empate!</p>'
  }

  result.innerHTML = `${resultado}`
  result.innerHTML += `<p>Você jogou <strong>${arr[val]}</strong> e o Computador jogou <strong>${arr[pc]}.</strong></p>`
}