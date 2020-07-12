AOS.init({
    easing: 'ease-in-out-sine'
});
var rellax = new Rellax('.rellax');

var preogressbar = document.getElementById('preogressbar');
var percent = document.getElementById('percent');

var totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    var progress = (window.pageYOffset / totalHeight) * 100;
    preogressbar.style.height = progress + "%";
}
function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});
var typed = new Typed('#typed', {
    strings: ["Photographer", "Student", "UX / UI designer","Web Designer"  ],
    typeSpeed: 100
  });
  
  