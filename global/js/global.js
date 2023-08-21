//取得navbar物件
const navbar = document.querySelector('.navbar');
//取得navbar的高度
const navbarHeight = navbar.clientHeight;
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
//取得各個main中div的位置
const sectionTitle = document.querySelectorAll('div[id^="my"]');
console.log(sectionTitle);
window.addEventListener('resize',()=>{
    if (window.innerWidth > 992) {
        toggleTrigger = false;
        navLinks.classList.remove("show-list");
        navLinks.classList.remove("show-list-transition");
    } 
    else {
        navLinks.classList.add("show-list-transition");
    }
    
})
window.addEventListener('scroll',()=>{
    //取得目前滾動Y軸的位置
    const currentScrollY = window.scrollY;
    
    //處理navbar滾動的狀態
    if (currentScrollY > navbarHeight) {
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
        navbar.classList.remove("sleep");
        
    }
    
    if (currentScrollY > halfVwHeight) {
        navbar.classList.add('awake');
        sleepBool = true;
    }
    if (currentScrollY < halfVwHeight && currentScrollY > navbarHeight) {
        navbar.classList.remove("awake");
        if (sleepBool){
            navbar.classList.add("sleep");
            sleepBool = false;
        }
    }    
    navLinks.style.backgroundColor = currentScrollY > halfVwHeight ? "white" : null;
    
    //處理滾動時目前處在的main中div相對頂部的位置
    sectionTitle.forEach(function(sec,index) {
        // console.log(sec.offsetTop);
        if (
            currentScrollY >= sec.offsetTop &&
            currentScrollY <= sec.offsetTop + sec.offsetHeight) {
            if (navLinksLi[index].classList.contains("active") == false) {
                navLinksLi.forEach((x) => x.classList.remove("active"));
                navLinksLi[index].classList.add("active");
            }
        }
    })
})

window.addEventListener('click', (event) => {
    const clickedTarget = event.target;
    //smooth Jump Over
    if (clickedTarget.tagName === "A" &&
    clickedTarget.getAttribute("href").startsWith("#")
    ) {
        event.preventDefault(); //取消默認狀態
        smoothJumpOver(clickedTarget.getAttribute("href"));
    }

    //處理toggle button顯示條件
    if (clickedTarget === toggleButton) navLinksDisplay();
    toggleBar.forEach((bar) => {
        if (clickedTarget === bar) navLinksDisplay();
    });


    if (clickedTarget.tagName === "A"){
        //處理navlink點擊條件
        for (let li of navLinksLi) {
            if (clickedTarget == li) {
                console.log(li);
                //刪除所有navlink上的active class
                navLinksLi.forEach((x) => x.classList.remove("active"));
                //添加目前點擊的navlink
                li.classList.add("active");
                //如果視窗小於992時，才執行顯示navlink條件
                if (window.innerWidth < 992) navLinksDisplay();
                break;
            }
        }
    }
    
})
function navLinksDisplay(){
    toggleTrigger = toggleTrigger ? false : true;
    if (toggleTrigger)
        navLinks.classList.add("show-list");
    else
        navLinks.classList.remove("show-list");
}
function smoothJumpOver(herfTarget) {
    const targetElement = document.querySelector(herfTarget);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
        });
    }    
} 
function activeNavbar(target) {
    for (let li of navLinksLi) {
        if (target == li) {
            //刪除所有navlink上的active class
            navLinksLi.forEach((x) => x.classList.remove("active"));
            //添加目前點擊的navlink
            li.classList.add("active");
            break;
        }
    }
}

