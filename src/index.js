// write your code here
document.addEventListener("DOMContentLoaded", contentLoad);

function contentLoad(){
    let ramenMenuDiv = document.querySelector("#ramen-menu")
    fetch("http://localhost:3000/ramens")
        .then((response) => response.json())
        .then(data=>data.forEach(element => {
            const ramenImage = document.createElement("img")
            ramenImage.src = element.image
            ramenImage.id = `image-${element.id}`
            ramenMenuDiv.appendChild(ramenImage)
            
            const ramenDetail = document.querySelector("#ramen-detail")
            const imageDetail = ramenDetail.querySelector(".detail-image")
            const ramenName = ramenDetail.querySelector(".name")
            const restaurantName = ramenDetail.querySelector(".restaurant")
            
            ramenImage.addEventListener("click",()=>{
                imageDetail.src = element.image;
                imageDetail.alt = element.name;
                ramenName.textContent = element.name;
                restaurantName.textContent = element.restaurant;
                document.querySelector("#rating-display").textContent = element.rating;
                document.querySelector("#comment-display").textContent = element.comment;
            })

            }))      
            
        const form = document.querySelector("#new-ramen")
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            const newRamen = document.createElement("img")
            newRamen.src = document.getElementById("new-image").value;
            ramenMenuDiv.appendChild(newRamen)

            newRamen.addEventListener("click",()=>{
                document.querySelector(".detail-image").src = newRamen.src;
                document.querySelector(".name").textContent = document.getElementById("new-name").value;;
                document.querySelector(".restaurant").textContent = document.getElementById("new-restaurant").value;;
                document.querySelector("#rating-display").textContent = document.getElementById("new-rating").value;
                document.querySelector("#comment-display").textContent = document.getElementById("new-comment").value;
            })
      
        })
}
