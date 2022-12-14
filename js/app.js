/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//store the Sections in sections Variable
const sections=document.querySelectorAll('section');
//to detect the place of the navbar
const list=document.getElementById('navbar__list');
//Fragmen to avoid many reflow and repaint
const fragment=document.createDocumentFragment();


/**
 * End Global Variables
 
 * Begin Main Functions
*/

// build the nav
//to Loop through the sections
for(let section of sections){
    const ulist=document.createElement('li');
    const ids=section.getAttribute('id');
    const titles=section.getAttribute('data-nav');
    ulist.innerHTML = `<a class="menu__link" href="#${ids}"> ${titles} </a>`;
    //interactivity by clicking and Smooth Scroll
    ulist.addEventListener('click', (event)=> {
    event.preventDefault();
    section.scrollIntoView({
        behavior:'smooth',
        });
    });
    fragment.appendChild(ulist);
};
//outside the for loop to avoid many reflow and repaint
list.appendChild(fragment);

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll",()=>{
    sections.forEach(section=>{
        //test whether a section is in the viewport.
        const rec=section.getBoundingClientRect();
        const activeLink=document.querySelector(`a[href="#${section.id}"]`);
        if(rec.top>0 && rec.top<200){
            section.classList.add('your-active-class');
            activeLink.classList.add('your-active-class');
        }
        else{
            section.classList.remove('your-active-class');
            activeLink.classList.remove('your-active-class');

        }
    });

});




