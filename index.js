const containerEl = document.querySelector(".container"),
    btnEl = document.querySelector(".btn"),
    popupContainerEl = document.querySelector(".popup-container"),
    closeIcomEl = document.querySelector(".close-icom");

btnEl.addEventListener("click",() => {
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active")
})  

closeIcomEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active")

})