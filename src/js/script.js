var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  //hide anchor tags
  $(document).ready(function() {
    // get the anchor link buttons
    const menuBtn = $('.nav-list');
    // when each button is clicked
    menuBtn.click(()=>{	
      // set a short timeout before taking action
      // so as to allow hash to be set
      setTimeout(()=>{
        // call removeHash function after set timeout
        removeHash();
      }, 5); // 5 millisecond timeout in this case
    });
  
    // removeHash function
    // uses HTML5 history API to manipulate the location bar
    function removeHash(){
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }
  });
  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Developer", "Programmer", "Engineer", "IT Specialist", "Competition Shooter", "Mechanic"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: ["Developer", "Programmer", "Engineer", "IT Specialist", "Competition Shooter", "Mechanic"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
});

//Drop Down CSS V2
const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});
//END

//search bar
var searchBar = document.getElementById("searchBar");

  searchBar.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      var searchQuery = searchBar.value;
      console.log(searchQuery);
      // Add code here to do something with the search query, such as search a database or update the page
      scrollToSection();
    }
  });

function scrollToSection() {
    var query = document.getElementById("searchBar").value.toLowerCase();

    //query for inputted page
    location.href = "#" + query;

    //query for unique searches
    if(query == "secret page"){
        location.href = "secret.html";
    }
    if(query == "instagram"){
        location.href = "https://www.instagram.com/aaron.mcguirk/";
    }
    if(query == "twitter"){
        location.href = "https://twitter.com/aaronmcguirk_";
    }
    if(query == "youtube"){
        location.href = "https://www.youtube.com/@AaronMcGuirk";
    }
    if(query == "linkedin"){
        location.href = "https://www.linkedin.com/in/aaronmcguirk";
    }
    if(query == "github"){
        location.href = "https://github.com/AaronMcGuirk007";
    }
    if(query == "email"){
        location.href = "mailto:amcguirkbusiness@gmail.com";
    }

    //project query searches
    if(query == "final website"){
        location.href = "https://github.com/AaronMcGuirk7/AaronMcGuirk7.github.io";
    }
    if(query == "ar tour app"){
        location.href = "https://github.com/SienaCollegeSoftwareEngineering/SoS_F19S20_F20S21_F21S22_F22S23";
    }
    if(query == "wii tank game"){
        location.href = "https://github.com/AaronMcGuirk007/Wii-Tank-Game";
    }
    if(query == "java animations"){
        location.href = "https://github.com/AaronMcGuirk007/Java-Animation";
    }
    if(query == "python text clustering"){
        location.href = "https://github.com/AaronMcGuirk007/Text-Clustering-Python";
    }
    if(query == "first website"){
        location.href = "https://github.com/AaronMcGuirk007/First-Website-Intro-HTML-CSS";
    }
  }

//search bar end

    var varEDU = document.getElementById('education');
    var varEXP = document.getElementById('experience');
    var varPROJ = document.getElementById('project');
    var varSKIL = document.getElementById('skill');
    var varSOCI = document.getElementById('media');
    varEDU.style.display = "block";
    varEXP.style.display = "none";
    varPROJ.style.display = "none";
    varSKIL.style.display = "none";
    varSOCI.style.display = "none";

    var span1 = document.getElementById('edu'); // Assumes element with id='edu'
    var span2 = document.getElementById('exp'); // Assumes element with id='exp'
    var span3 = document.getElementById('proj'); // Assumes element with id='proj'
    var span4 = document.getElementById('skil'); // Assumes element with id='skil'
    var span5 = document.getElementById('soci'); // Assumes element with id='soci'

    span1.onclick = function() {
        var div = document.getElementById('education');
        if (div.style.display === "none") {
            div.style.display = "block";
            varEXP.style.display = "none";
            varPROJ.style.display = "none";
            varSKIL.style.display = "none";
            varSOCI.style.display = "none";

        }
        else {
            div.style.display = "none";
            varEXP.style.display = "none";
            varPROJ.style.display = "none";
            varSKIL.style.display = "none";
            varSOCI.style.display = "none";
        }
    };
    span2.onclick = function() {
        var div = document.getElementById('experience');
        if (div.style.display === "none") {
            div.style.display = "block";
            varEDU.style.display = "none";
            varPROJ.style.display = "none";
            varSKIL.style.display = "none";
            varSOCI.style.display = "none";
        }
        else {
            div.style.display = "none";
            varEDU.style.display = "none";
            varPROJ.style.display = "none";
            varSKIL.style.display = "none";
            varSOCI.style.display = "none";
        }
    };
    span3.onclick = function() {
        var div = document.getElementById('project');
        if (div.style.display === "none") {
            div.style.display = "block";
            varEXP.style.display = "none";
            varEDU.style.display = "none";
            varSKIL.style.display = "none";
            varSOCI.style.display = "none";
        }
        else {
            div.style.display = "none";
            varEXP.style.display = "none";
            varEDU.style.display = "none";
            varSKIL.style.display = "none";
            varSOCI.style.display = "none";
        }
    };
    span4.onclick = function() {
        var div = document.getElementById('skill');
        if (div.style.display === "none") {
            div.style.display = "block";
            varEXP.style.display = "none";
            varEDU.style.display = "none";
            varPROJ.style.display = "none";
            varSOCI.style.display = "none";
        }
        else {
            div.style.display = "none";
            varEXP.style.display = "none";
            varEDU.style.display = "none";
            varPROJ.style.display = "none";
            varSOCI.style.display = "none";
        }
    };
    span5.onclick = function() {
        var div = document.getElementById('media');
        if (div.style.display === "none") {
            div.style.display = "block";
            varEXP.style.display = "none";
            varEDU.style.display = "none";
            varPROJ.style.display = "none";
            varSKIL.style.display = "none";
        }
        else {
            div.style.display = "none";
            varEXP.style.display = "none";
            varEDU.style.display = "none";
            varPROJ.style.display = "none";
            varSKIL.style.display = "none";
        }
    };

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})