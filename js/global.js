//取得navbar物件
const navbar = document.querySelector(".navbar");
//取得navbar的高度
const navbarHeight = navbar.clientHeight;
//取得畫面的一半
const halfVwHeight = window.innerHeight / 3;
let sleepBool = false;
//取得toggle-button
const toggleButton = document.querySelector(".toggle-button");
const toggleBar = document.querySelectorAll(".bar");
//判斷toggle button是否按下
let toggleTrigger = false;
//取得navlinks
const navLinksContainer = document.querySelector(".links-container");
const navLinks = document.querySelector(".links");
const scrollLinks = document.querySelectorAll(".scroll-link");
const logo = document.querySelector(".logo");
const navLinksLi = navLinks.querySelectorAll("a");
const navLinksLi_count = navLinksLi.length;
//目前active class所處位置
let currentActiveLi = document.querySelector(".active");
//取得各個main中div的位置
const sectionTitle = document.querySelectorAll('div[id^="my"]');
//取得goback link
const gobackLink = document.querySelector(".goBack-link").childNodes[1];

window.addEventListener("scroll", () => {
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
        gobackLink.style.display = "block";
    }
    if (currentScrollY < halfVwHeight && currentScrollY > navbarHeight) {
        navbar.classList.remove("awake");
        if (sleepBool) {
            navbar.classList.add("sleep");
            sleepBool = false;
        }
        gobackLink.style.display = "none";
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
});

toggleButton.addEventListener("click", function () {
    navLinksDisplay();
});
toggleButton.addEventListener("touchStart", function () {
    navLinksDisplay();
});

scrollLinks.forEach((li) => {
    li.addEventListener("click", function (event) {
        // active class所處位置設定
        if (li.classList.contains("goBack-link") === false) {
            currentActiveLi.classList.remove("active");
            li.classList.add("active");
            currentActiveLi = li;
            //如果視窗小於992時，才執行顯示navlink
            if (window.innerWidth < 992) navLinksDisplay();
        }
        //點擊時取消默認狀態，並平順的移動到指定id上
        if (li.getAttribute("href").startsWith("#")) {
            event.preventDefault(); //取消默認狀態
            smoothJumpOver(li.getAttribute("href"));
        }
    });
});
logo.addEventListener("click", function (event) {
    event.preventDefault();
    smoothJumpOver(logo.firstElementChild.getAttribute("href"));
});

//控制navlinks的顯示狀況
function navLinksDisplay() {
    let navLinksHeight = navLinks.getBoundingClientRect().height;
    // console.log(navLinksHeight);
    toggleTrigger = toggleTrigger ? false : true;
    if (toggleTrigger) navLinksContainer.style.height = `${navLinksHeight}px`;
    else navLinksContainer.style.height = "0px";
}
//滑順的移動到目標title
function smoothJumpOver(hrefTarget) {
    const targetElement = document.querySelector(hrefTarget);
    // console.log(herfTarget);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
        });
    }
}
