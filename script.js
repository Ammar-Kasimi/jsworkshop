
let stored_data;
let photonumber = 1;

console.log(stored_data)
fetch("donnes.json")
    .then(res => res.json())
    .then(data => {
        data.photo = photonumber
        photonumber++
        stored_data = localStorage.getItem("students")
        console.log(stored_data)
        if (stored_data == null) {
            const list = [];
            list.push(data)

            localStorage.setItem("students", JSON.stringify(list))
        }
        
        document.getElementById("addbutton").addEventListener("click", showform)
        document.getElementById("add-data-btn").addEventListener("click", add_student)
        // document.querySelectorAll(".modifybtn").addEventListener("click",modify_button)
        // document.querySelectorAll(".deletebtn").addEventListener("click",delete_button)
        showstudents()
    }).catch(err => console.log("loading student card failed", err))






function showform() {
    document.getElementById("form-container").classList.remove("hidden")
    console.log("works1");

}

function add_student(event) {
    event.preventDefault();
    let data2 =
    {
        firstname: document.getElementById("fname").value,
        lastname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        photo: photonumber

    }
    
    photonumber++
    document.getElementById("form-container").classList.add("hidden")
    const data3 = JSON.parse(localStorage.getItem("students"));
    data3.push(data2)
    localStorage.setItem("students", JSON.stringify(data3))
    showstudents()

}


function showstudents() {
    const list = JSON.parse(localStorage.getItem("students"))

    let card = ""
    list.forEach(student => {
        card += `<div class="border-4 border-black rounded-md h-[150px] w-full flex">

         <img src="images/${student.photo}.png" class="aspect-square w-1/4 h-full"><img>
        
        <div class="flex-col flex justify-evenly h-full w-1/2 ml-[20px]">
        <p class="text-lg" > ${student.firstname} </p>
        <p class="text-lg">${student.lastname}</p>
        <p class="text-lg">${student.email}</p>
        <p class="text-lg">${student.age}</p>
        </div>
        <div class="flex-col flex justify-evenly items-cneter h-full w-1/4 ">
        
        <button class=" modifybtn bg-blue-500 w-2/3 h-1/4 rounded-md hand">Modify</button>
        <button class=" deletebtn bg-red-500 w-2/3 h-1/4 rounded-md hand">delete</button>
        </div>

       
        </div>
             `
        
    });
    document.getElementById("cards").innerHTML = card

    localStorage.setItem("students", JSON.stringify(list))

}

function modify_button(event){
    event.preventDefault()
    showform()
    
}
//     localStorage.getItem()
// data.forEach(dat => {
//     let card =
//         `
//         `
//     document.getElementById("sidebar").innerHTML+=card;
// });


// 


