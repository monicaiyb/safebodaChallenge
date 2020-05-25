const urlUsers="http://localhost:3000/users/login"


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
    loginUser()
    emailInput.value="";

    passwordInput.value="";
    
    });
    }
    loginData();
    // create a new user
    const SignUpUser=(user)=>{
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

//Login a registered User
const loginUser = (user) =>{
    const userData = JSON.stringify();
    console.log (userData);
    fetch (urlUser, {
        method: "POST",
        body: userData,
        headers:{
            "Accept" : "application/json",
            "Content-Type" : "application/json",
         } 
    })
    .then((res=> res.json()))
    .then((data)=>{
    console.log(data);
        })
    .catch((error)=>{
    console.log(error)
    })
}