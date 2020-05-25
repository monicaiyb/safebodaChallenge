const url="https://localhost:3000/users/login"

//Login a registered User
const loginUser = (logindata) =>{
    const userData = JSON.stringify(logindata);
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
}

//Actions expected on page
const emailInput =document.getElementById("loginemail");
const passwordInput=document.getElementById("loginpassword");
const loginBtn=document.getElementById("loginsubmit");

//Method to Return values from  above actions
const getElementValue = (Element) =>{return Element.value};

//When user clicks the sign in button
loginBtn.addEventListener("click", (event) => {
 event.preventDefault();
 const loginemail = getElementValue(emailInput);
 const loginpassword = getElementValue(passwordInput);
 const logindata = ({loginemail,loginpassword})

    if (logindata == " ") {
         alert("Please fill in both email and password fields");
                }
    else{ 
        loginUser(logindata);
     }
}) 
       
  
  

