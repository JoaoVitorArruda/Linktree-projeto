function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")

    img.setAttribute(
      "alt",
      "foto de João Vitor sorrindo, usando terno, bigode e cavanhaque com fundo rgba"
    )
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-profile.png")
    img.setAttribute(
      "alt",
      "foto de João Vitor sorrindo, usando terno, bigode e cavanhaque com fundo amarelo"
    )
  }
}

/* //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/joao-avatar-light') } else {
      img.setAttribute('src', './assets/joao-avatar-dark')
    }*/
