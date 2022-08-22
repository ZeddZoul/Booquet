const menuBtn = document.querySelector(".menuBtn")
const menu = document.querySelector(".menu")
menuBtn.addEventListener("click", _ => {
  if (menuBtn.textContent == "X") {
    menu.style.display = "none"
    menuBtn.innerHTML = "&#9776;"
  }
  else {
    menu.style.display = "block"
    menuBtn.innerHTML = "X"
    const check = setInterval(() => {
      if (window.innerWidth > 800) {
        menu.style.display = "none"
        menuBtn.innerHTML = "&#9776;"
     }
    }, 1000)
}
})

