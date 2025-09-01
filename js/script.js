$(function(){
    //Smooth scroll
    var $root = $('html, body');
    $('a').click(function(){
       $root.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
       }, 800);
      return false;
    });

   //Sticky navigation on scroll.
      $(document).on('scroll', function(){
        if($(this).scrollTop() > 185){
            $('nav').addClass('nav-sticky');
        }else{
            $('nav').removeClass('nav-sticky');
        }
    });
    //Add active class to the nav on click.
    $('nav li a').click(function(){
    $('nav li a').removeClass('active');
    $(this).addClass('active');
    });

    // Toggle navigation for responsive menu
  const hamburger = document.querySelector('.sidebars');
  const navMenu = document.querySelector('nav ul');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// animate hear
// Select the like button
const likeBtn = document.querySelectorAll('.like-btn');

likeBtn.forEach((likeBtn) => {
  likeBtn.addEventListener('mouseover', () => {
      likeBtn.style.color = 'red'; // Turn red on hover
      likeBtn.style.transform = 'scale(1.2)'; // Slightly enlarge the icon
      likeBtn.style.transition = 'transform 0.2s, color 0.2s'; // Smooth transition
  });

  likeBtn.addEventListener('mouseout', () => {
      likeBtn.style.color = ''; // Reset to default color
      likeBtn.style.transform = ''; // Reset scale
  });
});
// Select the like button
const deletbtn = document.querySelectorAll('.delete-btn');

deletbtn.forEach((deletbtn) => {
// Add event listeners for hover effects
deletbtn.addEventListener('mouseover', () => {
    deletbtn.style.color = 'red'; // Turn red on hover
    deletbtn.style.transform = 'scale(1.2)'; // Slightly enlarge the icon
    deletbtn.style.transition = 'transform 0.2s, color 0.2s'; // Smooth transition
});

deletbtn.addEventListener('mouseout', () => {
    deletbtn.style.color = ''; // Reset to default color
    deletbtn.style.transform = ''; // Reset scale
});
});
$('.minus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
      value = value - 1;
  } else {
      value = 0;
  }

  $input.val(value);
});

$('.plus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value < 100) {
      value = value + 1;
  } else {
      value = 100;
  }

  $input.val(value);
});


});