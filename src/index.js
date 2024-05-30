

const annabot = () => {
  var $id = 0;

  $(".js-holder").click(function(e) {
    e.preventDefault();
    holder("open");
    $(".js-holder").blur();
    $("#c-annabot").addClass("hide");
  });

  $(".js-annabot").click(function(e) {
    e.preventDefault();
    holder("close");
    $(".js-annabot").blur();
    $("#c-annabot").removeClass("hide");
    $(".c-fab").addClass("hide");

    $("#c-new-content").empty();
    $(".c-annabot__content .c-annabot__options").removeClass("hide").addClass("active");
  });

  $(".js-annabot-exit").click(function(e) {
    e.preventDefault();
    holder("close");
    $(".js-annabot-exit").blur();
    $("#c-annabot").addClass("hide");
    $(".c-fab").removeClass("hide");

    setTimeout(function () {
      $("#c-new-content").empty();
      $(".c-annabot__content .c-annabot__options").removeClass("hide").addClass("active");
    }, 100 );

  });

  $(".c-annabot__button").click(function(e) {
    var $this = $(this);
    e.preventDefault();

    // var $delimiter = "_";
    // var $num = $this.attr("id").split($delimiter)[1];
    var $data = $this.data("question");
    var $answer = "#c-annabot-q .c-annabot__answer--" + $data;
    var $updated = "c-annabot__answer--" + $id;
    var $location = "#c-new-content";
    var $buttons = ".c-annabot__options";

    $this.closest($buttons).removeClass("active").addClass("hide");
    $($answer).clone(true,true).addClass("active").attr('id', $updated).appendTo($location);

    var $animationId = "#" + $updated + " > div";

    $($animationId).each(function(index){
        var $this = $(this);
        setTimeout(function () {
          $this.addClass("active");

          var msgDiv = $("#c-annabot-content");
          msgDiv.scrollTop = msgDiv.scrollHeight;

          setTimeout(function () {
            $(msgDiv).scrollTop($(msgDiv)[0].scrollHeight);
          }, 10 );

        }, index*1500);
      });

    $id++;
    console.log($id);

  });
}

const lazyLoad = () => {
  var myLazyLoad = new LazyLoad();
}

const workHover = () => {
  $(".js-work").hover(function () {
    var $this = $(this);
    $(".c-nav").addClass("show-work");
    $(".c-nav__work").addClass("work-is-visible");

  });

  $(".s-nav").mouseleave(function(){
    $(".c-nav").removeClass("show-work");
    $(".c-nav__work").removeClass("work-is-visible");
  });

}

const aHover = () => {
  $("a").hover(
  function() {
    $(".c-nav-list__link--logo").addClass( "is-active" );
  }, function() {
    $(".c-nav-list__link--logo").removeClass( "is-active" );
  }
);
}

const workBounce = () => {

  $(window).bind("load", function() {

    $(".c-loader").addClass("loaded");
    anime({
      targets: '.js-bounce-in',
      opacity: 1,
      translateY: [20,0],
      delay: anime.stagger(200)
    });
  });
}

const bouncing = () => {

  var delayInMilliseconds = 500;

  setTimeout(function() {
    anime({
      targets: '.js-bounce-in-home',
      opacity: 1,
      translateY: [20,0],
      delay: anime.stagger(200)
    });
}, delayInMilliseconds);

}

