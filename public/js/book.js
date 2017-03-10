// 主页内容渲染
$.get('/ajax/book',function(d){
   var windowWidth = $(window).width();
   if(windowWidth<320){
        windowWidth = 320;
   }
   new Vue({
      el:'#app',
      data:{
         screen_width:windowWidth,
         item:d.item
      },
      methods:{
         readBook:function(){
           window.location.href='/reader';
         }
      }
   })
},'json');