var express = require('express')
var app = express()
var router = require('./router.js')
 var bodyParser = require('body-parser')

//使用模板引擎
app.engine('html', require('express-art-template'))
//开放静态目录
app.use('/public/', express.static('./public/'))
app.use('/node_modules/',express.static('./node_modules/'))


app.use(bodyParser.urlencoded({ extended: false }))
      // parse application/json
app.use(bodyParser.json())









//路由挂载
app.use(router)





app.listen(3000, function () {
	console.log('The server is running at port 3000...')
})