// =======
// current year
// =======
const currentYear = new Date().getFullYear()
const copyrightYear = document.querySelector("footer .current-year")

copyrightYear.innerText = currentYear

// =======
// header expand on mobile
// =======
const header = document.querySelector("header")

header.onclick = function() {
	header.classList.toggle("expanded")
}


// =======
// modal
// =======
// Get the modal
const modal = document.getElementById("modal-demo");

// Get the button that opens the modal
const btn = document.getElementById("open-modal-demo");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const form = document.getElementById("demo");

 // modal.style.display = "none";

// When the user clicks on the button, open the modal
btn.onclick = function(e) {
	e.preventDefault();
  // modal.style.display = "block";
  modal.classList.toggle("showing");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  // modal.style.display = "none";
  modal.classList.toggle("showing");
  form.reset();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) { 
    // modal.style.display = "none";
    modal.classList.remove("showing");
    form.reset();
  }
}



// =======
// form submissions
// =======
const handleSubmit = (e) => {
  e.preventDefault()
  // let myForm = document.getElementById('pizzaOrder');
  let myForm = e.target;
  let formData = new FormData(myForm)
  // console.log(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => {
  	myForm.classList.add("form-success")
  }).catch((error) => {
  	myForm.classList.add("form-error")
  })
}

const ajaxForms = document.querySelectorAll("form.ajax");

ajaxForms.forEach(form => {
  form.addEventListener("submit", handleSubmit);
});
