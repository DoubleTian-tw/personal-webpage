//取得navbar物件
const navbar = document.querySelector('.navbar');
//取得navbar的高度
const navbarHeight = navbar.clientHeight;
console.log(navbarHeight);
//取得畫面的一半
const halfVwHeight = window.innerHeight / 3;
let sleepBool = false;
//取得toggle-button
const toggleButton = document.querySelector('.toggle-button');
const toggleBar = document.querySelectorAll('.bar');
//判斷toggle button是否按下
let toggleTrigger = false;
//取得navlinks
const navLinks = document.querySelector('.nav-links');
const navLinksLi = navLinks.querySelectorAll('a');
const navLinksLi_count = navLinksLi.length;
//目前active class所處位置
let currentActiveLi = document.querySelector('.active');
//取得各個main中div的位置
const sectionTitle = document.querySelectorAll('div[id^="my"]');

console.log(document.documentElement);
//resize window
window.addEventListener('resize',()=>{
    if (window.innerWidth > 992) {
        toggleTrigger = false;
        navLinks.classList.remove("show-list-transition");
        navLinks.style.height = "100%";
    } 
    else {
        navLinks.classList.add("show-list-transition");
        navLinks.style.height = "0px";
    }
    
})

window.addEventListener('scroll',()=>{
    //取得目前滾動Y軸的位置
    const currentScrollY = window.scrollY;

    //處理navbar滾動的狀態
    if (currentScrollY > navbarHeight) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
        navbar.classList.remove("sleep");
    }

    if (currentScrollY > halfVwHeight) {
        navbar.classList.add("awake");
        sleepBool = true;
    }
    if (currentScrollY < halfVwHeight && currentScrollY > navbarHeight) {
        navbar.classList.remove("awake");
        if (sleepBool) {
            navbar.classList.add("sleep");
            sleepBool = false;
        }
    }
    navLinks.style.backgroundColor =
        currentScrollY > halfVwHeight ? "white" : null;

    //處理滾動時目前處在的main中div相對頂部的位置
    //active class所處位置設定
    sectionTitle.forEach(function (sec, index) {
        if (
            currentScrollY >= sec.offsetTop &&
            currentScrollY <= sec.offsetTop + sec.offsetHeight
        ) {
            if (navLinksLi[index].classList.contains("active") == false) {
                currentActiveLi.classList.remove("active");
                navLinksLi[index].classList.add("active");
                currentActiveLi = navLinksLi[index];
            }
        }
    });
})


toggleButton.addEventListener('click', function() {
    navLinksDisplay();
});
toggleButton.addEventListener("touchStart", function () {
    navLinksDisplay();
});

navLinksLi.forEach(li=>{
    li.addEventListener('click',function(event) {
        //active class所處位置設定
        currentActiveLi.classList.remove("active");
        li.classList.add("active");
        currentActiveLi = li;
        //如果視窗小於992時，才執行顯示navlink
        if (window.innerWidth < 992) navLinksDisplay();
        //點擊時取消默認狀態，並平順的移動到指定id上
        if (li.getAttribute('href').startsWith('#')) {
            event.preventDefault(); //取消默認狀態
            smoothJumpOver(li.getAttribute("href"));
        }
    })
})
//控制navlinks的顯示狀況
function navLinksDisplay(){
    let navLinksLi_height = parseInt(getComputedStyle(navLinksLi[0]).height); 
    toggleTrigger = toggleTrigger ? false : true;
    navLinks.style.height = (toggleTrigger == true) ?  
        `${navLinksLi_height * navLinksLi_count}px` : '0px';
}
//滑順的移動到目標title
function smoothJumpOver(herfTarget) {
    const targetElement = document.querySelector(herfTarget);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
        });
    }    
}

