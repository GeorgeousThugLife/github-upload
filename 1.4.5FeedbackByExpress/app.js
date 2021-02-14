var express = require('express')
var bodyParser = require('body-parser')

var app = express()


app.use('/public/', express.static('./public/'))


// setup and using art-template engine
app.engine('html', require('express-art-template'))

// setup body-parser
	// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
	// parse application/json
app.use(bodyParser.json())

var comments = 
[
	{
		name: 'George',
		message: 'Guten tag!',
		date: '2021-1-30'
	},
	{
		name: 'Witt',
		message: 'Hej, Los Santos!',
		date: '2021-1-30'
	},
	{
		name: 'Steve',
		message: 'winner winner, chicken dinner!',
		date: '2021-1-30'
	},
	{
		name: 'Frederick',
		message: 'Strike',
		date: '2021-1-30'
	},
	{
		name: 'Jonathan',
		message: 'Game developer',
		date: '2021-1-30'
	}
]

app.get('/', function(request, response)
{
	response.render('index.html', 
	{
		comments: comments
	}) 
})

app.get('/admin', function(request, response)
{
	response.render('admin/index.html', 
	{
		title: 'Management system'
	}) 
})

app.get('/post', function(request, response)
{
	response.render('post.html')
})

/* 'get' way
app.get('/comment', function(request, response)
{
	//console.log(request.query)
	var comment = request.query
	comment.dateTime = '2021-2-10 00:00:00'
	comments.unshift(comment)
	//response.statusCode = 302
	//response.setHeader('Location', '/')
	response.redirect('/')
})
*/

// 'post' way
app.post('/post', function(request, response)
{
	//1.get form POST request
	//console.log('get form post request')
	
	//2.proceed
	var comment = request.body
	comment.dateTime = '2021-2-10 00:00:00'
	comments.unshift(comment)
	response.redirect('/')
})


app.listen(3000, function()
{
	console.log('server is running...')
})


