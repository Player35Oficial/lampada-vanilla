const img = document.getElementById('lamp');
const buttonOn = document.getElementById('turnOn');
const buttonOff = document.getElementById('turnOff');

// console.log(img.getAttribute("src").includes("desligada"))

img.addEventListener('dblclick', () => {
  img.setAttribute("src", "./img/quebrada.jpg")
})

img.addEventListener('mouseover', () => {
  if (img.getAttribute("src").includes("quebrada") != true) {
    img.setAttribute("src", "./img/ligada.jpg")
  }
})
img.addEventListener('mouseout', () => {
  if (img.getAttribute("src").includes("quebrada") != true) {
    img.setAttribute("src", "./img/desligada.jpg")
  }
})


buttonOn.addEventListener('click', () => {
  let lampadaQuebrada = img.getAttribute("src").includes("quebrada")
  let lampadaDesligada = img.getAttribute("src").includes("desligada")
  if (lampadaDesligada = true && lampadaQuebrada != true) {
    img.setAttribute("src", "./img/ligada.jpg")
  } else {
    alert('Não é possível acender pois a Lâmpada está quebrada! Recarregue a página!')
  }
})

buttonOff.addEventListener('click', () => {
  let lampadaQuebrada = img.getAttribute("src").includes("quebrada")
  let lampadaLigada = img.getAttribute("src").includes("ligada")
  if (lampadaLigada = true && lampadaQuebrada != true) {
    img.setAttribute("src", "./img/desligada.jpg")
  }
})