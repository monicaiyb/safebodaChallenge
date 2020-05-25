const url="http://localhost:8080/drivers"



// Add new rider
const newRider=(value)=>{
    const riderData=JSON.stringify(value);
    fetch(url,{
      method:"POST",
      body: riderData,
      headers:{
      Accept: "application/json",
      "Content-Type": "application/json",
      },
    })
    .then((res)=>res.json())
    .then((data)=>{
      regData(value);
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    });
  };
    newRider();

// view drivers already registered

// fetch all drivers from backend
const fetchAllDriver=(driver)=>{
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);

      }).catch((error)=>{
          console.log(error);
  });
};

fetchAllDriver();

// adding form inputs when user clicks submit on registration form
// Reference all registration form inputs
const regData=()=>{
const firstNameInput=document.getElementById("firstName");
const ninInput=document.getElementById("nin");
const phnoneInput=document.getElementById("phone");
const kinInput=document.getElementById("kin");
const regDateInput=document.getElementById("reg_date");
const lNameInput=document.getElementById("lname");
const ageInput=document.getElementById("age");
const stageInput=document.getElementById("stage");
const kinPhoneInput=document.getElementById("kin_phone");
const regLocationInput=document.getElementById("reg_location");
const regBtn=document.getElementById('register_btn');
const getElementValue=(element)=>{
  return element.value;
}

regBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  const firstNameValue=getElementValue('firstNameInput');
  const ninValue=getElementValue('ninInput');
  const phoneValue=getElementValue('phoneInput');
  const kinValue=getElementValue('kinInput');
  const regDateValue=getElementValue('regDateInput');
  const lNameValue=getElementValue('lNameInput');
  const ageValue=getElementValue('ageInput');
  const stageValue=getElementValue('stageInput');
  const kinPhoneValue=getElementValue('kinPhoneInput');
  const regLocationValue=getElementValue('regLocationInput');
  const formInput=({firstNameValue,ninValue,phoneValue,kinValue,regDateValue,lNameValue,ageValue,stageValue,kinPhoneValue,regLocationValue});
  newRider(formInput);
  });
}
  regData();

  