function toggleMode() {
  const html = document.documentElement
   html.classList.toggle("light")

   const img =document.querySelector("#profile img")
   
  if(html.classList.contains('light')) {

    img.setAttribute("src", "./assets/avatar-light.png")
  } else{

    img.setAttribute("src", "./assets/avatar.png")
   
  }

   if (html.classList.contains("light")) {

     alt.setAttribute("Bia de óculos com um filtro mais claro")

   } else{

     alt.setAttribute("Foto de Bia de óculos e filtro preto e branco")
   
   }
}
