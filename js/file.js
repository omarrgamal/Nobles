

$(document).ready(function () {
    $('.nav-menu-btn').click(function () {
        $('.nav-menu').fadeToggle(500);
    });

    $('.nav-contact').click(function () {
        $('.nav-menu').fadeOut(500);
    });

    $('.nav-menu').click(function () {
        $(this).fadeOut(500);
    })
});

$(function () {
    $(window).on("load", function () {
        $('.loading').fadeOut(1000);
        $("html, body").animate({ scrollTop: 0 }, 0);
        $('.load').delay(500).slideUp(1500);

        $("html").css("overflow-y", "auto");

    });
});

// Start Slogan slider
// $(document).ready(function () {
//     $('#slogan-slider').owlCarousel({
//         loop: true,
//         margin: 0,
//         mouseDrag: false,
//         touchDrag: false,
//         nav: false,
//         dots: false,
//         autoplay: true,
//         autoplayTimeout: 7000,
//         smartSpeed: 2500,
//         rtl: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 1
//             },
//             1000: {
//                 items: 1
//             }
//         }
//     })
// });


// End Slogan Slider

// Start About

const aboutSliderNext = document.querySelectorAll('.carousel-control-next');
const aboutSliderPrev = document.querySelector('.carousel-control-prev');
const aboutNext = document.querySelector('.about-next');
const aboutPrev = document.querySelector('.about-prev');
const aboutItem1 = document.querySelector('.about-item1');
const aboutItem2 = document.querySelector('.about-item2');



// // aboutPrev.addEventListener('click', function () {
// //     aboutSliderPrev.click();

// // });


setInterval(function () {
    aboutSliderNext[0].click();
    aboutSliderNext[1].click();
}, 4000);



// End About 


// Start Portfolio
$('#port-slider').owlCarousel({
    stagePadding: 50,
    loop: true,
    dots: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 2000,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
        1300: {
            item: 3
        }
    }
})

let owl1 = document.querySelector('.owl1');
let owl2 = document.querySelector('.owl2');
let owl3 = document.querySelector('.owl3');
let owl4 = document.querySelector('.owl4');
let allPort = document.querySelector('all-port');
let brandBtn = document.querySelector('.port-branding');
let webBtn = document.querySelector('.port-web');
let mediaBtn = document.querySelector('.port-media');
let portOwlContainer = document.querySelector('.owls-container');


//        margin: 20px 10px;

allPort = document.querySelector('.all-port').onclick = function () {
    $(owl2).fadeOut();
    $(owl3).fadeOut();
    $(owl4).fadeOut();
    $(owl1).delay(500).fadeIn();
    portOwlContainer.style.cssText = `
     margin: 20px -30px;
    `;
}



brandBtn = document.querySelector('.port-branding').onclick = function () {
    $(owl1).fadeOut();
    $(owl3).fadeOut();
    $(owl4).fadeOut();
    $(owl2).delay(500).fadeIn();
    portOwlContainer.style.cssText = `
     margin: 20px 10px;
    `;
}


webBtn = document.querySelector('.port-web').onclick = function () {
    $(owl1).fadeOut();
    $(owl2).fadeOut();
    $(owl4).fadeOut();
    $(owl3).delay(500).fadeIn();
    portOwlContainer.style.cssText = `
     margin: 20px 10px;
    `;
}



mediaBtn = document.querySelector('.port-media').onclick = function () {
    $(owl1).fadeOut();
    $(owl2).fadeOut();
    $(owl3).fadeOut();
    $(owl4).delay(500).fadeIn();
    portOwlContainer.style.cssText = `
     margin: 20px 10px;
    `;
}



// End Portfolio



// Start Records

let recordsH3s = document.querySelectorAll(".records h3");
let records = document.querySelector(".records");
const recordsContainer = document.querySelector('.records .fake-container');
let started = false; // Function Started ? No

