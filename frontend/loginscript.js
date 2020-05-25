const url="http://localhost:8080/users"

    const loginBtn=document.querySelector(".login")
    loginBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        const emailInput =document.querySelector(".loginemail");
        const passwordInput=document.querySelector(".loginpassword");   
        
        const getElementValue=(element)=>{
            return element;
          }
            const emailValue=getElementValue(emailInput);
            const passwordValue=getElementValue(passwordInput);
            const loginData=({emailValue,passwordValue});
            loginUser(loginData)
    })
    
    // create a new user
    const SignUpUser=(user)=>{
        const userData=JSON.stringify(user)
        fetch(url,{
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
    fetch (url, {
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

    const logoutBtn=getElementById("logout");
    const user () {
      
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
  logoutBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    
  })
}

