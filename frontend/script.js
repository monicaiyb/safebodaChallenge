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
    fetch("urlUsers",{
        method:"POST",
        body:userData,
        // headers{
        //     Accept:"application/json",
        //     "Content-Type":"application/json"
        // },
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log("Login successful",user)
        loginData();
    }). catch((error)=>{
        console.log(error);
    });
};

// // Add driver registration form data
// const regData=(value)=>{
    
//     const formInput = getElementById("register");
//     const regBtn=getElementById("register_btn");

//     const getformInput=()=>{
//         return formInput.value;
//     }
//     const formValue=getformInput(formInput);
//     regBtn.addEventListener("click",(event)=>{
//         event.preventDefault();
//         formInput.value="";
//     })
// }
// const regform=JSON.stringify();
// fetch('urlDrivers', { 
//     method: 'POST', 
//     body: form,
//       // headers{
//         //     Accept:"application/json",
//         //     "Content-Type":"application/json"
//         // },
//     })
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log("Driver registered succesfully",data)
//         regData();
//     }). catch((error)=>{
//         console.log(error);
//     });
  
  
// create list of drivers

// fetch all drivers from backend
// const fetchAllDrivers=()=>{
//     fetch(urlDrivers)
//     .then((res)=>res.json())
//     .then((data)=>{
//       console.log(data);
      
//     }).catch((error)=>{
//       console.log(error);
//     });
//   };
// fetchAllDrivers();

// const driversBtn =document.getElementById("drivers_btn");
// driversBtn.addEventListener("click",(event)=>{
//         event.preventDefault()
//       fetchAllDrivers();
//     });
        

