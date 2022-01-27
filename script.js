let button = document.querySelectorAll(".parent .buttons button");
let inp = document.getElementById("input");
let result = document.querySelector(".results > span");
//--------------
button.forEach(button =>{
    button.addEventListener("click" , (e)=>{
        if(e.target.classList.contains("check-item"))
        {
            checkItem();
        }
        if(e.target.classList.contains("add-item"))
        {
            addItem();
        }
        if(e.target.classList.contains("delete-item"))
        {
            deleteItem();
        }
        if(e.target.classList.contains("show-item"))
        {
            showItem();
        }
    })
});

function emptyInput()
{
    if(inp.value == "")
    {
        result.innerHTML = "input can't be empty!";
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
          })
    }
}
function checkItem()
{
    if(inp.value !== "")
    {
        if(localStorage.getItem(inp.value))
        {
            result.innerHTML = `this item found in local storage <span>${inp.value} <\span>`;
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
        }
        else
        {
            result.innerHTML = `this item can't be found in local storage <span>${inp.value} <\span>`;
        }
    }
    else
    {
        emptyInput();
    }

}

function addItem()
{
    if(inp.value !== "")
    {
        localStorage.setItem(inp.value , "test");
        result.innerHTML = `this item Added in local storage <span>${inp.value} <\span>`;
        inp.value=""
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    }
    else
    {
        emptyInput();

    }

}

function deleteItem()
{
    if(inp.value !=="")
    {
        if(localStorage.getItem(inp.value))
        {
            localStorage.removeItem(inp.value);
            result.innerHTML = `this item Deleted form local storage <span>${inp.value} <\span>`;
            inp.value="";
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
        }
        else
        {
            result.innerHTML = `this item can't be found in local storage <span>${inp.value} <\span>`;
        }
    }
    else
    {
        emptyInput();
    }
}

function showItem()
{
    if(localStorage.length) // which mean if not zero 
        {
            result.innerHTML = ``;
            for(let[key , value ] of Object.entries(localStorage))
            {
                result.innerHTML += ` <span class="keys">${key} <\span>`
            }
        }
        else
        {
            result.innerHTML = `Local Storage is empty <\span>`;
        }
}

//---------------------
// localStorage => setItem - getItem - removeItem - length
// object.entries(name of object)