/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("header");

var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
if(navToggle){
  navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
  })
}
if(navClose){
  navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
  })
}
const scrollActive = () =>{
  const scrollY = window.pageYOffset

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    sectionsClass.classList.add('active-link')
  }else{
    sectionsClass.classList.remove('active-link')
  }                                                    
})
}
window.addEventListener('scroll', scrollActive)

const contactForm=document.getElementById('contact__form'),
      contactName=document.getElementById('contact-name'),
      contactEmail=document.getElementById('contact-email'),
      contactProject=document.getElementById('contact-project'),
      contactMessage=document.getElementById('contact-message')

const sendEmails=(e)=>{
    e.preventDefault()
        if(contactName.value==='' || contactEmail.value==='' || contactProject.value===''){
            contactMessage.classList.remove('color-blue')
            contactMessage.classList.add('color-red')

            contactMessage.textContent='Write all the input fields 📩'
        }else{
            emailjs.sendForm('service_wp7n7ey','template_nj16l3f','#contact__form','No7rYaveqexJ0yDUV')
                .then(()=>{
                    contactMessage.classList.add('color-blue')
                    contactMessage.textContent='Message sent ✅'
                    setTimeout(()=>{
                        contactMessage.textContent=''
                    }, 5000)
                }, (error)=>{
                    alert('OOPS! SOMETHING HAS FAILED.....', error)
                })

            contactName.value=''
            contactEmail.value=''
            contactProject.value=''
        }
}
contactForm.addEventListener('submit', sendEmails)
