

fetch("donnes.json")
    .then(res => res.json())
    .then(data => {
        let list = []
        list.push(data)
        localStorage.setItem("apprenants", JSON.stringify(list))
        document.getElementById("add-btn").addEventListener("click", addjson)
   
        showstudents()
    }).catch(err => console.log("loading student card failed", err))

function addjson() {
    document.getElementById("form_container").classList.remove("hidden")
}


document.getElementById("add-data-btn").addEventListener("click", (event) => {
    event.preventDefault();
     
    let data2 =
    {
        firstname: document.getElementById("fname").value,
        lastname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value
    }


    const data3=JSON.parse(localStorage.getItem("apprenants"));
    data3.push(data2)
    localStorage.setItem("apprenants", JSON.stringify(data3))
}  );      //ajouter l'apprenant au localstorage
// showstudents(){
//     localStorage.getItem()
// data.forEach(dat => {
//     let card =
//         `<p class="">${dat.name}<p>
//         <p class="">${dat.lastname}<p>
//         <p class="">${dat.email}<p>
//         <p class="">${dat.age}<p>
//         <img src="${dat.photo}" class=""><img>
//         `
//     document.getElementById("sidebar").innerHTML+=card;
// });


// }


