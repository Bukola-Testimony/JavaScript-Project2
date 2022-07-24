const reg = /^(\+\d{3}|[0-9])\d{10}$/;

const telcos = new Map([
  [['0803', '0806', '0814', '0810', '0813', '0814', '0816', '0703', '0706', '0903', '0906', '0704', '0916', '0913', '0702'], "MTN"],
  [['0905', '0705', '0815', '0811', '0807', '0805', '0915'], 'GLO'],
  [['0802', '0808', '0812', '0708', '0701', '0902', '0901', '0912', '0904', '0907'], 'Airtel'],
  [['0909', '0809', '0817', '0818', '0908'], 'etisalat'],
]);


const toCheck = "+2348060330819"



function networkValidate(number, network) {
  for (const [key, value] of network) {
    for (const prefix of key) {
      let sliceNumber = number.slice(0, 4);
      if (number.startsWith("+234")) sliceNumber = "0" + number.slice(4, 7)
      if (sliceNumber === prefix) {
        return value;
      } 
    }
  } 
}

// validate2(toCheck, telcos);
/*if(networkType === "MTN"){
      setImage.src = "/logos/mtnlogo.jpg";
    } else if(networkType === "etisalat"){
      setImage.src = "/logos/9mobile.svg";
    } else if(networkType === "Airtel"){
      setImage.src = "/logos/Airtel.svg";
    } else if(networkType === "GLO"){
      setImage.src = "/logos/Globacom.svg";
    } else {
      setImage.prepend(newElement);
    }
const newElement = document.createElement("p")
newElement.innerText = "Wrong phone number"
*/
  
const setImage = document.querySelector(".logo");
const error = document.querySelector('.error');

const validate = (e_target, regex) => {
  setImage.src = "";
  // error.id = "";
  if (regex.test(e_target.value)) {
    let networkType = networkValidate(e_target.value, telcos)
    if(networkType) {
      switch (networkType) {
      case "MTN":
        setImage.src = "./mtnlogo.jpg";
        break;
      case "etisalat":
        setImage.src = "./9mobile.svg";
        break;
      case "Airtel":
        setImage.src = "./Airtel.svg";
        break;
      case "GLO":
        setImage.src = "./Globacom.svg";
        break;
      } 
    } // else console.log("We got here");  
  } else {
    error.className = "error2";
    console.log("We got here");
  }
    // console.log(`${setImage.src.id} Here`)
  error.className = "error";
}



const phoneNumber = document.querySelector('#phone_number');
phoneNumber.addEventListener('keyup', (event) => {
  validate(event.target, reg);
})
