var fs = require('fs')

var path = './db.json'

exports.find = function (callback) {
	fs.readFile(path, 'utf8', function (err, data){
		if(err){
			return callback(err)
		}
		callback(null, JSON.parse(data).students)
	})
}


exports.findId = function (id, callback) {
	fs.readFile(path, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		//从数据文件中获取学生信息数组
		var students = JSON.parse(data).students
		//找到匹配项
		var findData = students.find(function (item) {
	      return item.id === parseInt(id)
	    })
	    callback(null, findData) 
	})
}


exports.save = function (student, callback){
	fs.readFile(path, 'utf8', function (err, data){
		if(err){
			return callback(err)
		}
		//将读出的字符串转为对象并获取其中的学生数组
		var students = JSON.parse(data).students
		//解析成数字
		student.age = parseInt(student.age)
		//手动添加ID
		student.id = Math.ceil(Math.random()*100)
		students.push(student)
		//将数据转为字符串，为下一步写入做准备
		var fileData = JSON.stringify({
			students: students
		})
		// 把字符串保存到文件中
	    fs.writeFile(path, fileData, function (err) {
	      if (err) {
	        // 错误就是把错误对象传递给它
	        return callback(err)
	      }
	      // 成功就没错，所以错误对象是 null
	      callback(null)
	    })
	})
}



exports.deleteById = function (id, callback){
	fs.readFile(path, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		// findIndex 方法专门用来根据条件查找元素的下标
	    var deleteId = students.findIndex(function (item) {
	      return item.id === parseInt(id)
	    }) 
	    // 根据下标从数组中删除对应的学生对象
	    students.splice(deleteId, 1)
	    //转为字符串
	    var filedata = JSON.stringify({
	    	students: students
	    })
	    fs.writeFile(path, filedata, function (err) {
	    	if (err) {
	    		return callback(err)
	    	}
	    	callback(null)
	    })
	})
}

exports.updateById = function (student, callback) {
	fs.readFile(path, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		// findIndex 方法专门用来根据条件查找元素的下标
	    var stu = students.find(function (item) {
	      return item.id === parseInt(student.id)
	    }) 

	    for (var key in student) {
      		stu[key] = student[key]
    	}
    	stu.age = parseInt(stu.age)
    	stu.id = parseInt(stu.id)
	    
	    
	    var filedata = JSON.stringify({
	    	students: students
	    })
	    fs.writeFile(path, filedata, function (err) {
	    	if (err) {
	    		return callback(err)
	    	}
	    	callback(null)
	    })
	})
}
