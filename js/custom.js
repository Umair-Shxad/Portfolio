

// Nav Toggle

const navOpen = document.querySelector(".nav-toggle");

navOpen.addEventListener("click", () => {
    var nav = document.getElementById("nav");
    nav.classList.toggle("nav-open");
});


$(function(){

  // Smooth Scrolling
  
  var smoothscroling = $(".scroll")
  
  console.log(smoothscroling);
  smoothscroling.click(function(e){
      e.preventDefault();
      $("body,html").animate({
          scrollTop: $(this.hash).offset().top + 10
      })
  });
  
  // Active link
  
  $(window).scroll(function(){
      var scrollLocation = $(this).scrollTop();
      smoothscroling.each(function(){
          var sectionOffset = $(this.hash).offset().top
  
          if( sectionOffset <= scrollLocation ){
              $(this).parent().addClass("active");
              $(this).parent().siblings().removeClass("active");
          }
      })
  });
  
  
  
  // Fixed Nav
  
  const nav = document.querySelector("#nav");
  const banner = document.querySelector("#banner");
  
  const bannerOptions = {
    rootMargin: "-550px 0px 0px 0px"
  };
  
  const bannerObserver = new IntersectionObserver(function(
    entries, 
    bannerObserver
    ) {
  
      entries.forEach(entry => {
        if (!entry.isIntersecting){
          nav.classList.add("scroll-nav");
        } else {
          nav.classList.remove("scroll-nav");
        }
      });
  
  }, 
  bannerOptions);
  
  bannerObserver.observe(banner);
  
  });







// Certificate Modal

// Get the Certificate button
var cLink = document.getElementById("c_link");

// Get the Certificate Modal
var cModal = document.getElementById("c_modal");

// Get Close button Certificate Modal
var closeCModal = document.querySelector(".close-c-modal");

// Open Certificate Modal
cLink.addEventListener("click", openCertificateModal);

function openCertificateModal(){
  cModal.classList.add("openModal");
  cModal.classList.remove("closeModal");
  document.body.classList.add("body_overflow");
}

// Close Certificate Modal
closeCModal.addEventListener("click", closeCertificateModal);

function closeCertificateModal(){
  cModal.classList.add("closeModal");
  document.body.classList.remove("body_overflow");
}
