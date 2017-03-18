   new Vue({
      el:'#app',
      data:{
         screen_width:Number,
         item:{},
         author_books:[],
         related:{}
      },
      created(){
        var self = this; // 注意this的指向
        $.get('/ajax/book',function(d){
            self.item = d.item;
            self.author_books = d.author_books;
            self.related = d.related;
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
