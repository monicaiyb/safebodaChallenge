const url="https://localhost:8080/users"

const loginData=(value)=>{
const emailInput =document.getElementById("login_email");
const passwordInput=document.getElementById("login_password");
const loginBtn=document.getElementById("login_submit");


const getInputValue=()=>{
return emailInput.value && passwordInput.value;
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
    fetch(url,{
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
        loginData(value);
    }). catch((error)=>{
        console.log(error);
    });
};

  
  

