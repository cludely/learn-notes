# Node.js 笔记

## 知识点

### 跨域访问

可以为node服务器添加配置```res.setHeader("Access-Control-Allow-Origin", "*")```实现跨域访问

### 服务器重定向

+ 状态码设置为 302 临时重定向
          *  res.statusCode = 302

+ 在响应头中通过 Location 告诉客户端往哪儿重定向
     * res.setHeader('Location', '/')
     
     * 客户端发现收到服务器的响应的状态码是 302 就会自动去响应头中找 Location ，然后对该地址发起新的请求
     
     * 所以就能看到客户端自动跳转了
     
     * 在express中用`res.redirect('/')`
     
       提示: 服务器重定向只对同步请求有效，对异步请求无效
     
       

### debugger调试

    + 使用inspect或debug进入调试模式
        * node inspect app.js  或  node debug app.js
        + 在调试模式下，n命令表示next，即执行下一条语句，c表示continue,即直接将程序执行到底。
        + 也可以在程序中加入debugger语句，按c直接运行到debugger语句，然后在调试模式下键入repl进入交互模式。
        * repl表示Read Evaluate Print Loop,即进入交互模式，可以查看程序的运行状态



### 表单数据处理问题

```javascript
  <div class="comments container">
    <!-- 
      以前表单是如何提交的？
      表单中需要提交的表单控件元素必须具有 name 属性
      表单提交分为：
        1. 默认的提交行为(同步提交)
            action 就是表单提交的地址，说白了就是请求的 url 地址
            method 请求方法
                get  默认  提交的表单数据全部存在请求的url路径中,可以用核心模块url中的url.parse('res.url')解析出所需的代码
				post express中用中间件配置，req.body
        2. 表单异步提交
        异步提交页面不会刷新，交互方式更灵活，用来提示错误信息，提升用户体验
     -->
            
    <form action="/pinglun" method="get">
      <div class="form-group">
        <label for="input_name">你的大名</label>
        <input type="text" class="form-control" required minlength="2" maxlength="10" id="input_name" name="name" placeholder="请写入你的姓名">
      </div>
      <div class="form-group">
        <label for="textarea_message">留言内容</label>
        <textarea class="form-control" name="message" id="textarea_message" cols="30" rows="10" required minlength="5" maxlength="20"></textarea>
      </div>
      <button type="submit" class="btn btn-default">发表</button>
    </form>
  </div>
```




### exports与module.exports的区别

  - 在node的模块中，底层有一段代码如下
    ```javascript
      module.exports = {
        exports: {

        }
      }
      var exports = module.exports 
      return module.exports   
    ```

  - 如果一个模块需要直接导出某个成员，而非挂载的方式,那这个时候必须使用下面这种方式`导出单个成员`
      ```javascript
      module.exports = 'hello'
      module.exports = function (x, y) {    //导出的函数覆盖了hello字符串
        return x + y
      }
      ```
  - 如果需要导出对象成为挂载的方式`导出多个成员`
      ```javascript
      exports.add = function (x, y){
        return x + y
      }
      exports.a = 'hello'
      exports.c = 'world'
      ```
  - 也可以这样来导出对象，多个成员
      ```javascript
        module.exports = {
          add : function (x, y){
            return x + y
          },
          a : 'hello',
          c : 'world'
        }
      ```


### 淘宝镜像 - npm被墙
  - npm存储包文件的服务器在国外，有时候会被墙，速度很慢

  - http://npm.taobao.org/ 淘宝的开发团队把npm在国内做了全量备份

  - 安装淘宝的 cnpm:
    ```javascprt
       npm install --global cnpm
    ```
    接下来安装包的时候把之前的npm 替换成 cnpm
    
    ```javascript
       npm install express --save
       cnpm install express --save
    ```
    
  - 如果不想安装cnpm，又想使用淘宝镜像源
      ```javascript
         npm install express --registry=https://registry.npm.taobao.org
      ```
      * 但是每次安装手动添加参数很麻烦，可以把这个选项加入到配置文件中
        ```javascript
          npm config set registry https://registry.npm.taobao.org
          # 查看 npm 配置信息
          npm config list
        ```
      * 只要经过上面的配置，则以后所有的npm install 都会默认通过淘宝的服务器来下载



