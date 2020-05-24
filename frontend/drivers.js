const urlUsers="https://localhost:3000/users/login"
const urlDrivers="https://localhost:3000/drivers"

const loginData=(value)=>{
const emailInput =document.getElementById("login_email");
const passwordInput=document.getElementById("login_password");
const loginBtn=document.getElementById("login_submit");


const getInputValue=(element)=>{
return element.value;
}

const emailValue=getInputValue(emailInput);
const passwordValue=getInputValue(passwordInput);

loginBtn.addEventListener("click",(event)=>{
event.preventDefault();

emailInput.value="";
passwordInput.value="";

});
}
// create a new user
const loginUser=(user)=>{
    const userData=JSON.stringify(user)
    fetch(urlUsers,{
        method:"POST",
        body:userData,
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log("Login successful",user)
        loginData();
    }). catch((error)=>{
        console.log(error);
    });
};


// form register data
const driverData=(value)=>{
    const formData=document.getElementById("register");
const regBtn=document.getElementById("register_btn");

const getFormData=(element)=>{
    return element.value;
}
regBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    formData.value;
})
}

// Add new rider
const newRider=(formData)=>{
    const riderData=JSON.stringify(formData);
    fetch(urlDrivers,{
      method:"POST",
      body: riderData,
      headers:{
      "Accept": "application/json",
      "Content-Type": "application/json",
      },
    })
    .then((res)=>res.json())
    .then((data)=>{
      driverData();
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    });
  };
    newRider();

// view drivers already registered

// fetch all drivers from backend
const fetchAllDriver=()=>{
  fetch(urlDrivers)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
    data.forEach((driver)=> {
      addDrivers(driver);
    });
  }).catch((error)=>{
    console.log(error);
  });
};

fetchAllDriver();
// create table to list all drivers
const viewBtn = document.getElementById("view");
const driversElement = document.getElementById("list");
const ulElement=document.getElementsByTagName("ul")

const addDrivers=(driver)=>{
  const driversList = [];
  viewBtn.addEventListener("click", (e) => {
    const listItemElement = document.createElement ("li");
    listItemElement.innerHTML = inputElementValue;
    listItemElement.classList.add(["list-group-item"])  
    
    const deleteBtn = document.createElement ("button")
    deleteBtn.classList.add("btn","btn-danger","btn-sm","float-right","ml-1")
    deleteBtn.innerHTML = "✕"
    deleteBtn.addEventListener ("click", (e) => { 
    e.preventDefault()
    listItemElement.remove()
    })

    const editBtn = document.createElement ("button")
    editBtn.classList.add("btn","btn-success","btn-sm","float-right")
    editBtn.innerHTML = "Update"
    editBtn.addEventListener ("click", (e) => { 
    e.preventDefault();
    completeTodo(_id);
    listItemElement.style.textDecoration = "line-through";         
    })

    listItemElement.appendChild(deleteBtn)
    listItemElement.appendChild(editBtn)
       
    driversElement.appendChild(listItemElement);
    driversList.push(listItemElement);
  })
}
  
