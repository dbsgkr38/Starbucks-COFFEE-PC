// 돋보기 버튼 제어

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.fucus();
})

// 포커스가 들어가면 .focused 추가
searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
})

// 포커스가 나가면 .focused 삭제
searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});


// --------------뱃지 제어---------------

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// document => html 태그 안에 있는 각각의 요소를 선택 할 때
// window => browser 창에 기준으로 했을 때

// lodash설치 후
// -.throttle(함수, 시간)


// gsap - scroll 관련 함수

window.addEventListener('scroll', 
   _.throttle(function(){
       if(window.scrollY > 500){
        // badgeEl.style.display = 'none'
        // gsap 문법 => gsap.to(요소,지속시간(초단위),옵션)
        gsap.to(badgeEl,0.6,{
            opacity : 0,
            display : 'none'
        });
        // 상단으로 스크롤 버튼 보이기
        gsap.to(toTopEl, 0.2, {
            x: 0,
        });
       }else{
        gsap.to(badgeEl,0.6,{
            opacity : 1,
            display : 'block'
        });
        // badgeEl.style.display = 'block'
        // 상단으로 스크롤 버튼 숨기기
        gsap.to(toTopEl, 0.2, {
            x: 100,
        });
       }
   },300)
); //-----------------


//상단으로 스크롤 버튼 클릭하면

toTopEl.addEventListener('click' , function(){
    // 페이지 위치를 최상단으로 부드럽게 (0.7초동안) 이동,
    gsap.to(window, .7, {
        scrollTo: 0
    });
});



// -------------------main visual 순차적 등장----------------------
const fadeEl = document.querySelectorAll('.visual .fade-in');

fadeEl.forEach(function(fadeEl, index){
    // gsap 문법 => gsap.to(요소,지속시간(초단위),옵션)
    gsap.to(fadeEl, 1, {
        delay : (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.8
        opacity : 1,
    })
})


// -------------------공지사항 swiper slider----------------------
const swiper = new Swiper('.notice-line .swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay : true,
  });


// -------------------promotion swiper slider----------------------
new Swiper('.promotion .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : {
        delay : 5000
    },
    pagination :{
        el : ".promotion .swiper-pagination",
        clickable : true
    },
    navigation : {
        prevEl : ".promotion .swiper-prev",
        nextEl : ".promotion .swiper-next"
    },
    breakpoints: { //반응형 조건 속성
        320: { //320 이상일 경우
          slidesPerView: 1, //레이아웃 1열
        },
        768: {
          slidesPerView: 1, //레이아웃 3열
        },
        960: {
          slidesPerView: 3, //레이아웃 4열
        },
      },
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true //1번 슬라이드가 가운데 보이기
});




// promotion toggle-btn
const promotionEl = document.querySelector('.promotion'); //슬라이드 영역 요소
const promotionToggleBtn = document.querySelector('.toggle-promotion') // 슬라이드 영역을 토글할 버튼 검색

// 슬라이드 영역 숨김 여부에 관한 기본값 설정
let isHidePromotion = false //처음엔 숨겨지지 않게

// 토글버튼을 클릭하면
promotionToggleBtn.addEventListener('click', function(){
    // 슬라이드 영역 숨기 여부를 반대값
    isHidePromotion = !isHidePromotion;

    if(isHidePromotion){
        promotionEl.classList.add('hide');
    }else {
        promotionEl.classList.remove('hide');
    }
});


// -------AWARDS-------
const swiper1 = new Swiper('.awards .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay : true,
    slidesPerView: 6,
    spaceBetween: 30,
    // navigation : {
    //     prevEl : ".awards .swiper-prev",
    //     nextEl : ".awards .swiper-next"
    // }
  });

  // -------올해 연도 구하기-------
  const thisYear = document.querySelector('.this-year');
  thisYear.textContent = new Date().getFullYear();


//  ----------- Magic Scroll ----------

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })    
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});





