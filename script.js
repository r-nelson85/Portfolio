

// We select the element we want to target
var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {  
  entries.forEach((entry) => {
    if (entry.isIntersecting) {    
      scrollToTopBtn.classList.add("showBtn");
    } else {    
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);
</script>


Resources