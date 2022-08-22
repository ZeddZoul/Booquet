const buy = document.getElementById("buy")
const sell = document.getElementById("sell")
const sellSection = document.getElementById("sellSection")
const buySection = document.getElementById("buySection")
sell.onclick = _ => {
  buySection.style.display = "none"
  sellSection.style.display = "block"
  sell.classList.add("selected")
  buy.classList.remove("selected")
}
buy.onclick = _ => {
  buySection.style.display = "flex"
  sellSection.style.display = "none"
  sell.classList.remove("selected")
  buy.classList.add("selected")
}
