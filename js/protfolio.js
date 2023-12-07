import hasTouchScreen from "./equipmentDetection.js";

const portfolios = [
    {
        id: 1,
        classification: "Game",
        name: "老七佳部落導覽",
        src: "./images/portfolio-senior-project.jpg",
        href: "https://www.facebook.com/csdgohome",
        description: `<p>透過Unity引擎結合VR眼鏡，在遊戲世界中體驗當地寫實的老七佳部落</p>
        <p>專題取名回佳，用意希望族人可以多回家看看自己部落的美</p>
        <p>在團體中我擔任場景、特效製作、程式撰寫及VR設定</p>`,
    },
    {
        id: 2,
        classification: "Web",
        name: "個人網站",
        src: "./images/portfolio-preview-image.jpg",
        href: "https://github.com/DoubleTian-tw/personal-webpage/tree/main",
        description: `<p>就是你現在看到的網頁，在About me的部分已經大致上簡單介紹</p>
        <p></p>
        `,
    },
    {
        id: 3,
        classification: "Slides",
        name: "ChatGPT的介紹簡報",
        src: "./images/portfolio-chatgpt-intro.jpg",
        href: "https://1drv.ms/p/s!AqpWpkjGJfWehgXQxjPbZuyio4SG?e=l5Ti0N",
        description: `<p>在2022年底時突然崛起的chatGPT顛覆整個世界的認知，
        越來越多話題都開始搭配著生成式AI所延伸</p>
        <p>為了讓同事們能夠更了解背景及應用原理，進行蒐集並透過簡報、實作的方式
        在會議上介紹給大家</p>`,
    },
    {
        id: 4,
        classification: "Tool",
        name: "方便辦公時的小工具",
        src: "./images/portfolio-work-helping-tool.jpg",
        href: "https://github.com/DoubleTian-tw/Fujitec_SpecTool",
        description: `<p>第一支side project，其目的是解決每日重複性的操作，
        例如開啟、建立指定資料夾、操作excel等等，大幅縮短惱人不必要的人工操作</p>`,
    },
    {
        id: 5,
        classification: "Web",
        name: "Pokemon Gym",
        src: "./images/portfolio-pokemonGym.jpg",
        href: "https://doubletian-tw.github.io/pokemon-Gym/",
        description: `<p>在玩Pokemon go時每次打道館都需要查相剋屬性，時在太麻煩又很難記住每一隻角色，到不如來做一個網頁來解決吧! 於是乎Pokemon Gym就誕生了!</p>`,
    },
];
const portfolio = document.querySelector(".portfolio");
const classification = document.querySelector(".classification");

window.addEventListener("load", function () {
    // Display Portfolio
    displayPortfolio(portfolios);
    // Display classification
    let classifications = getReduceClassification();
    displayClassifications(classifications);
    // Adding event listener to filter-btn
    setClassificationBtns();

    hoverPicture();
});

//取得portfolios資料中分類完後的大分類
function getReduceClassification() {
    return portfolios.reduce(
        function (values, item) {
            if (values.includes(item.classification) === false)
                values.push(item.classification);
            return values;
        },
        ["All"]
    );
}

//渲染portfolio大分類的名稱
function displayClassifications(items) {
    let result = items
        .map(function (item) {
            return `<li class="filter-btn" data-id=${item}>${item}</li>`;
        })
        .join("");
    classification.innerHTML = `<ul>${result}</ul>`;
}
//設定大分類按鈕的事件，按下後portfolio只顯示相同類別內容
function setClassificationBtns() {
    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const id = e.currentTarget.dataset.id;
            let items = portfolios.filter(function (item) {
                if (item.classification === id) return item;
            });
            if (id.toLowerCase() === "all") items = portfolios;
            displayPortfolio(items);
        });
    });
}

//渲染portfolio
function displayPortfolio(items) {
    let result = items
        .map(function (item) {
            return `<div class="item">
                    <div class="picture">
                        <a href=${item.href} target="_blank">
                            <img src=${item.src} alt=${item.name}>
                        </a>
                    </div>
                    <div class="description">
                        <h4>${item.name}</h4>
                        <div>${item.description}</div>
                    </div>
                </div>`;
        })
        .join("");
    portfolio.innerHTML = result;

    console.log(hasTouchScreen);
    if (hasTouchScreen === true) clickPictureOnMobile();
    // hoverPicture();
}

//滑鼠hover到picture事件，會顯示詳細資訊
function hoverPicture() {
    const pictures = document.querySelectorAll(".picture");

    pictures.forEach(function (pic) {
        const description = pic.nextElementSibling;
        //在每個picture中追加mouse enter事件
        pic.addEventListener("mouseenter", function () {
            //設定每個 description 的正確高度
            let height = 0;
            //取得 picture的下個相鄰元素 description
            for (let children of description.children) {
                // 取得每個元素包含本身、padding的高度
                const offsetH = children.offsetHeight;
                // 取得每個元素margin top & bottom的高度
                const marginH =
                    parseFloat(getComputedStyle(children).marginTop) +
                    parseFloat(getComputedStyle(children).marginBottom);
                height += offsetH + marginH;
            }
            description.style.height = `${height}px`;
        });
        //在每個picture中追加mouse out事件
        pic.addEventListener("mouseout", function () {
            // const description = pic.nextElementSibling;
            description.style.height = `0px`;
        });
    });
}

//如果是mobile進行點擊動作的話，先跳出確認視窗
function clickPictureOnMobile() {
    const pictures = document.querySelectorAll(".picture a");

    pictures.forEach((pic) => {
        // const href = pic.querySelector("a");
        console.log(pic);
        pic.addEventListener("click", (event) => {
            const name = event.currentTarget.querySelector("img").alt;
            const result = confirm(`目前即將跳轉至"${name}"`);

            if (result === false) event.preventDefault();
        });
    });
}
