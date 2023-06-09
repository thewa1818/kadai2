
$(".closeBtn").on("click",function(){
   $(".header_list").slideToggle(1000);
   $(".closeBtn").fadeOut(1000);
   $(".closeBtn2").fadeIn(1000);
})

$(".closeBtn2").on("click",function(){
  $(".header_list").slideToggle(1000);
  $(".closeBtn2").fadeOut(1000);
  $(".closeBtn").fadeIn(1000);
})

$(".header_list-item").hover(function(){
  $(this).css("background-color","gray");
},
function(){
  $(this).css("background-color","#fff");
})

$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".main_item,.main_item2").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});
















// $(".omikuji_title").on("click", function () {
//   $(".omikuji_kekka").fadeIn();

//   const random = Math.floor(Math.random() * 5);

//   if (random === 0){
//     console.log("大吉です");
//   }else if (random === 1){
//     console.log("中吉です");
//   }else if (random === 2){
//     console.log("吉です");
//   }else if (random === 3){
//     console.log("小吉です");
//   }else if (random === 4){
//     console.log("末です");
//   }
// });
