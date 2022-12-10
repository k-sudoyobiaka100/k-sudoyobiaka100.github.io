// グローバルメニューのハンバーガーメニュー開閉
$(function(){
  $(".hamburgerMenu").click(function() {
      $(this).toggleClass("close");
  });

});

// 研究発表のリンク先設定
$(function(){
  $(".pub_link a").attr("href", "./publications.html")
});

// News欄におけるMoreボタンの開閉
$(function(){
  $(".news_more").on("click", function() {
    $(this).toggleClass("on-click");
    $(".news_txt-hide").slideToggle(500);
  });
});

// 研究概要欄におけるMoreボタンの開閉
$(function(){
  $(".abst_more").on("click", function() {
    $(this).toggleClass("on-click");
    $(".abst_txt-hide").slideToggle(500);
  });
});

// ページ内リンクのずれ調整
$(function() {
  var headerHeight = 100;//固定ヘッダーの高さを入れる
  $('[href^="#"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHeight;
    $("html, body").animate({scrollTop:position}, 200, "swing");//200はスクロールの移動スピードです
    return false;
  });
});