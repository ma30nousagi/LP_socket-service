//ハンバーガーメニュー
$('.btn-menu').on('click', function(){
    $(this).toggleClass('active');
    $('.global-nav').toggleClass('show');
})

// .hero100Vh表示
$(document).ready(function () {
    hsize = $(window).height();
    $(".hero").css("height", hsize + "px");
  });
  $(window).resize(function () {
    hsize = $(window).height();
    $(".hero").css("height", hsize + "px");
});