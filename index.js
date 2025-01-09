/* Show MENU */
const navMenu = document.getElementByIdElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* menu show */
if(navToggle) {
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
}

/* menu hidden */ 
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* remove menu mobile */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ADD BLUR TO HEADER */
const blurHeader = () =>{
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the blur header class to
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* =============EMAIL JS=============== */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.peventDefault()

    // sserviceID - templateID - #form - publickey
    emailjs.sendForm('service_l08425i', 'template_r51rtsi', '#contact-form', 'gJy6SNfyieVxd7mI5')
            .then(() =>{
                // Show sent Message
                contactMessage.textContent = 'Message sent successfully'

                // Remove message after five seconds
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000)

                // Clear input fields
                contactForm.reset() 
                
            }, () =>{
                //show error message
                contactMessage.textContent = 'Message not sent (service error)'
            })
} 

contactForm.addEventListener('submit', sendEmail)

/* SHOW SCROLL UP */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* SCROLL SECTION ACTIVE LINK */
const section = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop -58,
               sectionId = current.getAttribute('id'),
               sectionClass = document.querySelector('.nav a{href*=' + sectionId + ']')
    
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)




