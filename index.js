const list = document.querySelector("#list");
const inputForm = document.querySelector("form");
const dataInput = document.querySelector("#description");

//Form submit
inputForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = dataInput.value;
    if(data.trim().length > 0) {
        data = data.charAt(0).toUpperCase() + data.slice(1);
        createItem(data);
    }
    dataInput.value = "";
})

//Create list item
const createItem = (data)=>{
    //Create the todo item
    const item = document.createElement("div");;
    item.className = "box columns my-4 is-vcentered";

    //Add a description
    const text = document.createElement("h4");
    text.innerText = data;
    text.className = "column is-four-fifths has-text-weight-bold mx-4";

    //Add check listener
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.addEventListener("change", ()=>{
        if(check.checked) {
            check.parentElement.classList.add("has-background-primary");
        } else {
            check.parentElement.classList.remove("has-background-primary");
        }
    })

    //Add remove listener
    const remove = document.createElement("button");
    remove.className = "delete is-large mx-6";
    remove.addEventListener("click", (e) => {
        list.removeChild(e.target.parentElement);
    })
    
    item.appendChild(check);
    item.appendChild(text);
    item.appendChild(remove)

    list.appendChild(item);
}
