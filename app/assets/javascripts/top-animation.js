$(function () {
  $('.greeting').textillate({
    loop: false,                 //ループ
    minDisplayTime: 1000,       //テキストが置き換えられるまでの時間
    // initialDelay: 1000,         //遅延時間
    autoStart: true,            //アニメーション自動スタート
    // フェードイン
    in: {
      effect: 'flip',        //アニメーション効果、エフェクトの種類
      delayScale: 1.5,          //遅延時間の指定
      delay: 50,                //文字ごとの遅延時間
      sync: false,              //『true』全ての文字に同時に適応される
      shuffle: false,            //ランダム
    },  
    
    // フェードアウト
    //out: {
      //effect: 'fadeOut',  
      //delayScale: 1.5,  
      //delay: 50,  
      //sync: false,  
      //shuffle: false
    //}
  });
  

  $('.details').textillate({
    loop: false,
    minDisplayTime: 100,
    autoStart: true,
    
    in: {
      effect: 'bounceInDown',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false
    },
  });
 })


$(function() {
  var offset = $('.header').offset();

  $(window).scroll(function() {
    if ($(window).scrollTop() > offset.top) {
      $('.header').addClass('h_fixed');
    }
    else {
      $('.header').removeClass('h_fixed');
    }
  });
});