window.onscroll = function () {
    if (window.scrollY >= records.offsetTop - 400) {
        if (!started) {
            recordsH3s.forEach(function (recordH3) {
                startCount(recordH3);
                recordH3.style.display = "block";
            });
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);


}



// End Records



// ====== Start Services


let serviceRowRight = document.getElementById('services-row-right'); // Main white box;
let sections = Array.from(document.querySelectorAll('.x-serv>div'));
let sectionsDiv = Array.from(document.querySelectorAll('.x-serv'))
let contentArrServices = [];
let index = 0;
let title = 'Digital Marketing';




contentArrServices = [
    {
        titleh6: "Digital Marketing", // h6
        img: './imgs/serv-digital.jpg', // We will take this source and put it in the background image of it in css
        header1: 'Amplify Your Online Presence', // h3 
        header2: 'Through Strategic Digital Solutions', // h4
        para: `In today’s digital business landscape, successful marketing campaigns and strategic positioning are
    crucial for establishing a robust online presence and drive meaningful engagement.

    <br> <br>
    Our team of experts specializes in leveraging diverse online channels to increase brand awareness,
    boost traffic, and generate valuable leads. Through identifying your distinctive value proposition,
     markets, and crafting comprehensive online strategies that align with your business
        objectives.`, //

    },

    {
        titleh6: "Branding", // h6
        img: './imgs/serv-branding.jpg', // We will take this source and put it in the background image of it in css
        header1: 'Empowering Your Brand Story', // h3 
        header2: 'Empowering Your Business Success', // h4
        para: `A brand today is all about how it makes your customers feel. Through in-depth discovery, we
                immerse ourselves in your business, laying the foundation to develop a unique and authentic brand
                strategy.

    <br> <br>
                Our branding services include logo design, visual identity development and brand guidelines. We
                transform your vision into powerful and impactful visuals that resonate with your target audience,
                and ultimately contributes to the overall business’s success`, // <p>
    },

    {
        titleh6: "Web Development", // h6
        img: './imgs/serv-web.jpg', // We will take this source and put it in the background image of it in css
        header1: 'Transforming Web Experiences', // h3 
        header2: 'One Line of Code at a Time', // h4
        para: `
    Our holistic web design and development services cover every stage of the process, from
    conceptualization to execution and deployment. We strive to create captivating websites that offer
    an exceptional online experience with a seamless, intuitive user interface.
    
        <br> <br>
    By combining our creative expertise with technical proficiency,
    we deliver websites that are not
    only well-designed and visually impressive but built with clean and efficient code, adhering tp
    industry best practices and standards
        `, // <p>
    },

    {
        titleh6: "Media Production", // h6
        img: './imgs/serv-media.jpg', // We will take this source and put it in the background image of it in css
        header1: 'Elevating the Art of Storytelling', // h3 
        header2: 'Through the Lens of Creativity', // h4
        para: `
        We specialize in creating and producing high-quality, informative, and well-structured video
        content that engages viewers and drives audience growth.
        Our complete video production service covers every aspect, from storyboarding to location
        scouting.

            <br> <br>
        Additionally, we offer comprehensive post-production services to enhance the final
        product on the screen. We work closely with you to develop compelling narratives and bring
        visually captivating concepts to life on screens`, // <p>
    },

    {
        titleh6: "Printing", // h6
        img: './imgs/serv-printing.jpg', // We will take this source and put it in the background image of it in css
        header1: 'Printing Excellence in Motion', // h3 
        header2: 'Where Possibilities Finds its Canvas', // h4
        para: `As one of the pioneers in the printing industry, we take pride in our state-of-the-art facility where we
        have invested in advanced digital and offset printing machinery to deliver high-quality results.
        Moreover, we also offer a range of specialized equipment to enhance the finishing.

    <br> <br>
        To ensure the highest level of accuracy and color fidelity, we have integrated and latest CTP
        (Computer to Plate) technology for color separation. This cutting-edge technology allows us to
        achieve precise color reproduction while maintaining consistency throughout the process.`,

    },

    {
        titleh6: "General Supplies", // h6
        img: './imgs/serv-general.jpg', // We will take this source and put it in the background image of it in css
        header1: 'Supplying Your Success', // h3 
        header2: 'Every Step of the Way', // h4
        para: `In the supplies category, we present a diverse range of premium supplies services that cater to
                various industries, including promotional items, office essentials and industry specific materials.
                
                <br><br>
                Our selection features an array of products manufactured with great attention to detail that meet
                the highest quality standards. We source these items from reputable suppliers who strictly comply
                with certifications and requirements.`,


    },
]





const newArr = sections.map(function (x, i) {
    x.addEventListener('mouseover', function () {
        index = i;
        contentArrServices[i]['title'] = x.innerHTML;

        serviceRowRight.style.opacity = 0;

        setTimeout(function () {
            serviceRowRight.style.cssText = `
                transition: all .4s linear;
                opacity: 1;
            `
        }, 400);


        setTimeout(function () {
            serviceRowRight.style.transitionDuration = '0s';
            console.log('removed')
        }, 500);


        show();

    });

});

function show() {

    /* 
                <ul>
                    <li>
                        <img src="${liImgSrc}" alt="">
                        <h5> ${contentArrServices[index].firstLiH5}</h5>
                    </li>
    
                    <li>
                        <img src="${liImgSrc}" alt="">
                        <h5>${contentArrServices[index].secondLiH5}</h5>
                    </li>
    
                    <li>
                        <img src="${liImgSrc}" alt="">
                        <h5>${contentArrServices[index].thirdLiH5}</h5>
                    </li>
                </ul>
    */

    serviceRowRight.innerHTML =
        `
    <div class="col-12">
        <h6><p>(${index + 1}) ${contentArrServices[index].titleh6}</p></h6>
        <div class="se-right1">
        </div>
    </div>

    <div class="col-12">
        <div class="se-right2">
            <h3>${contentArrServices[index].header1}</h3>
            <h3>${contentArrServices[index].header2}</h3>
            <p>${contentArrServices[index].para}</p>
        </div>
    </div>

        
        `

    //             

    let seRight1 = document.querySelector('.se-right1');

    seRight1.style.cssText = `
    animation: rowRight 1s linear forwards alternate;
    transition: background-image 0.5s ease-in-out;
    margin-top: 15px !important;
    background: url(${contentArrServices[index].img}) center center no-repeat;
    background-size: cover;
    height: 400px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    `;




} show();



// ====== End Services


// Start Partners

let contentArr = [
    { title: "JW Marriott Hotels", scope: "Just Scope", partnerImg: "./imgs/1.png" },
    { title: "FedEx Express", scope: "FedEx Express", partnerImg: "./imgs/2.png" },
    { title: "American International Group", scope: "American International Group", partnerImg: "./imgs/3.png" },
    { title: "Mövenpick Hotels & Resorts", scope: "Mövenpick Hotels & Resorts", partnerImg: "./imgs/4.png" },
    { title: "Deutsche Bank AG", scope: "Deutsche Bank AG", partnerImg: "./imgs/5.png" },
    { title: "Oracle", scope: "Oracle", partnerImg: "./imgs/6.png" },
    { title: "Al-Futtaim Group", scope: "Al-Futtaim Group", partnerImg: "./imgs/7.png" },
    { title: "Western Union", scope: "Western Union", partnerImg: "./imgs/8.png" },
    { title: "Baker Hughes", scope: "Baker Hughes", partnerImg: "./imgs/9.png" },
    { title: "Nissan Motor Co. Ltd.", scope: "Nissan Motor Co. Ltd.", partnerImg: "./imgs/10.png" },
    { title: "KIA", scope: "KIA", partnerImg: "./imgs/11.png" },
    { title: "Citroën", scope: "Citroën", partnerImg: "./imgs/12.png" },
    { title: "Gambro", scope: "Gambro", partnerImg: "./imgs/13.png" },
    { title: "Nortel Networks Inc.", scope: "Nortel Networks Inc.", partnerImg: "./imgs/14.png" },
    { title: "Natcom", scope: "Natcom", partnerImg: "./imgs/15.png" },
    { title: "Alico", scope: "Alico", partnerImg: "./imgs/16.png" },
    { title: "Wachovia", scope: "Wachovia", partnerImg: "./imgs/17.png" },
    { title: "Rotary International", scope: "Rotary International", partnerImg: "./imgs/18.png" },
    { title: "Curves International, Inc.", scope: "Curves International, Inc.", partnerImg: "./imgs/19.png" },
    { title: "Dalydress", scope: "Dalydress", partnerImg: "./imgs/20.png" },
    { title: "KuKuRuZa Gourmet Popcorn", scope: "KuKuRuZa Gourmet Popcorn", partnerImg: "./imgs/21.png" },
    { title: "Staron Egypt", scope: "Staron Egypt", partnerImg: "./imgs/22.png" },
    { title: "DSD Ferrometalco", scope: "DSD Ferrometalco", partnerImg: "./imgs/23.png" },
    { title: "Tyco Healthcare", scope: "Tyco Healthcare", partnerImg: "./imgs/24.png" },
    { title: "Covidien", scope: "Covidien", partnerImg: "./imgs/25.png" },
    { title: "Givaudan", scope: "Givaudan", partnerImg: "./imgs/26.png" },
    { title: "Fresenius Kabi", scope: "Fresenius Kabi", partnerImg: "./imgs/27.png" },
    { title: "Cairo Scan Radiology & Labs", scope: "Cairo Scan Radiology & Labs", partnerImg: "./imgs/28.png" },
    { title: "Baheya Hospital", scope: "Baheya Hospital", partnerImg: "./imgs/29.png" },
    { title: "Cura Hospitals", scope: "Cura Hospitals", partnerImg: "./imgs/30.png" },
    { title: "As-Salam International Hospital", scope: "As-Salam International Hospital", partnerImg: "./imgs/31.png" },
    { title: "Cleopatra Hospitals", scope: "Cleopatra Hospitals", partnerImg: "./imgs/32.png" },
    { title: "Nozha International Hospital", scope: "Nozha International Hospital", partnerImg: "./imgs/33.png" },
    { title: "Andalusia Hospitals", scope: "Andalusia Hospitals", partnerImg: "./imgs/34.png" },
    { title: "Academy of Scientific Research and Technology", scope: "Academy of Scientific Research and Technology", partnerImg: "./imgs/00.png" },
    { title: "Mevac", scope: "Mevac", partnerImg: "./imgs/36.png" },
    { title: "Copad Egypt", scope: "Copad Egypt", partnerImg: "./imgs/37.png" },
    { title: "Liptis Pharmaceuticals", scope: "Liptis Pharmaceuticals", partnerImg: "./imgs/38.png" },
    { title: "Pharaonia Pharmaceuticals", scope: "Pharaonia Pharmaceuticals", partnerImg: "./imgs/39.png" },
    { title: "BioMED Pharmaceutical Industries", scope: "BioMED Pharmaceutical Industries", partnerImg: "./imgs/41.png" },
    { title: "Orchidia Pharmaceutical Industries", scope: "Orchidia Pharmaceutical Industries", partnerImg: "./imgs/40.png" },
    { title: "Eddygypt Giordano Poultry Plast", scope: "Eddygypt Giordano Poultry Plast", partnerImg: "./imgs/00.png" },
    { title: "Express Media", scope: "Express Media", partnerImg: "./imgs/00.png" },
    { title: "IMPRO Egypt", scope: "IMPRO Egypt", partnerImg: "./imgs/44.png" },
    { title: "BIM", scope: "asfra", anotherScope: 'agasdgsd', partnerImg: "./imgs/45.png" },
];


let htmlArr = []; // the array that carrying the output from slicing the content Arr
let startNum = 0; // Number we start counting from and it will equal per page with every next or prev
let perPage = 10; // The total increase with every click so we can define how many elements we want to be shown per page
let contentArrIndex = 0;
let partnersLiStart = []; // Carrying the Html of every li in order
let partnersUl = document.querySelector('.partners-ul');
let partnersLeft = document.querySelector('.partners-left');
let arrowsIndexNum = document.querySelector('.arrows-index-num');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let partnersH3 = document.getElementById('partners-h3');
// let partnersH4 = document.querySelector('.partners-h4');
let partnerLogo = document.querySelector('.partners-left img');
let partnersLis;
let Clientsindex;

document.addEventListener('DOMContentLoaded', function () {
    partnersH3.innerHTML = contentArr[startNum].title;
    partnerLogo.setAttribute('src', contentArr[startNum].partnerImg);
});


nextBtn.addEventListener('click', function () {
    startNum = perPage;
    arrowsIndexNum.innerHTML = startNum < 10 ? `(0${startNum + 1})` : `(${startNum + 1})`;
    perPage += 10;
    htmlArr = contentArr.slice(startNum, perPage);


    showThem();
    updatePartnersNum(startNum);
    partnersAnimation(partnersUl, partnersLeft);
    nextPrevValidation();
    hoverSimulation()

    partnersH3.innerHTML = contentArr[startNum].title;
    partnerLogo.setAttribute('src', contentArr[startNum].partnerImg);

});

prevBtn.addEventListener('click', function () {

    perPage = startNum; // Save the current startNum as the new perPage value
    startNum -= 10;
    arrowsIndexNum.innerHTML = startNum < 10 ? `(0${startNum + 1})` : `(${startNum + 1})`;
    htmlArr = contentArr.slice(startNum, perPage);
    showThem();
    partnersAnimation(partnersUl, partnersLeft);
    nextPrevValidation();
    hoverSimulation()

    partnersH3.innerHTML = contentArr[startNum].title;
    partnerLogo.setAttribute('src', contentArr[startNum].partnerImg);
});


function checkPartnersNum() {
    if (startNum < 10) {
        return `(0${startNum + 1})`
    } else if (startNum == 10) {
        return `(${startNum + 1})`
    } else {
        return `(${startNum + 1})`
    }
}

function updatePartnersNum(counter) {
    Array.from(partnersLis).map(function (li, index) {
        li.addEventListener('mouseover', function () {
            // arrowsIndexNum.innerHTML = 
            if (startNum < 10) {
                if (index < 9) {
                    arrowsIndexNum.innerHTML = `(0${index + startNum + 1})`
                } else {
                    arrowsIndexNum.innerHTML = `(${index + startNum + 1})`
                }
            } else {
                arrowsIndexNum.innerHTML = `(${index + startNum + 1})`
            }

            // index + 1 + counter // startNum < 10 ? `(0${startNum + 1})` : `(${startNum + 1})`;
            partnersH3.innerHTML = this.lastElementChild.innerHTML;
        });
    });
}


// 


function showThem() {



    htmlArr = contentArr.slice(startNum, perPage);

    let theContent = '';
    for (let i = 0; i < htmlArr.length; i++) {

        contentArrIndex = startNum + i;

        if (startNum < 10) {
            if (i < 9) {

                theContent += `
            <li>

            
                <span>(0${contentArrIndex + 1})</span>
                <p>${htmlArr[i].title}</p>
            </li>
            `
            } else {
                theContent += `
            <li>

            
                <span>(${contentArrIndex + 1})</span>
                <p>${htmlArr[i].title}</p>
            </li>
            `
            }
        } else {
            theContent += `
            <li>

            
                <span>(${contentArrIndex + 1})</span>
                <p>${htmlArr[i].title}</p>
            </li>
            `
        }


        // theContent += `
        //     <li>


        //         <span>(${contentArrIndex + 1})</span>
        //         <p>${htmlArr[i].title}</p>
        //     </li>
        //     `
    }


    partnersUl.innerHTML = theContent;
    partnersLis = document.querySelectorAll('.partners-ul li');
    // for (let j = 0; j < partnersLis.length; j++) {
    //     partnersLis[j].addEventListener('mouseover', function () {
    //         arrowsIndexNum.innerHTML = `(0${j + 1})`;
    //         partnersH3.innerHTML = this.lastElementChild.innerHTML;
    //     });
    // }
    for (let x = 0; x < htmlArr.length; x++) {
        partnersLis[x].addEventListener('mouseover', function () {
            const clickedScope = htmlArr[x].scope;
            const clickedImage = htmlArr[x].partnerImg // Get the scope property value // Update partnersH3 with the scope value
            partnerLogo.setAttribute('src', clickedImage);
        });
    }
    partnersLiStart = partnersLis;

    updatePartnersNum(0);
} showThem();


function nextPrevValidation() { // Check when should next and prev disabled
    // Next Validation
    if (perPage >= contentArr.length) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }

    // Prev Validation

    if (perPage <= 10) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
} nextPrevValidation();


