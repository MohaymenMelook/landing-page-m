/**
 * Define Global Variables
 *
 */
const fragment = document.createDocumentFragment();
const navBar = document.querySelector(".navbar__menu");
const navList = document.querySelector("#navbar__list");
const sectionEl = document.querySelectorAll("section");
const pageHeader = document.querySelector(".page__header");

let activeSectionIndex = 0;

/**
 * End Global Variables
 
*/

/**
 * Begin Main Functions
 *
 */

// build the nav
const brand = `<a class="navbar-brand" href="#">Udacity</a>`;
navBar.insertAdjacentHTML("afterbegin", brand);
sectionEl.forEach((section) => {
  const li = document.createElement("li");
  li.innerHTML = `<a class="menu__link " href="#${section.id}">${section.id}</a>`;
  fragment.appendChild(li);
});
navList.appendChild(fragment);

const navLinks = document.querySelectorAll(".menu__link");


// Scroll to anchor ID using scrollTO event
navList.addEventListener("click", (e) => {
    e.preventDefault();
    // Smooth Scrolling
    const linkClicked = e.target.getAttribute("href");
    const toSection = document.querySelector(linkClicked);
    toSection.scrollIntoView({ behavior: "smooth" });
  
});


// Add class 'active' to section when near top of viewport

function update() {
  sectionEl.forEach((section, index) => {
    const bounding = section.getBoundingClientRect();
    section.classList.remove("your-active-class");
    navLinks.forEach((link) => {
        link.classList.remove("active");
      });
    if (bounding.top <= 250 && bounding.bottom >= 250) {
      section.classList.add("your-active-class");
      activeSectionIndex = index;
    }
    
   
    // Add "active"
    if (navLinks[activeSectionIndex]) {
      navLinks[activeSectionIndex].classList.add("active");
    }
  });
}

const hideNavShowBtn = () => {
  pageHeader.classList.add("hide");
  button.classList.remove("hide");
};

// Show Navbar while Scrolling
const showNavHideBtn = () => {
  pageHeader.classList.remove("hide");
  button.classList.add("hide");
};



// show navBar if mouse over on it or in top of the page
document.addEventListener("mouseover", (e) => {
  if (
    (e.clientY <= pageHeader.offsetHeight) || (window.pageYOffset < pageHeader.offsetHeight)
  ) {
    showNavHideBtn();
    isMouseOnNavbar = true;
  } else {
    
      hideNavShowBtn();
      isMouseOnNavbar = false;
    
  }
});

document.addEventListener("scroll", () => {
  // Navigate Sections using Scrolling
  update();
  // Show Navbar and Hide toTop Button
  showNavHideBtn();  
  if (window.pageYOffset <100){
    navLinks.forEach((link) => {
        link.classList.remove("active");
      });
  }
});

//button scrool to top
//create button
const btnTop = `<button class="btn-top">&#11165;
</button>`;
document.body.insertAdjacentHTML("beforeend", btnTop);
const button = document.querySelector(".btn-top");
// set function to button
button.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

});

// toggle navbar in small screen
function toggleNav () {       

    if ( navList.style.display === "" )
    navList.style.display = "flex";

    else
    navList.style.display = "";
}
