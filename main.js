const mainParagragh = document.querySelector(".content-paregragh")
const updateBtn = document.querySelector(".update-btn")

// updateBtn.addEventListener("click", ()=>{
//   console.log("clicked");
// })

updateBtn.addEventListener("click", update)
function update(){
  mainParagragh.innerHTML = "I am currently learning javascript"
}