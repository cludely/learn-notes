var express = require('express')

//创建路由容器
var router = express.Router()	
var student = require('./student.js')

router.get('/', function (req, res) {
	student.find(function (err, data) {
 		if(err){
 			return res.status(500).send('Server error.')
 		}
 		res.render('index.html', {
 		fruits:[
		 		'苹果',
		 		'香蕉',
		 		'香梨'],
 		students: data
 		})
 	})
})


router.get('/new', function (req, res) {
	res.render('new.html')
})


router.post('/new', function (req, res) {
	student.save(req.body, function (err) {
		if(err){
			return res.status(500).send('Server error.')
		}
		res.redirect('/')
	})
})



router.get('/delete', function (req, res) {
	// console.log(req.query)
	student.deleteById(req.query.id, function (err) {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.redirect('/')
		
	})

})


router.get('/edit', function (req, res) {
	student.findId(parseInt(req.query.id), function (err, data) {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.render('edit.html', {
			msg: data
		})
	})
})




router.post('/edit', function (req, res) {
	student.updateById(req.body, function (err) {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.redirect('/')
	})
})




module.exports = router