function partnersAnimation(leftEle, rightEle) {
    leftEle.style.opacity = 0;
    rightEle.style.opacity = 0;

    setTimeout(function () {
        leftEle.style.cssText = `
                transition: all .4s linear;
                opacity: 1;
            `

        rightEle.style.cssText = `
                transition: all .4s linear;
                opacity: 1;
            `
    }, 400);

    setTimeout(function () {
        leftEle.style.transitionDuration = '0s';
        rightEle.style.transitionDuration = '0s';
    }, 500);

} partnersAnimation(partnersUl, partnersLeft);


function hoverSimulation() {
    partnersLiStart[0].classList.add('partners-active');
    for (let i = 0; i < partnersLiStart.length; i++) {
        partnersLiStart[i].addEventListener('mouseover', function () {
            partnersAnimation(partnersLeft, partnersLeft);
            for (let j = 0; j < partnersLiStart.length; j++) {
                partnersLiStart[j].classList.remove('partners-active');
            }
            partnersLiStart[i].classList.add('partners-active');
        });
    }
} hoverSimulation();


// Forget about all of that so right now we gonna start a new plan regarding to coding of html

/* Start NiceScroll */
window.addEventListener('scroll', function () {
    // Calculate the offset of the target element
    const about = document.querySelector('.about').offsetTop;
    const aboutContent = document.querySelector('.about-container');
    const navLine = document.querySelector('.nav-line');

    const portfolio = document.querySelector('.portfolio');

    // Compare scroll position with the offset
    if (window.scrollY >= about - 300) {
        // Perform your desired action here
        aboutContent.classList.add('about-scroll-effect');
    }

    // if (window.scrollY >= portfolio.offsetTop - 400) {
    //     portfolio.style.cssText = `
    // margin-top: 80px;
    // height: fit-content;
    // transition: all 1s ease-in-out;
    // -webkit-transition: all 1s ease-in-out;
    // -moz-transition: all 1s ease-in-out;
    // -ms-transition: all 1s ease-in-out;
    // -o-transition: all 1s ease-in-out;
    // opacity: 1;
    //     transform: translateX(0px);
    // -webkit-transform: translateX(0px);
    // -moz-transform: translateX(0px);
    // -ms-transform: translateX(0px);
    // -o-transform: translateX(0px);
    //             `
    // }


    // else {
    //     navLine.style.opacity = 1;
    // }

});