const headerEye = () => {

  var eyeSvg = {
    targets: '.c-hero__eye svg',
    opacity: 1,
    translateY: [30,0],
    delay: 500
  };

  anime({
    targets: '.c-hero__eye__inner',
    translateY: [-20,0],
    direction: 'alternate',
    duration: 2000,
    autoplay: true,
    loop: true,
    easing: 'easeInOutQuad'
  });

  var eyeLashes = {
    targets: '.c-hero__eye svg .c-eyelash',
    opacity: 1,
    delay: anime.stagger(200, {easing: 'cubicBezier(.5, .05, .1, .3)'})
  };

  var timelineEyeIntro = anime.timeline();
  timelineEyeIntro.add(eyeSvg).add(eyeLashes);

  // main eye animations

  var eyeCornea = {
    targets: '.c-cornea',
    translateX: -40,
    autoplay: true,
    duration: 3000,
    delay: 1500,
    easing: 'easeInOutExpo'
  };

  var eyeCorneaUp = {
    targets: '.c-cornea',
    translateY: -10,
    autoplay: true,
    duration: 100,
    easing: 'easeInOutExpo'
  };

  var eyeCorneaMid = {
    targets: '.c-cornea',
    translateY: 0,
    autoplay: true,
    duration: 50,
    delay: 1000,
    easing: 'easeInOutExpo'
  };

  var eyeCorneaBottom = {
    targets: '.c-cornea',
    translateY: 10,
    autoplay: true,
    duration: 50,
    delay: 1000,
    easing: 'easeInOutExpo'
  };

  var eyeCorneaStart = {
    targets: '.c-cornea',
    translateX: 0,
    translateY: 0,
    autoplay: true,
    duration: 1000,
    delay: 1000,
    easing: 'easeInOutExpo'
  };

  var eyeCorneaDown = {
    targets: '.c-cornea',
    translateY: 80,
    scale: 0.7,
    autoplay: true,
    duration: 500,
    delay: 3000,
    easing: 'easeInOutExpo'
  }

  var eyeRollUp = {
    targets: '.c-cornea',
    translateY: -30,
    autoplay: true,
    duration: 1300,
    delay: 400,
    easing: 'easeInOutBack'
  }

  var eyeRollDown = {
    targets: '.c-cornea',
    translateY: 0,
    autoplay: true,
    duration: 200,
    easing: 'easeOutBack'
  }

  var eyeCornPanRight = {
    targets: '.c-cornea',
    translateX: 80,
    autoplay: true,
    duration: 2000,
    delay: 200,
    easing: 'easeInOutBack'
  }

  var eyeCorneaReUp = {
    targets: '.c-cornea',
    translateX: 0,
    translateY: 0,
    scale: 1,
    autoplay: true,
    duration: 600,
    delay: 2000,
    easing: 'easeInOutExpo'
  }

  var eyeScale = {
    targets: '.c-hero__eye__scale',
    scale: 4.2,
    duration: 600,
    delay: 1500,
    easing: 'easeOutElastic(1, .8)'
  }

  var eyeScaledZoomLeft = {
    targets: '.c-cornea',
    translateX: -40,
    duration: 2500,
    easing: 'easeInOutExpo'
  }

  var eyeScaledZoomRight = {
    targets: '.c-cornea',
    translateX: 40,
    duration: 2500,
    easing: 'easeInOutExpo'
  }

  var eyeScaledZoomCenter= {
    targets: '.c-cornea',
    translateX: 0,
    duration: 2500,
    easing: 'easeInOutExpo'
  }

  var eyeScaleBack = {
    targets: '.c-hero__eye__scale',
    scale: 1,
    duration: 600,
    delay: 500,
    easing: 'easeInOutExpo'
  }

  var timelineEye = anime.timeline({
    loop: true,
    autoplay: true
  });

  timelineEye.add(eyeCornea)
  .add(eyeCorneaUp)
  .add(eyeCorneaMid)
  .add(eyeCorneaBottom)
  .add(eyeCorneaStart)
  .add(eyeRollUp)
  .add(eyeRollDown)
  .add(eyeCorneaDown)
  .add(eyeCornPanRight)
  .add(eyeCorneaReUp)
  .add(eyeScale)
  .add(eyeScaledZoomLeft)
  .add(eyeScaledZoomRight)
  .add(eyeScaledZoomCenter)
  .add(eyeScaleBack)

}

const navCookie = () => {

  var $hasVisit = localStorage.getItem('site.visted');
  if ($hasVisit == null) {

    var navIntro = {
      targets: '.s-home .c-nav-list__link',
      opacity: 1,
      translateY: [10,0],
      delay: anime.stagger(100, {easing: 'cubicBezier(.5, .05, .1, .3)'})
    };

    var navIntroDelay = {
      targets: '.s-home .c-nav-list__link',
      translateY: [10,0],
      delay: 1000
    };

    var timelineNav = anime.timeline();
    timelineNav.add(navIntroDelay).add(navIntro);

    localStorage.setItem('site.visted', 1);
  } else {
    $(".s-home .c-nav-list__link, .s-home .c-nav-list__link").css("opacity","1");
  };

}

const mosaic = () => {

  $('.js-mosaic').each(function(i){
    var $this = $(this);
    var $data = $this.data("bg");
    var $location = '/images/work/'
    $this.css('background-image', 'url(' + $location + $data + ')');
  });

}

// const eyeFollow = () => {

//   $("html").mousemove(function(event) {
//   var $eye = $(".c-logo__eye");
//   var $x = ($eye.offset().left) + ($eye.width() / 2);
//   var $y = ($eye.offset().top) + ($eye.height() / 2);
//   var $rad = Math.atan2(event.pageX - $x, event.pageY - $y);
//   var $rot = ($rad * (180 / Math.PI) * -1) + 180;
//   $eye.css({
//     '-webkit-transform': 'rotate(' + $rot + 'deg)',
//     '-moz-transform': 'rotate(' + $rot + 'deg)',
//     '-ms-transform': 'rotate(' + $rot + 'deg)',
//     'transform': 'rotate(' + $rot + 'deg)'
//   });
// });

// }