### nodemon服务器自动重启
   - 安装`nodemon`: 是一个基于Node.js开发的第三方命令行工具
      ```javascript
        npm install --global nodemon
      ```
      
   - 安装完毕后，使用:
      ```javascript
        nodemon app.js
      ```
      
   - 通过`nodemon`启动的服务器，则它会自动检测文件变化，当文件发生变化时，自动重启。

### 服务器崩溃自动重启

Node Supervisor原本是用于服务器上Node.js应用崩溃的时候，自动重新启动。当然它也可以监控你的项目的js文件变化，自动重启来方便调试。

* 安装 

```shell
sudo npm install supervisor -g
```

* 使用方法

```shell
# 1、关掉之前开启的node服务.
# 2、然后在项目路径下使用命令：supervisor yourApp.js 来开启 Supervisor.它会开启node服务，并不停的检测文件变化，当JS文件内容修改后，自动重启服务，很方便。
```



## 异步编程

### 回调函数

```javascript
function add (x, y) {
    console.log(1)
    setTimeOut(function () {
        console.log(2)
        var ret = x + y
        return ret
    }, 1000)
    console.log(3)	//到这里就结束了，不会等到前面的定时器，所以直接返回undefined	
}

console.log(add(10, 20)) 	//undefined
```

```javascript
function add (x, y, callback) {
    setTimeOut(function () {
        var ret = x + y
        callback(ret)
    }, 1000)	
}

add(10, 20, function (ret) {
    console.log(ret) 	//30
})
```



### Promise - API

参考 - https://es6.ruanyifeng.com/#docs/promise

```javascript
var fs = require('fs')
//异步容器一旦创建就开始执行里面的代码
var p1 = new Promise(function (resolve, reject) {
  fs.readFile('./data/a.txt', 'utf8', function (err, data) {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

var p2 = new Promise(function (resolve, reject) {
  fs.readFile('./data/b.txt', 'utf8', function (err, data) {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

var p3 = new Promise(function (resolve, reject) {
  fs.readFile('./data/c.txt', 'utf8', function (err, data) {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

p1
  .then(function (data) {
    console.log(data)
    // 当 p1 读取成功的时候
    // 当前函数中 return 的结果就可以在后面的 then 中 function 接收到
    // 当你 return 123 后面就接收到 123
    // 上面那些 return 的数据没什么卵用
    // 真正有用的是：我们可以 return 一个 Promise 对象
    // 当 return 一个 Promise 对象的时候，后续的 then 中的 方法的第一个参数会作为 p2 的 resolve
    // 
    return p2
  }, function (err) {
    console.log('读取文件失败了', err)
  })
  .then(function (data) {
    console.log(data)
    return p3
  })
  .then(function (data) {
    console.log(data)
    console.log('end')
  })
```

### 封装Promise

```javascript
var fs = require('fs')

function pReadFile(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

pReadFile('./data/a.txt')
  .then(function (data) {
    console.log(data)
    return pReadFile('./data/b.txt')
  })
  .then(function (data) {
    console.log(data)
    return pReadFile('./data/c.txt')
  })
  .then(function (data) {
    console.log(data)
  })
```

##  node核心模块

参考 - http://nodejs.cn/api/







# express 笔记



## 使用`art-template`模板引擎

