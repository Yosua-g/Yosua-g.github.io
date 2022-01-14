// Validation berjalan lancar jika no. telp tidak dimulai dengan 0
// akan tetapi seperti 09234684378 masih dapat lolos
// Firebase belum dapat menerima input

// firebase
const firebaseConfig = {
  apiKey: "AIzaSyDirUwzJrUoKMz9YTlgoNGsU_HlNX2TBow",
  authDomain: "yosua-gunawan-front-end.firebaseapp.com",
  projectId: "yosua-gunawan-front-end",
  storageBucket: "yosua-gunawan-front-end.appspot.com",
  messagingSenderId: "346300196264",
  appId: "1:346300196264:web:d01dc93dbfd8f992c8699d",
  measurementId: "G-MQ3Y00NR5K"
};

// habits
var img = document.getElementById("pro-img");

function memes() {
  img.src = '../images//analysts_Architect_INTJ_romantic_relationships.svg';
}

function emems() {
  img.src = '../images/analysts_Architect_INTJ_strengths.svg';
}

function semem() {
  img.src = '../images/analysts_Architect_INTJ_friendships.svg';
}

// nama masuk
window.addEventListener('load', () => {
  const judul = document.querySelector('.judul');
  judul.classList.add('judul-done');
});
// nav
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

// validation

function fnReset() {
  alert('Form Reseted!');


}

var errorMsg = document.getElementById('error');

function submitForm() {
  var form = document.getElementById("Form");
  finalise();
  // finalise();
}

function fnValidate() {
  if (!validateEmail()) {
    return;
  } else if (!validateUsername()) {
    return;
  } 
  // else if (!validatePhone()) {
  //   return;
  // } 
  // else if (!validateMessage()) {
  //   return;
  // }
  else {
    errorMsg.innerHTML = '';
    alert('Registration success!');


    submitForm();

  }
}

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("fomData")

//Get Submit Form
let submitButton = document.getElementById('submit')

var errorMsg = document.getElementById('error');

//Create Event Listener To Allow Form Submission
function finalise() {
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
  
    //Get Form Values
    let firstName = document.getElementById('cname').value
    let lastName = document.getElementById('cemail').value
    let country = document.getElementById('cmessage').value
  
    //Save Form Data To Firebase
    db.doc().set({
      cname: name,
      cemail: email,
      cmessage: message
    }).then( () => {
      console.log("Data saved")
    }).catch((error) => {
      console.log(error)
    })
  
    //alert
    alert("Your Form Has Been Submitted Successfully")
  })
}


function validateEmail() {

  var pEmail = document.getElementById('cemail').value;

  if (pEmail === '') {
    errorMsg.innerHTML = '*Email Must Be Filled';
    return false;
  } else if (!pEmail.endsWith('.com') || !pEmail.includes('@')) {
    errorMsg.innerHTML = '*Wrong email format!';
    return false;
  }


  errorMsg.innerHTML = '';
  return true;
}

function validateUsername() {

  var pUsername = document.getElementById('cname').value;


  if (pUsername === '') {
    errorMsg.innerHTML = '*Username Must Be Filled';
    return false;
  } else if (pUsername.length < 5) {
    errorMsg.innerHTML = '*Username must be more than 5 characters';
    return false;
  }


  errorMsg.innerHTML = '';
  return true;
}

function validatePhone() {
  var pPhone = document.getElementById('Form_pNumber').value;

  if (pPhone === '') {
    errorMsg.innerHTML = '*Phone number must be filled';
    return false;
  } else if ((pPhone.charAt(0) !== '0') && (pPhone.charAt(1) !== '8')) {
    errorMsg.innerHTML = '*Phone number not an Indonesian number';
    console.log(pPhone);
    return false;
    console.log(pPhone);
  } else if (isNaN(pPhone)) {
    errorMsg.innerHTML = '*Phone number icluded a not number';
    return false;
  } else if (pPhone.length < 9) {
    errorMsg.innerHTML = '*Phone number is not valid';
    return false;
  } else if (pPhone.length > 14) {
    errorMsg.innerHTML = '*Phone number is not valid';
    return false;
  }

  errorMsg.innerHTML = '';
  return true;
}

function validateMessage() {

  var pMessage = document.getElementById('cmessage').value;

  let counter = 0;

  for(let i = 0; i < pMessage.length; i++){
    if((pMessage.charAt(i) === ' ') && (pMessage.charAt(i-1) !== ' ')){
      counter++;
    }
  }

  if (pMessage === '') {
    errorMsg.innerHTML = '*No Message';
    return false;
  }
  else if (counter < 4) {
    errorMsg.innerHTML = 'Message too little';
    return false;
  }
  else if (counter > 100) {
    errorMsg.innerHTML = 'Message too much';
    return false;
  }

  errorMsg.innerHTML = '';
  return true;
  
}