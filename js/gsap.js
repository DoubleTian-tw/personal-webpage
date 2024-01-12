import hasTouchScreen from "./equipmentDetection.js";

const bodyWidth = document.body.offsetWidth;

const showItem = (item, leaveBack) => {
    leaveBack = leaveBack || 1;
    let x = 0,
        y = leaveBack * 100;
    if (item.classList.contains("gs-fromLeft")) {
        x = -100;
        y = 0;
    }
    if (item.classList.contains("gs-fromRight")) {
        x = 100;
        y = 0;
    }
    //item.style.transform = `translate(${x},${y})`;
    gsap.fromTo(
        item,
        {
            x: x,
            y: y,
        },
        {
            duration: 1.25,
            x: 0,
            y: 0,
            opacity: 1,
            ease: "expo",
        }
    );
};
const showAbsoluteItem = (item, leaveBack) => {
    leaveBack = leaveBack || 1;
    let x = -50,
        y = leaveBack === 1 ? -20 : -80;
    gsap.fromTo(
        item,
        {
            x: 0,
            y: 0,
            xPercent: x,
            yPercent: y,
        },
        {
            duration: 2,
            x: 0,
            y: 0,
            xPercent: -50,
            yPercent: -50,
            opacity: 1,
            ease: "expo",
        }
    );
};
const showItemSpin = (item, leaveBack) => {
    leaveBack = leaveBack || -1;

    if (bodyWidth > 992) item = ".gs-spin";
    gsap.fromTo(
        item,
        {
            x: leaveBack * 100,
            y: 0,
            rotateY: 0,
        },
        {
            x: 0,
            y: 0,
            rotateY: leaveBack * 360,
            duration: 2,
            opacity: 1,
            stagger: 0.4,
            ease: "expo",
        }
    );
};
const hideItem = (item) => {
    gsap.set(item, { opacity: 0 });
};
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".gs-reveal").forEach((item) => {
        hideItem(item);

        ScrollTrigger.create({
            trigger: item,
            start: "top 70%",
            end: "bottom top",
            onEnter: () => {
                if (item.classList.contains("gs-spin")) {
                    showItemSpin(item);
                } else {
                    showItem(item);
                }
                if (item.classList.contains("dynamicData"))
                    ScrollTrigger.refresh();
            },
            onEnterBack: () => {
                // ScrollTrigger.refresh();
                if (item.classList.contains("gs-spin")) {
                    showItemSpin(item, 1);
                } else {
                    showItem(item, -1);
                }
            },
            onLeave: () => hideItem(item),
        });
    });
    gsap.utils.toArray(".gs-absolute").forEach((item) => {
        hideItem(item);

        ScrollTrigger.create({
            trigger: item,
            // start: "top 70%",
            onEnter: () => showAbsoluteItem(item),
            onEnterBack: () => showAbsoluteItem(item, -1),
            onLeave: () => hideItem(item),
        });
    });

    //偵測動態資料載入後DOM樹的變化
    const targetNode = document.querySelector(".classification");
    const config = { childList: true }; //監測參數

    const observerFunction = (mutationsList, observer) => {
        for (let mutation of mutationsList) {
            if (mutation.type === "childList") {
                const buttons = targetNode.childNodes[0].childNodes;
                buttons.forEach((btn) => {
                    btn.addEventListener("click", () => {
                        ScrollTrigger.refresh();
                    });
                });
            }
        }
    };
    const observer = new MutationObserver(observerFunction);
    observer.observe(targetNode, config); //執行監測
});

// const animFromLeft = gsap.fromTo(
//     fromLeft,
//     {
//         x: -200,
//         opacity: 0,
//         paused: true,
//     },
//     {
//         x: 0,
//         opacity: 1,
//         scrollTrigger: {
//             trigger: fromLeft,
//             ease: "expo.out",
//         },
//     }
// );
// const animFromRight = gsap.fromTo(
//     fromRight,
//     {
//         x: 200,
//         opacity: 0,
//         paused: true,
//     },
//     {
//         x: 0,
//         opacity: 1,
//         scrollTrigger: {
//             trigger: fromLeft,
//             ease: "expo.out",
//         },
//     }
// );

// ScrollTrigger.create({
//     trigger: [fromLeft, animFromRight],
//     start: "top center",
//     onEnter: () => {
//         animFromLeft.play();
//         animFromRight.play();
//     },
// });
// ScrollTrigger.create({
//     trigger: [fromLeft, animFromRight],
//     start: "top bottom",
//     onLeaveBack: () => {
//         animFromLeft.pause(0);
//         animFromRight.pause(0);
//     },
// });