// window.addEventListener('scroll', function () {
//     // Calculate the offset of the target element
//     const about = document.querySelector('.about').offsetTop;
//     const aboutContent = document.querySelector('.about .fake-container')
//     // Compare scroll position with the offset
//     if (window.scrollY >= about - 200) {
//         // Perform your desired action here
//         aboutContent.classList.add('about-scroll-effect');
//     }


//     const navTitle = document.querySelector('.nav-title');
//     let screenSlider = document.querySelector('.slogan').offsetTop;
//     if (window.scrollY >= screenSlider + 500) {
//         navTitle.classList.add('nav-title-active');
//     } else {
//         navTitle.classList.remove('nav-title-active');
//     }

// });



// let recordsH3s = document.querySelectorAll(".records h3");
// let records = document.querySelector(".records");
// let started = false; // Function Started ? No

// window.onscroll = function () {
//     if (window.scrollY >= records.offsetTop - 300) {
//         if (!started) {
//             recordsH3s.forEach(function (recordH3) {
//                 startCount(recordH3);
//                 recordH3.style.display = "block";
//             });
//         }
//         started = true;
//     }
// };

// function startCount(el) {
//     let goal = el.dataset.goal;
//     let count = setInterval(() => {
//         el.textContent++;
//         if (el.textContent == goal) {
//             clearInterval(count);
//         }
//     }, 2000 / goal);
// }




// /* End NiceScroll */



// $('.load').fadeOut();
