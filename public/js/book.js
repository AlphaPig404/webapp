// 主页内容渲染
// $.get('/ajax/book',function(d){
//    var windowWidth = $(window).width();
//    if(windowWidth<320){
//         windowWidth = 320;
//    }
//    new Vue({
//       el:'#app',
//       data:{
//          screen_width:windowWidth,
//          item:d.item
//       },
//       created: function(){
//          $.get('/ajax/book',function(d){
//             this.d = d;
//             console.log(d);
//          },'json')
//       },
//       methods:{
//          readBook:function(){
//            window.location.href='/reader';
//          }
//       }
//    })
// },'json');


   
   new Vue({
      el:'#app',
      data:{
         screen_width:Number,
         item:{}
      },
      created(){
        var self = this; // 注意this的指向
        $.get('/ajax/book',function(d){
            self.item = d.item;
         },'json');
        var windowWidth = $(window).width();
        if(windowWidth<320){
            windowWidth = 320;
        }
        self.screen_width=windowWidth;
      },
      methods:{
         readBook:function(){
           window.location.href='/reader';
         }
      }
   })
