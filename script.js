// -------------------
const signIn = document.querySelector('.sign-in');
const x = document.querySelector('.x');
var formm = document.querySelector('.formm')

// FORM sing Or Out -------------
function singOrOut(params) {
    // form open -----------------
signIn.addEventListener('click', () => {
    console.log('click');
    formm.style.display = "block"
})
// form close-----------------
x.addEventListener('click', () => {
    formm.style.display = "none"
})
};
singOrOut();

// ----------------------------------
const navEnd = document.querySelector('.nav-end');

var on = 1;

navEnd.addEventListener('click', () =>{
    console.log('cl');
    
    if(on == 1) {
        document.querySelector('.side-nav').style.display = "block";
        navEnd.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>' 
        on = 0;
    } else {
        document.querySelector('.side-nav').style.display = "none"; 
        navEnd.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>'
        on = 1;
    }
})


// -----------------------------------
let tm = gsap.timeline()

tm.from('.inner-nav .nav-right',{
    x:-3000,
    scale:2,
    opacity:0,
    duration:1,
})
tm.from( '.nav-left', {
    y:-30,
    opacity:0,
    duration:.5,
})
tm.from( '.nav-center ul li', {
    y:-30,
    opacity:0,
    duration:.5,
    stagger:0.1,
})

tm.from('.hero .inner-cnt', {
    opacity:0,
    duration:1,

})

// lv lider ------------------
gsap.to('.lv-slider h1',{
    transform:'translateX(-75%)',
    scrollTrigger:{
        trigger:'.lv-slider',
        scroller:'body',
        // markers:true,
        start:'top 0%',
        end:'top -100%',
        pin:'.lv-slider',
        scrub:2,
    }
})

// headline ----------

gsap.from( '.headline h1',{
    opacity:0,
    scale:.5,
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:'.headline h1',
        scroller:'body',
        // markers:true,
        start:'top 85%',
        // end:'top 100%',
        // scrub:2
    }
})

// show-bags start from here ----------------

gsap.from('.show-bags .bag-show-1',{
    x:-800,
    duration:.5,
    opacity:.4,
    filter:'grayscale(70)',
    scrollTrigger:{
        trigger:'.show-bags .bag-show-1',
        scroller:'body',
        // markers:true,
        start:'top 80%',
        end:'top 160',
        scrub:2

    }
})
gsap.from('.show-bags .bag-show-2',{
    x:700,
    duration:.5,
    opacity:.4,
    duration:1,
    filter:'grayscale(70)',
    scrollTrigger:{
        trigger:'.show-bags .bag-show-1',
        scroller:'body',
        // markers:true,
        start:'top 80%',
        end:'top 160',
        scrub:2,
        
    }
})

// --------- info 

gsap.from( '.info',{
    opacity:0,
    scale:.5,
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:'.info',
        scroller:'body',
        // markers:true,
        start:'top 95%',
        end:'top 80%',
        // scrub:2
    }
    


})

// show-bags-2 start from here --------------

gsap.from('.show-bags-2 .bag-show-1',{
    // y:-300,
    x:-700,
    duration:.5,
    opacity:0,
    // scale:0,
    scrollTrigger:{
        trigger:'.show-bags-2 .bag-show-1',
        scroller:'body',
        // markers:true,
        start:'top 40%',
        // end:'top 30',
        // scrub:2,

    }
})
gsap.from('.show-bags-2 .bag-show-2',{
    // y:-300,
    x:700,
    duration:.5,
    opacity:0,
    // scale:0,
    // duration:1,
    scrollTrigger:{
        trigger:'.show-bags-2 .bag-show-2',
        scroller:'body',
        // markers:true,
        start:'top 40%',
        // end:'top 100',
        // scrub:2,
        
    }
})

// show-bags-3 start from here -----------------

gsap.from('.show-bags-3 .bag-show-1',{
    x:-800,
    duration:.5,
    opacity:.4,
    filter:'grayscale(70)',
    scrollTrigger:{
        trigger:'.show-bags-3 .bag-show-1',
        scroller:'body',
        // markers:true,
        start:'top 80%',
        end:'top 100',
        scrub:2,

    }
})
gsap.from('.show-bags-3 .bag-show-2',{
    x:700,
    duration:.5,
    opacity:.4,
    duration:1,
    filter:'grayscale(70)',
    scrollTrigger:{
        trigger:'.show-bags-3 .bag-show-1',
        scroller:'body',
        // markers:true,
        start:'top 80%',
        end:'top 100',
        scrub:2,
        
    }
})

// scaleup img ----------

gsap.to( '.show-perfume .scaleup',{
    scale:2.3,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.show-perfume .scaleup',
        scroller:'body',
        // markers:true,
        start:'top 30%',
        end:'top 10%',
        scrub:3,
        
    }



})









