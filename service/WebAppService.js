
var fs = require('fs');

// 测试用接口
exports.get_test_data = function() {
	var content = fs.readFileSync('./mock/test.json', 'utf-8');
	return content;
}

exports.get_chapter_data = function() {
	var content = fs.readFileSync('./mock/reader/chapter.json', 'utf-8');
	return content;
}

exports.get_chapter_content_data = function(id) {
	if (!id) {
		id = "1";
	}
	var content = fs.readFileSync('./mock/reader/data/data' + id + '.json', 'utf-8');
	return content;
}

exports.get_index_data = function() {
	var content = fs.readFileSync('./mock/home.json', 'utf-8');
	return content;
}

exports.get_book_data = function(id) {
	if (!id) {
		id = "18218";
	}
	if(fs.existsSync('./mock/book/' + id + '.json')){
	 	return fs.readFileSync('./mock/book/' + id + '.json', 'utf-8');
	}else{
		return fs.readFileSync('./mock/book/18218.json', 'utf-8');
	}
}

exports.get_rank_data = function(channelId) {
	var content = fs.readFileSync('./mock/rank.json', 'utf-8');
	return content;
}

exports.get_category_data = function(channelId) {
	var content = fs.readFileSync('./mock/category.json', 'utf-8');
	return content;
}

exports.get_male_data = function(channelId) {
	var content = fs.readFileSync('./mock/channel/male.json', 'utf-8');
	return content;
}

exports.get_female_data = function(channelId) {
	var content = fs.readFileSync('./mock/channel/male.json', 'utf-8');
	return content;
}


exports.get_search_data = function(start, end, keyword,callback) {
		var http = require('http');
		var qs = require('querystring');
		var data = {
			s: keyword,
			start: start,
			end: end
		}
		var content = qs.stringify(data);
		var http_request = {
			hostname: 'dushu.xiaomi.com',
			port: 80,
			path: '/store/v0/lib/query/onebox?' + content,
			method: 'GET'
		};

		// 开启一个请求对象
		req_obj = http.request(http_request, function(_res) {
			var content='';
			_res.setEncoding('utf8'); // 设定返回的数据

			_res.on('data', function(chunk) {
				content += chunk;   // 分段返回
			});

			_res.on('end', function(e) {
				callback(content);
			});

		});
		req_obj.on('error', function(e) {

		});

		req_obj.end();//发送请求
	
}