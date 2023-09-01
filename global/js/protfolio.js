const protfolios = [
    {
        id: 1,
        classification: "Game",
        name: "老七佳部落導覽",
        src: "./images/protfolio-senior-project.jpg",
        href: "https://youtu.be/ZoPIULDfrJw?si=V6IxPAmD0-8LoI62",
        description: "lorem ipsum dolor sit amet, consectetur adip",
    },
    {
        id: 2,
        classification: "Web",
        name: "個人網站",
        src: "./images/protfolio-preview-image.jpg",
        href: "https://doubletian-tw.github.io/personal-webpage",
        description: "lorem ipsum dolor sit amet, consectetur adip",
    },
    {
        id: 3,
        classification: "Slides",
        name: "ChatGPT的介紹簡報",
        src: "./images/protfolio-chatgpt-intro.jpg",
        href: "https://1drv.ms/p/s!AqpWpkjGJfWehgXQxjPbZuyio4SG?e=l5Ti0N",
        description: "lorem ipsum dolor sit amet, consectetur adip",
    },
    {
        id: 4,
        classification: "Tool",
        name: "方便辦公時的小工具",
        src: "./images/protfolio-work-helping-tool.jpg",
        href: "https://github.com/DoubleTian-tw/Fujitec_SpecTool",
        description:
            "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip",
    },
];

const protfolio = document.querySelector('.protfolio');
const classification = document.querySelector(".classification");


window.addEventListener("load",function(){
    // Display Protfolio
    displayProtfolio(protfolios);
    // Display classification
    let classifications = protfolios.reduce(function(values, item){
        if (values.includes(item.classification) === false)
            values.push(item.classification);
        return values;
    }, ["All"]);
    let result = classifications.map(function(item){
        return `<li class="filter-btn" data-id=${item}>${item}</li>`;
    }).join("");
    classification.innerHTML = `<ul>${result}</ul>`;
    // Adding event listener to filter-btn
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(function(btn){
        btn.addEventListener('click',function(e){
            const id = e.currentTarget.dataset.id;
            let items = protfolios.filter(function(item){
                if (item.classification === id) return item;
            })
            if (id.toLowerCase() === "all") items = protfolios;
            displayProtfolio(items);
            popUpEffect();
        })
    })
})

function displayProtfolio(items){
    let result = items.map(function (item) {
        return `<div class="item">
            <div class="picture">
                <a href=${item.href} target="_blank">
                    <img src=${item.src} alt=${item.name}>
                </a>
            </div>
            <div class="description">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            </div>
            </div>`;
    })
    .join("");
    // let result = items.map(function (item) {
    //         return `<div class="item">
    //         <a href="${item.href}" target="_blank">
    //         <img src="${item.src}" alt="">
    //         </a>
    //         </div>`;
    //     })
    //     .join("");
    protfolio.innerHTML = result;

    hoverPicture();
}

//滑鼠hover到picture事件
function hoverPicture(){
    const pictures = document.querySelectorAll('.picture');
    
    pictures.forEach(function(pic){
        const description = pic.nextElementSibling;
        //在每個picture中追加mouse enter事件
        pic.addEventListener('mouseenter', function(){
            //設定每個 description 的正確高度
            let height = 0;
            //取得 picture的下個相鄰元素 desdescription
            for (chidren of description.children){
                // 取得每個元素包含本身、padding的高度
                const offsetH = chidren.offsetHeight;
                // 取得每個元素margin top & bottom的高度
                const marginH =
                    parseFloat(getComputedStyle(chidren).marginTop) +
                    parseFloat(getComputedStyle(chidren).marginBottom);
                height += (offsetH + marginH);
            }
            description.style.height = `${height}px`;
        })
        //在每個picture中追加mouse out事件
        pic.addEventListener('mouseout', function(){
            // const description = pic.nextElementSibling;
            description.style.height = `0px`;
        })
    })
}






