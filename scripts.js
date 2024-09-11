//sticky header
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});
    

//form submit from internet
//script no longer works need to update
const scriptURL = 'https://script.google.com/macros/s/AKfycbyoKHURe9CcGRWWN-FAzv0u8av6zonotSueuB9p0Y80HMrrw34xO1mb5hezfYX7EgK-/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent, thank you!";
        setTimeout(function(){
            msg.innerHTML = "";
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

//small screen tabs
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidebar = document.querySelector('#sidebar');
let navLinks = document.querySelectorAll('.navLink');
let openBtn = document.querySelector('.openBtn');
let closeBtn = document.querySelector('.closeBtn');

openBtn.addEventListener("click",()=>{
    sidebar.classList.add('opened');
});
closeBtn.addEventListener("click",()=>{
    sidebar.classList.remove('opened');
});
navLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        sidebar.classList.remove('opened');
    });
});

