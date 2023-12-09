
function toggleNavbar() {
  const navLinks = document.querySelector(".nav-links");
  const profile = document.querySelector(".profile")
  navLinks.classList.toggle("show")
  profile.classList.toggle("hide")
}


document.addEventListener('DOMContentLoaded', function () {
  const testimonials = document.querySelectorAll('.testimonial');
  let currentTestimonialIndex = 0;

  function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
          if (i === index) {
              testimonial.classList.add('show-testimonial');
          } else {
              testimonial.classList.remove('show-testimonial');
          }
      });
  }

  function changeTestimonial() {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      showTestimonial(currentTestimonialIndex);
  }

  setInterval(changeTestimonial, 10000); // Change every 30 seconds
  showTestimonial(currentTestimonialIndex); // Show the initial testimonial
});