- [art-template - GitHub仓库](https://github.com/aui/art-template)
- [art-template 官方文档](https://aui.github.io/art-template/)
- 安装`art-template`:
  
  + `npm install --save art-template express-art-template`
- 配置:
  ```javascript
    //配置使用 art-template 模板引擎
    // 第一个参数，表示，当渲染以 .html 结尾的文件的时候，使用 art-template 模板引擎
    // express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
    // 虽然这里不需要加载 art-template 但是也必须安装
    // 原因就在于 express-art-template 依赖了 art-template
    app.engine('html', require('express-art-template'))
  ```
  
- 使用:
  ```javascript
      // Express 为 Response 相应对象提供了一个方法：render
      // render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
      // 第一个参数不能写路径，默认会去项目中的 views 目录查找该模板文件
      // 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到 views 目录中
      // 如果想要修改默认的 views 目录，则可以
      // app.set('views', render函数的默认路径)
    app.get('/', function (req, res) {
      //express默认回去项目中的views目录找index.html
      //end、render、send方法只接受字符串
      res.render('index.html', {
        comments: comments
      })
    })
  ```





## express中间件

```javascript
var express = require('express')

var app = express()

// 当请求进来，会从第一个中间件开始进行匹配
//    如果匹配，则进来
//       如果请求进入中间件之后，没有调用 next 则代码会停在当前中间件
//       如果调用了 next 则继续向后找到第一个匹配的中间件
//    如果不匹配，则继续判断匹配下一个中间件
//    

// 在 Express 中，对中间件有几种分类

// 不关心请求路径和请求方法的中间件
// 也就是说任何请求都会进入这个中间件
// 中间件本身是一个方法，该方法接收三个参数：
//    Request 请求对象
//    Response 响应对象
//    next     下一个中间件
// 当一个请求进入一个中间件之后，如果不调用 next 则会停留在当前中间件
// 所以 next 是一个方法，用来继续匹配下一个中间件的

 app.use(function (req, res, next) {
   console.log('1')
   next()
 })

 app.use(function (req, res, next) {
   console.log('2')
   next()
 })

 app.use(function (req, res, next) {
   console.log('3')
   res.send('333 end.')
 })

 app.use(function (req, res, next) {
   console.log(1)
   next()
 })



// // 以 /xxx 开头的路径中间件
 app.use('/a', function (req, res, next) {
   console.log('a')
   next()
 })

 app.use('/a', function (req, res, next) {
   console.log('a 2')
 })

// 严格匹配请求方法和请求路径的中间件
// app.get
// app.post

app.get('/abc', function (req, res, next) {
  console.log('abc')
})

// 配置一个处理 404 的中间件
app.use(function (req, res) {
  res.render('404.html')
})


// 当调用 next 的时候，如果传递了参数，则直接往后找到带有 四个参数的应用程序级别中间件
// 当发生错误的时候，我们可以调用 next 传递错误对象
// 然后就会被全局错误处理中间件匹配到并处理之
// 配置一个全局错误处理中间件
app.use(function (err, req, res, next) {
  res.status(500).json({
    err_code: 500,
    message: err.message
  })
})

// 如果没有能匹配的中间件，则 Express 会默认输出：Cannot GET 路径

app.listen(3000, function () {
  console.log('app is running at port 3000.')
})

```







## body-parser：获取表单请求体数据

### 获取Get请求体数据

   在Express中内置了一个API，用于获取Get请求体数据

`req.query`

### 获取Post请求体数据

  在Express中没有内置获取表单POST请求体数据的API，需要使用第三方包: `body-parser`

`req.body`

   - 安装:
        `npm install --save body-parser`

   - 配置:

        ```javascript
          var express = require('express')
          // 1. 引包
          var bodyParser = require('body-parser')
        ```

```javascript
      var app = express()

    // 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
      // parse application/x-www-form-urlencoded
      app.use(bodyParser.urlencoded({ extended: false }))
      // parse application/json
      app.use(bodyParser.json())

      // POST /login 获取 URL编码的请求体
      app.post('/login', urlencodedParser, function (req, res) {
        if (!req.body) return res.sendStatus(400)
        res.send('welcome, ' + req.body.username)
      })
      app.listen(3000);
```





## Cookie管理 与 express-session

 在 Express 这个框架中，默认不支持 Session 和 Cookie
 但是我们可以使用第三方中间件：express-session 来解决

安装: 

```shell
 npm install express-session
```

 配置 (一定要在 app.use(router) 之前): 

```javascript
app.use(session({
  // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
  // 目的是为了增加安全性，防止客户端恶意伪造
  secret: 'itcast',
  resave: false,
  saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
}))
```

 使用: 

```shell
# 当把这个插件配置好之后，我们就可以通过 req.session 来发访问和设置 Session 成员了
# 添加 Session 数据：req.session.foo = 'bar'
# 访问 Session 数据：req.session.foo
```







## 案例1 - feedback

  ```javascript
          var express = require('express')
      var bodyParser = require('body-parser')

      var app = express()

      app.use('/public/', express.static('./public/'))

      // 配置使用 art-template 模板引擎
      // 第一个参数，表示，当渲染以 .html 结尾的文件的时候，使用 art-template 模板引擎
      // express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
      // 虽然外面这里不需要记载 art-template 但是也必须安装
      // 原因就在于 express-art-template 依赖了 art-template
      app.engine('html', require('express-art-template'))

      // Express 为 Response 相应对象提供了一个方法：render
      // render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
      // res.render('html模板名', {模板数据})
      // 第一个参数不能写路径，默认会去项目中的 views 目录查找该模板文件
      // 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到 views 目录中

      // 如果想要修改默认的 views 目录，则可以
      // app.set('views', render函数的默认路径)

      // 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
      app.use(bodyParser.urlencoded({ extended: false }))
      app.use(bodyParser.json())

      var comments = [{
          name: '张三',
          message: '今天天气不错！',
          dateTime: '2015-10-16'
        },
        {
          name: '张三2',
          message: '今天天气不错！',
          dateTime: '2015-10-16'
        },
        {
          name: '张三3',
          message: '今天天气不错！',
          dateTime: '2015-10-16'
        },
        {
          name: '张三4',
          message: '今天天气不错！',
          dateTime: '2015-10-16'
        },
        {
          name: '张三5',
          message: '今天天气不错！',
          dateTime: '2015-10-16'
        }
      ]

      app.get('/', function (req, res) {
        res.render('index.html', {
          comments: comments
        })
      })

      app.get('/post', function (req, res) {
        res.render('post.html')
      })

      // 当以 POST 请求 /post 的时候，执行指定的处理函数
      // 这样的话我们就可以利用不同的请求方法让一个请求路径使用多次
      app.post('/post', function (req, res) {
        // 1. 获取表单 POST 请求体数据
        // 2. 处理
        // 3. 发送响应

        // req.query 只能拿 get 请求参数
        // console.log(req.query)

        var comment = req.body
        comment.dateTime = '2017-11-5 10:58:51'
        comments.unshift(comment)

        // res.send
        // res.redirect
        // 这些方法 Express 会自动结束响应
          //重定向
        res.redirect('/')
        // res.statusCode = 302
        // res.setHeader('Location', '/') 
      })

      app.listen(3000, function () {
        console.log('running...')
      })
  ```



## 案例2 - crud-express

1. bootstrap前端模板 - index.html、new.html、edit.html
2. 配置开放静态资源
3. 配置art-template模板引擎
4. 简单路由  -  /  渲染学生静态页面
5. 路由设计
6. 提取路由模块
7. 封装文件操作模块student.js
8. 实现具体功能







# MongoDB 笔记

参考   [MongoDb 教程](https://www.runoob.com/mongodb/mongodb-tutorial.html)

## 1. 安装和配置

- 安装 [https://www.mongodb.com](https://www.mongodb.com/)
- 配置环境变量

```shell
# 此电脑属性 -> 高级系统设置 -> 环境变量 -> Path 添加MongoD.exe所在路径
# mongod --version 查看mongodb版本
```

## 2. 启动和关闭MongoDB数据库

启动：

```shell
# mongodb 默认使用执行 mongod 命令所处盘符根目录下的 /data/db 作为数据存储目录
# 所以在第一次执行该命令前需要先手动创建 /data/db 目录
mongod
```

如果想要修改默认的数据存储目录，可以：

```shell
mongod --dbPath=数据存储目录路径
```

## 3. 连接和退出数据库

连接：

```shell
# 该命令默认连接本机的MongoDB服务
mongo
```

退出：

```shell
# 在连接状态输入 exit 退出连接
exit
```

## 4. 基本命令

```shell
# 查看显示所有数据库
show dbs
# 查看当前操作的数据库
db
# 切换到指定的数据库（如果没有会新建）
use 数据库名称
# 往集合中插入数据
db.students.insertOne({"name": "Jack"})
# 查看显示数据库中的所有集合
show collections
# 查看显示数据库中指定集合的值
db.students.find( )
```

## 5.  在node中操作MongoDB

### 使用官方的mongdb包来操作

参考 https://github.com/mongodb/node-mongodb-native

### 使用第三方包 mongoose 来操作

第三方包`mongoose`基于 MongoDB 官方的 mongodb 包再一次做了封装

官方文档: https://mongoosejs.com/

官方指南: https://mongoosejs.com/docs/guide.html

官方API : https://mongoosejs.com/docs/api.html

```shell
npm install --save mongoose
```

### 操作实例

```javascript
var mongoose = require('mongoose')

var Schema = mongoose.Schema

// 1. 连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast')

// 2. 设计文档结构（表结构）
// 字段名称就是表结构中的属性名称
var userSchema = new Schema({
  username: {
    type: String,
    required: true // 必须有
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
})

// 3. 将文档结构发布为模型
//    第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//                 mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//                 例如这里的 User 最终会变为 users 集合名称
//    第二个参数：架构 Schema
//    返回值：模型构造函数
var User = mongoose.model('User', userSchema)

// 4. 当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据为所欲为了（增删改查）
// **********************
// #region /新增数据
// **********************
// var admin = new User({
//   username: 'zs',
//   password: '123456',
//   email: 'admin@admin.com'
// })

// admin.save(function (err, ret) {
//   if (err) {
//     console.log('保存失败')
//   } else {
//     console.log('保存成功')
//     console.log(ret)
//   }
// })
// **********************
// #endregion /新增数据
// **********************




// **********************
// #region /查询数据
// **********************
// User.find(function (err, ret) {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log(ret)
//   }
// })

// User.find({
//   username: 'zs'
// }, function (err, ret) {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log(ret)
//   }
// })

// User.findOne({
//   username: 'zs'
// }, function (err, ret) {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log(ret)
//   }
// })
// **********************
// #endregion /查询数据
// **********************



// **********************
// #region /删除数据
// **********************
// User.remove({
//   username: 'zs'
// }, function (err, ret) {
//   if (err) {
//     console.log('删除失败')
//   } else {
//     console.log('删除成功')
//     console.log(ret)
//   }
// })
// **********************
// #endregion /删除数据
// **********************


// **********************
// #region /更新数据
// **********************
// User.findByIdAndUpdate('5a001b23d219eb00c8581184', {
//   password: '123'
// }, function (err, ret) {
//   if (err) {
//     console.log('更新失败')
//   } else {
//     console.log('更新成功')
//   }
// })
// **********************
// #endregion /更新数据
// **********************
```



## 使用node操作myspl

```javascript
var mysql = require('mysql');

// 1. 创建连接
var connection = mysql.createConnection({
  host: 'localhost',	//连接的主机名
  user: 'root',	//数据库用户名
  password: 'root',	//用户密码
  database: 'users' //要连接的数据库
});

// 2. 连接数据库 
connection.connect();

// 3. 执行数据操作
connection.query('SELECT * FROM `users`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// connection.query('INSERT INTO users VALUES(NULL, "admin", "123456")', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

// 4. 关闭连接 
connection.end();
```





































