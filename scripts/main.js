// const toTopButton = document.getElementById("toTopButton");
const mainNav = document.getElementById("main-nav");
const about = document.getElementById('about');

// toTopButton.addEventListener("click", function()
// {
//     window.scrollTo({top: 0, left: 0, behavior: "smooth"});
// });

window.addEventListener('scroll', function()
{
    // toTopButton.classList.toggle("show", window.scrollY > 150);

    if(window.scrollY > about.offsetHeight)
    {
        mainNav.style.backgroundColor = "rgba(var(--accent-color), 0.9)";
    }
    else
    {
        mainNav.style.backgroundColor = "rgba(var(--accent-color), 1)";
    }
});

// $(document).ready(function()
// {
//     $(window).scroll(function()
//     {
//      if ($(this).scrollTop() > 150)
//      { 
//          $('.topButton').fadeIn();
//      }
//      else 
//      { 
//          $('.topButton').fadeOut();
//      }
//     });
    
//     $('.topButton').click(function()
//     {
//         $('html, body').animate({scrollTop : 0}, 800, 'easeInOutExpo');
//         return false;
//     });
// });