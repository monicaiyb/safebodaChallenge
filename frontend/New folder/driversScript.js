const urlUsers="http://localhost:3000/users"
const urlDrivers="http://localhost:3000/drivers"


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
const newRider=(value)=>{
    const riderData=JSON.stringify(value);
    fetch(urlDrivers,{
      method:"POST",
      body: riderData,
      headers:{
      Accept: "application/json",
      "Content-Type": "application/json",
      },
    })
    .then((res)=>res.json())
    .then((data)=>{
      driverData(driver);
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    });
  };
    newRider();

// view drivers already registered

// fetch all drivers from backend
const fetchAllDriver=(driver)=>{
  fetch(urlDrivers)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
        addDrivers(driver);
    
    }).catch((error)=>{
          console.log(error);
  });
};

fetchAllDriver();
// create table to list all drivers


const addDrivers=(driver)=>{

const viewBtn = document.getElementById("view");
const driversElement = document.getElementById("list");
const ulElement=document.getElementsByTagName("ul")


  const driversList = [];
  viewBtn.addEventListener("click", (e) => {
    const listItemElement = document.createElement ("li");
    listItemElement.innerHTML = inputElementValue;
    listItemElement.classList.add(["list-group-item"])  
       
    driversElement.appendChild(listItemElement);
    driversList.push(listItemElement);
  })
}
  