const blobs = () => {

  anime({
    targets: '.c-wip__header',
    opacity: 1,
    delay: 300,
    translateY: [-100,0],
    duration: 1000,
    easing: 'easeInOutExpo'
  });

  anime({
    targets: '.c-wip__blob',
    opacity: 1,
    easing: 'easeInOutBack',
    translateY: [0,-200],
    translateX: [0,100],
    direction: 'alternate',
    duration: 8000,
    autoplay: true,
    loop: true,
    delay: anime.stagger(500)
  });
}

const wipLinks = () => {

  $(".c-wip__timeline-content a").each(function() {
    $(this).attr('target','_blank');
    $(this).attr('rel','nofollow noreferrer');
  });

}


$(document).ready(() => {
  lazyLoad();
  bouncing();
  workBounce();
  // eyeFollow();
  headerEye();
  mosaic();
  workHover();
  aHover();
  wipLinks();
  blobs();
  annabot();
});

// Moving cursor dot
{
    const lerp = (a, b, n) => (1 - n) * a + n * b;


    const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
        }
        return {
            x: posx,
            y: posy
        }
    }



    // Custom mouse cursor.
    class CursorFx {
        constructor(el) {
            this.DOM = {
                el: el
            };
            this.DOM.dot = this.DOM.el.querySelector('.cursor__inner--dot');
            this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
            this.bounds = {
                dot: this.DOM.dot.getBoundingClientRect(),
                circle: this.DOM.circle.getBoundingClientRect()
            };
            this.scale = 1;
            this.opacity = 1;
            this.mousePos = {
                x: 0,
                y: 0
            };
            this.lastMousePos = {
                dot: {
                    x: 0,
                    y: 0
                },
                circle: {
                    x: 0,
                    y: 0
                }
            };
            this.lastScale = 1;
            this.lastOpacity = 1;

            this.initEvents();
            requestAnimationFrame(() => this.render());
        }
        initEvents() {
            window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));
        }
        render() {
            this.lastMousePos.dot.x = lerp(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width / 2, 1);
            this.lastMousePos.dot.y = lerp(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height / 2, 1);
            this.lastMousePos.circle.x = lerp(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width / 2, 0.15);
            this.lastMousePos.circle.y = lerp(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height / 2, 0.15);
            this.lastScale = lerp(this.lastScale, this.scale, 0.15);
            this.lastOpacity = lerp(this.lastOpacity, this.opacity, 0.1);
            this.DOM.dot.style.transform = `translateX(${(this.lastMousePos.dot.x)}px) translateY(${this.lastMousePos.dot.y}px)`;
            this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.circle.x)}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;
            this.DOM.circle.style.opacity = this.lastOpacity
            requestAnimationFrame(() => this.render());
        }
        enter() {
            cursor.scale = 2.7;
        }
        leave() {
            cursor.scale = 1;
        }
        click() {
            this.lastScale = 1;
            this.lastOpacity = 0;
        }
    }
    const cursor = new CursorFx(document.querySelector('.cursor'));

}

// Typewriter

//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap"> '+this.txt+'</span>';

        var that = this;
        var delta = 150 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .pulse { border-right: 2px solid grey}";
        document.body.appendChild(css);
    };



    // Send a Message

    window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

//   form.addEventListener("submit", function (ev) {
//     ev.preventDefault();
//     var data = new FormData(form);
//     ajax(form.method, form.action, data, success, error);
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // This ensures that the code runs after the DOM is fully loaded
  var form = document.querySelector("form"); // Adjust selector as needed
  
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  } else {
    console.error("Form element not found.");
  }
});


// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}});


// Timeline JS here

const itemsPerPage = 5; // Number of items per page
let currentPage = 1; // Current page number

// Fetch all timeline items
const timelineItems = document.querySelectorAll('.c-wip__timeline-item');
const totalPages = Math.ceil(timelineItems.length / itemsPerPage);

// Function to display items of the current page
function displayBlogPosts(page) {
    // Hide all items
    timelineItems.forEach(item => {
        item.style.display = 'none';
    });

    // Calculate the start and end indices of items for the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    // Show items for the current page
    for (let i = startIndex; i < endIndex && i < timelineItems.length; i++) {
        timelineItems[i].style.display = 'block';
    }

    // Disable buttons if on the first or last page
    document.querySelectorAll('.prev-button').forEach(button => {
        button.disabled = page === 1;
    });

    document.querySelectorAll('.next-button').forEach(button => {
        button.disabled = page === totalPages;
    });
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}

// Function to go to the previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayBlogPosts(currentPage);
        scrollToTop(); // Scroll to top after changing the page
    }
}

// Function to go to the next page
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        displayBlogPosts(currentPage);
        scrollToTop(); // Scroll to top after changing the page
    }
}

// Attach event listeners to buttons
document.querySelectorAll('.prev-button').forEach(button => {
    button.addEventListener('click', prevPage);
});

document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('click', nextPage);
});

// Initialize the pagination by displaying the first page
displayBlogPosts(currentPage);


// Timeline JS end here