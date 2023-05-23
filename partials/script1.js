gsap.registerPlugin(ScrollTrigger);

let getRatio = el => window.outerHeight / (window.outerHeight + el.offsetHeight);

gsap.utils.toArray("section").forEach((section, i) => {

  section.bp = section.querySelector(".bp"); 

  // Give the backgrounds some random images

  var picss = ["url(pic1.jpeg)",

"url(pic2.jpg)",

"url(pic3.jpeg)"

];

var pic = document.querySelector('section');

  

//function showImage() {

            var aa = Math.floor(Math.random() * picss.length);

            var imgg = picss[aa];

  // Give the backgrounds some random images

   section.bp.style.backgroundImage = imgg; // pics[a]; //showImage(); //`url(myPix[randomNum])`; //Screenshot_20221204-214401_Chrome.jpg)`;

  

  // the first image (i === 0) should be handled differently because it should start at the very top.

  // use function-based values in order to keep things responsive

  gsap.fromTo(section.bp, {

    backgroundPosition: () => i ? `50% ${-window.outerHeight * getRatio(section)}px` : "50% 0px"

  }, {

    backgroundPosition: () => `50% ${window.outerHeight * (1 - getRatio(section))}px`,

    ease: "none",

    scrollTrigger: {

      trigger: section,

      start: () => i ? "top bottom" : "top top", 

      end: "bottom top",

      scrub: true,

      invalidateOnRefresh: true // to make it responsive

    }

  });

});

