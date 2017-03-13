
var express = require('express');//引入express框架
var app = express();//实例一个express对象
var qs = require('querystring');// 解析URL


//================== 使用模板引擎ejs=======================
// var views = require('co-views');
// var render = views('./view',{
// 	map:{html:'ejs'}
// });
app.set('views','./views');
app.set('view engine','ejs');

//======================页面请求处理============================
app.get('/',function(req,res) {
	res.render('index');
});

app.get('/bookshop',function(req,res){
	res.render('index');
});

app.get('/backet',function(req,res) {
	res.render('backet');
});

app.get('/book',function(req,res) {
	var params = qs.parse(req._parsedUrl.query);
	var bookId = params.id;
	res.render('book',{nav:'书籍详情',bookId:bookId});
});

app.get('/reader',function(req,res) {
	res.render('reader');
});

app.get('/search',function(req,res) {
	res.render('search',{nav:'搜索'});
});

app.get('/male',function(req,res) {
	res.render('male',{nav:'男生频道'});
});

app.get('/female',function(req,res) {
	res.render('female',{nav:'女生频道'});
});

app.get('/usercenter',function(req,res) {
	res.render('usercenter',{nav:'用户中心'});
});

app.get('/rank',function(req,res) {
	res.render('rank',{nav:'排行'});
});

app.get('/category',function(req,res) {
	res.render('category',{nav:'分类'});
});

// =========================静态资源管理======================
app.use('/public',express.static('./public'));


//=====================mock数据和后台数据获取==================

 
var service = require('./service/WebAppService.js');
app.get('/api_test',function(req,res){
	var data=service.get_test_data();
	res.send(data);
});

app.get('/ajax/index',function(req,res){
	var data = service.get_index_data();
	res.send(data);
});

app.get('/ajax/rank',function(req,res){
	var data = service.get_rank_data();
	res.send(data);
});

app.get('/ajax/male',function(req,res){
	var data = service.get_male_data();
	res.send(data);
});

app.get('/ajax/female',function(req,res){
	var data = service.get_female_data();
	res.send(data);
});

app.get('/ajax/category',function(req,res){
	var data = service.get_category_data();
	res.send(data);
});

app.get('/ajax/chapter',function(req,res){
	var data = service.get_chapter_data();
	res.send(data);
});

app.get('/ajax/book',function(req,res){
	var params = qs.parse(req._parsedUrl.query);
	var id = params.id;
	if (!id) {
		id = "";
	}
	var data = service.get_book_data(id);
	res.send(data);
});

app.get('/ajax/chapter_data',function(req,res){
	var params = qs.parse(req._parsedUrl.query);
	var id = params.id;
	if (!id) {
		id = "";
	}
	var data = service.get_chapter_content_data(id);
	res.send(data);
});

app.get('/ajax/search',function(req,res){
	var params = qs.parse(req._parsedUrl.query);
	var start = params.start;
	var end = params.end;
	var keyword = params.keyword;

	// 从服务器端拿到的数据，需要利用回调读取
	service.get_search_data(start,end,keyword,function(data){
		res.send(data);
	});
});

//=============启动服务器，监听localhost的3000端口=================
var server = app.listen(3000, function(){
  console.log('Example server is started,Listen on port %d',server.address().port);
});
