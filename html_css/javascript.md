#  JavaScript 笔记

[MDN-Web API](https://developer.mozilla.org/zh-CN/docs/Web/API) 

# 数据类型

### 数值范围

```shell
最小值：Number.MIN_VALUE，这个值为： 5e-324
最大值：Number.MAX_VALUE，这个值为： 1.7976931348623157e+308
无穷大：Infinity
无穷小：-Infinity
```

### 获取变量的类型

```javascript
var age = 18;
console.log(typeof age);  // 'number'
```

### 数据类型转换

#### toString()、String()

- toString() 与 String()

  ```javascript
  // toString 方法可把一个逻辑值转换为字符串，并返回结果
  var num = 5;
  console.log(num.toString());	//转换成字符串类型
  // String()函数存在的意义：有些值没有toString()，这个时候可以使用String()。
  // 比如：undefined和null
  ```

- 拼接字符串方式

  num  +  ""，当 + 两边一个操作符是字符串类型，一个操作符是其它类型的时候，会先把其它类型转换成字符串再进行字符串拼接，返回字符串

#### Number()、parseInt()、parseFloat()

- Number()

  ```
  Number()可以把任意值转换成数值，如果要转换的字符串中有一个不是数值的字符，返回NaN
  ```

- parseInt()

  ```javascript
  var num1 = parseInt("12.3abc");  // 返回12，如果第一个字符是数字会解析知道遇到非数字结束
  var num2 = parseInt("abc123");   // 返回NaN，如果第一个字符不是数字或者符号就返回NaN
  ```

- parseFloat()

  ```
  parseFloat()把字符串转换成浮点数
  parseFloat()和parseInt非常相似，不同之处在与
  	parseFloat会解析第一个. 遇到第二个.或者非数字结束
  	如果解析的内容里只有整数，解析成整数
  ```

- +，-0等运算

  ```javascript
  var str = '500';
  console.log(+str);		// 取正
  console.log(-str);		// 取负
  console.log(str - 0);
  ```

#### JSON.parse() 与 JSON.stringify()

json.stringfy()将对象、数组转换成字符串；json.parse()将字符串转成json对象。



#### Boolean()

0  ''(空字符串) null undefined NaN 会转换成false  其它都会转换成true

#### ==  与 ===

```javascript
// ==与===的区别：==只进行值得比较，===类型和值同时相等，则相等
var result = '55' == 55;  	// true
var result = '55' === 55; 	// false 值相等，类型不相等
var result = 55 === 55; 	// true
```

# 内置对象

### Math对象

[Math](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)

```javascript
Math.PI						// 圆周率
Math.random()				// 生成随机数
Math.floor()/Math.ceil()	 // 向下取整/向上取整
Math.round()				// 取整，四舍五入
Math.abs()					// 绝对值
Math.max()/Math.min()		 // 求最大和最小值
Math.sin()/Math.cos()		 // 正弦/余弦
Math.power()/Math.sqrt()	 // 求指数次幂/求平方根
```

### Date对象

创建 `Date` 实例用来处理日期和时间。Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。

~~~javascript
// 获取当前时间，UTC世界时间，距1970年1月1日（世界标准时间）起的毫秒数
var now = new Date();
console.log(now.valueOf());	// 获取距1970年1月1日（世界标准时间）起的毫秒数

// Date构造函数的参数
1. 毫秒数 1498099000356		new Date(1498099000356)
2. 日期格式字符串  '2015-5-1'	 new Date('2015-5-1')
3. 年、月、日……				  new Date(2015, 4, 1)   // 月份从0开始
~~~

- 获取日期的毫秒形式

```javascript
var now = new Date();
// valueOf用于获取对象的原始值
console.log(Date.valueOf())	

// HTML5中提供的方法，有兼容性问题
var now = Date.now();	

// 不支持HTML5的浏览器，可以用下面这种方式
var now = + new Date();			// 调用 Date对象的valueOf() 
```

- 日期格式化方法

```javascript
toString()		// 转换成字符串
valueOf()		// 获取毫秒值
// 下面格式化日期的方法，在不同浏览器可能表现不一致，一般不用
toDateString()
toTimeString()
toLocaleDateString()
toLocaleTimeString()
```

- 获取日期指定部分

```javascript
getTime()  	  // 返回毫秒数和valueOf()结果一样，valueOf()内部调用的getTime()
getMilliseconds() 
getSeconds()  // 返回0-59
getMinutes()  // 返回0-59
getHours()    // 返回0-23
getDay()      // 返回星期几 0周日   6周6
getDate()     // 返回当前月的第几天
getMonth()    // 返回月份，***从0开始***
getFullYear() //返回4位的年份  如 2016
```

#### 案例

- 写一个函数，格式化日期对象，返回yyyy-MM-dd HH:mm:ss的形式

```javascript
function formatDate(d) {
  //如果date不是日期对象，返回
  if (!date instanceof Date) {
    return;
  }
  var year = d.getFullYear(),
      month = d.getMonth() + 1, 
      date = d.getDate(), 
      hour = d.getHours(), 
      minute = d.getMinutes(), 
      second = d.getSeconds();
  month = month < 10 ? '0' + month : month;
  date = date < 10 ? '0' + date : date;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute:minute;
  second = second < 10 ? '0' + second:second;
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
}
```

- 计算时间差，返回相差的天/时/分/秒

```javascript
function getInterval(start, end) {
  var day, hour, minute, second, interval;
  interval = end - start;
  interval /= 1000;
  day = Math.round(interval / 60 /60 / 24);
  hour = Math.round(interval / 60 /60 % 24);
  minute = Math.round(interval / 60 % 60);
  second = Math.round(interval % 60);
  return {
    day: day,
    hour: hour,
    minute: minute,
    second: second
  }
}
```

### Array对象(面试)

```javascript
// 1. 使用构造函数创建数组对象
// 创建了一个空数组
var arr = new Array();
// 创建了一个数组，里面存放了3个字符串
var arr = new Array('zs', 'ls', 'ww');
// 创建了一个数组，里面存放了4个数字
var arr = new Array(1, 2, 3, 4);

// 2. 使用字面量创建数组对象
var arr = [1, 2, 3];

// 获取数组中元素的个数
console.log(arr.length);
```

- **检测一个对象是否是数组**

  - instanceof
  - Array.isArray()     HTML5中提供的方法，有兼容性问题

  函数的参数，如果要求是一个数组的话，可以用这种方式来进行判断

- **数组常用方法**

  push()、shift()、unshift()、reverse()、sort()、splice()、indexOf()

```javascript
// 1 栈操作(先进后出)
push()
pop() 		//取出数组中的最后一项，修改length属性
// 2 队列操作(先进先出)
shift()		//取出数组中的第一个元素，修改length属性
unshift() 	//在数组最前面插入项，返回数组的长度

// 3 排序方法
//reverse()	//翻转数组
var arr = [13, 24, 51, 3];
console.log(arr.reverse()); //[3, 51, 24, 13]
console.log(arr); //[3, 51, 24, 13](原数组改变)

//sort(); 	//即使是数组sort也是根据字符，从小到大排序
function compare(value1, value2) {
    if (value1 < value2) {
    	return -1;
    } else if (value1 > value2) {
    	return 1;
    } else {
    	return 0;
    }
}
arr2 = [13, 24, 51, 3];
console.log(arr2.sort(compare)); // [3, 13, 24, 51]

// 4 操作方法
//concat()  	//把参数拼接到当前数组
var arr = [1,3,5,7];
var arrCopy = arr.concat(9,[11,13]);
console.log(arrCopy); //[1, 3, 5, 7, 9, 11, 13]
console.log(arr); // [1, 3, 5, 7](原数组未被修改)

//slice() 	//从当前数组中截取一个新的数组，不影响原来的数组，参数start从0开始,end从1开始
//splice()	//删除或替换当前数组的某些项目，参数start, deleteCount, options(要替换的项目)

// 5 位置方法
indexOf()、lastIndexOf()   //如果没找到返回-1

// 6 迭代方法 不会修改原数组(可选)
//every()、filter()、forEach()、map()、some()
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(x, index, a){
console.log(x + '|' + index + '|' + (a === arr));
});
// 输出为：
// 1|0|true
// 2|1|true
// 3|2|true
// 4|3|true
// 5|4|true

// 7 join() 方法将数组的所有元素连接到一个字符串中。
var arr = [1,2,3];
console.log(arr.join()); // 1,2,3
console.log(arr.join("-")); // 1-2-3
console.log(arr); // [1, 2, 3]（原数组不变）
```

- 清空数组

```javascript
// 方式1 推荐 
arr = [];
// 方式2 
arr.length = 0;
// 方式3
arr.splice(0, arr.length);
```

### String对象（面试）

- 字符串的不可变

```javascript
var str = 'abc';
str = 'hello';
// 当重新给str赋值的时候，常量'abc'不会被修改，依然在内存中
// 重新给字符串赋值，会重新在内存中开辟空间，这个特点就是字符串的不可变
// 由于字符串的不可变，在大量拼接字符串的时候会有效率问题
```

- 创建字符串对象

```javascript
var str = new String('Hello World');

// 获取字符串中字符的个数
console.log(str.length);
```

- 字符串对象的常用方法

  字符串所有的方法，都不会修改字符串本身(字符串是不可变的)，操作完成会返回一个新的字符串

```javascript
// 1 字符方法
// charAt()    	//获取指定位置处字符
var str = "HELLO WORLD";
str.charAt(0);            // 返回 H
// charCodeAt()  	//获取指定位置处字符的ASCII码
var str = "HELLO WORLD";
str.charCodeAt(0);         // 返回 72
// str[0]   		//HTML5，IE8+支持 和charAt()等效

// 2 字符串操作方法
// slice()    		//从start位置开始，截取到end位置，end取不到
// substring(start, end) 		//从start位置开始，截取到end位置，end取不到
var str = "Apple, Banana, Mango";
var res = str.slice(7,13);		// Banana
var res = str.slice(7);		// Banana, Mango
// substr(start, length)   		//从start位置开始，截取length个字符
var str = "Apple, Banana, Mango";
var res = str.substr(7,6);	// Banana

// 3 位置方法
// indexOf()   	//返回指定内容在元字符串中的位置
// lastIndexOf() 	//从后往前找，只找第一个匹配的
// 两种方法都第二个参数,表示从哪个位置开始寻找，默认为0
// 如果未找到文本， indexOf() 和 lastIndexOf() 均返回 -1
var str = "The full name of China is the People's Republic of China.";
console.log(str.indexOf("China"));	// 17
console.log(str.lastIndexOf("China"))	// 51
console.log(str.lastIndexOf("USA"))		// -1
//match() 方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。
var str="Hello world!"
document.write(str.match("world") + "<br />")	// world
document.write(str.match("World") + "<br />")	// null
document.write(str.match("worlld") + "<br />")	// null
document.write(str.match("world!"))				// world!


// 4 去除空白   
// trim()  		//只能去除字符串前后的空白
var str = "       Hello World!        ";
alert(str.trim());	// Hello World!

// 5 大小写转换方法
// toUpperCase() 	//转换大写
// toLowerCase() 	//转换小写
var text1 = "Hello World!";       // 字符串
var text2 = text1.toLowerCase();  // text2 是被转换为小写的 text1

// 6 其它
// search()			indexOf() 与 search()是相等的，search不接受第二个参数
// replace()
// split()
var txt = "Hello";       // 字符串
txt.split("");           // 分隔为字符	["H", "e", "l", "l", "o"]
// fromCharCode()
// String.fromCharCode(101, 102, 103);	 //把ASCII码转换成字符串
```



































### 

# DOM

### 获取页面元素

```javascript
 // 根据id属性的值获取元素,返回来的是一个元素对象
  document.getElementById("id属性的值");
 // 根据标签名字获取元素,返回来的是一个伪数组,里面保存了多个的DOM对象
 document.getElementsByTagName("标签名字");
 
 // 下面的几个,有的浏览器不支持
 
 // 根据name属性的值获取元素,返回来的是一个伪数组,里面保存了多个的DOM对象
 document.getElementsByName("name属性的值")
 // 根据类样式的名字来获取元素,返回来的是一个伪数组,里面保存了多个的DOM对象
 document.getElementsByClassName("类样式的名字")
 // 根据选择器获取元素,返回来的是一个元素对象
 document.querySelector("选择器的名字");
 // 根据选择器获取元素,返回来的是一个伪数组,里面保存了多个的DOM对象
  document.querySelectorAll("选择器的名字")
```

### 阻止超链接的默认跳转

```html
//阻止超链接的默认的跳转:return false
<a href="http://www.baidu.com" id="a">aaa</a>

	<script type="text/javascript">
		document.getElementById("a").onclick = function () {
			alert("hahahahhaha");
			return false;
		}
	</script>
// return false;
// e.preventDefault();
// 上面的两个是阻止默认事件的
// 下面的两个是阻止事件冒泡的
// window.event.cancelBubble=true;
// e.stopPropagation();
```

### 常用页面事件

| 鼠标事件         | 描述                                         |
| ---------------- | -------------------------------------------- |
| onclick          | 鼠标单击时触发事件                           |
| ondbclick        | 鼠标双击时触发事件                           |
| onmouseover      | 鼠标刚进入某区域时触发事件                   |
| onmouseout       | 鼠标离开某区域时触发事件                     |
| onmousemove      | 鼠标在某区域上移动时触发事件                 |
| onmousedown      | 按下鼠标触发                                 |
| onmouseup        | 抬起鼠标触发                                 |
| **form 事件**    |                                              |
| onfocus          | 当某个元素获得焦点时触发事件                 |
| onblur           | 当某个元素失去焦点时触发事件                 |
| onchange         | 当某个元素失去焦点并且内容发生改变时触发事件 |
| onselect         | 当元素中文本被选中时触发                     |
| onsubmit         | 在提交表单时触发                             |
| **window事件**   |                                              |
| onload           | 页面内容完全加载完成时触发事件               |
| onunload         | 当前页面将被关闭后触发事件                   |
| onbeforeunload   | 当前页面将被关闭前触发事件                   |
| onresize         | 当浏览器窗口大小被调整时触发                 |
| **Keyboard事件** |                                              |
| onkeydown        | 当键盘上某个按键被按下时触发事件             |
| onkeyup          | 当键盘上某个按键被按下并松开时触发事件       |
| onkeypress       | 在用户敲击按钮时触发                         |

## 事件详解

`window.event.eventPhase`属性可以查看事件触发时所处的阶段

### 注册/移除事件的三种方式

```javascript
var box = document.getElementById('box');
box.onclick = function () {
  console.log('点击后执行');
};
box.onclick = null;

box.addEventListener('click', eventCode, false);
box.removeEventListener('click', eventCode, false);

box.attachEvent('onclick', eventCode);
box.detachEvent('onclick', eventCode);

function eventCode() {
  console.log('点击后执行');
}
```

### 兼容代码

```javascript
function addEventListener(element, type, fn) {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent){
    element.attachEvent('on' + type,fn);
  } else {
    element['on'+type] = fn;
  }
}

function removeEventListener(element, type, fn) {
  if (element.removeEventListener) {
    element.removeEventListener(type, fn, false);
  } else if (element.detachEvent) {
    element.detachEvent('on' + type, fn);
  } else {
    element['on'+type] = null;
  }
}
```

### 事件对象的属性和方法

- event.type 获取事件类型
- clientX/clientY     所有浏览器都支持，窗口位置
- pageX/pageY       IE8以前不支持，页面位置
- event.target || event.srcElement 用于获取触发事件的元素
- event.preventDefault() 取消默认行为

### 阻止事件冒泡

- 标准方式 event.stopPropagation();
- IE低版本 window.event.cancelBubble = true; 标准中已废弃











## 属性操作

### innerText、textContent 和  innerHTML

```javascript
//设置标签中的文本内容,应该使用textContent属性,谷歌,火狐支持,IE8不支持
//设置标签中的文本内容,应该使用innerText属性,谷歌,火狐,IE8都支持
// innerHTML主要的作用是在标签中设置新的html标签内容,是有标签效果的
// innerHTML方法由于会对字符串进行解析，需要避免在循环内多次使用。
//兼容代码
  //设置任意的标签中间的任意文本内容
  function setInnerText(element,text) {
    //判断浏览器是否支持这个属性
    if(typeof element.textContent =="undefined"){//不支持
      element.innerText=text;
    }else{//支持这个属性
      element.textContent=text;
    }
  }
  //获取任意标签中间的文本内容
  function getInnerText(element) {
    if(typeof element.textContent=="undefined"){
     return element.innerText;
    }else{
      return element.textContent;
    }
  }
```

### 自定义属性操作

```javascript
// 设置自定义属性:setAttribute("属性的名字","属性的值");
// 获取自定义属性的值:getAttribute("属性的名字")
// 移除自定义属性:removeAttribute("属性的名字");//也可以移除元素的自带的属性
var list=my$("uu").getElementsByTagName("li");
  for(var i=0;i<list.length;i++){
    //list[i].score=(i+1)*10;//此方式,自定义属性在DOM对象上,不在标签中
    list[i].setAttribute("score",(i+1)*10);
    
    list[i].onclick=function(){
      alert(this.getAttribute("score"));
    };
  }
```



### 样式操作

```javascript
var box = document.getElementById('box');
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = 'red';
```

### 类名操作

```javascript
var box = document.getElementById('box');
box.className = 'clearfix';
```



## 创建元素的三种方式

### document.write()

```javascript
document.write('新设置的内容<p>标签也可以生成</p>');
```

### innerHTML

```javascript
var box = document.getElementById('box');
box.innerHTML = '新内容<p>新标签</p>';
```

### document.createElement()

```javascript
var div = document.createElement('div');
document.body.appendChild(div);
```

[案例-动态创建列表](Javascript/动态创建列表.html)

[案例-元素相关的方法](Javascript/元素相关的方法.html)

## 节点操作

### 节点属性

| 属性      | 属性值                                                       |
| --------- | ------------------------------------------------------------ |
| nodeType  | 标签节点：1；属性节点：2；文本节点：3                        |
| nodeName  | 标签节点：大写的标签名字；属性节点：小写的属性名字；文本节点：#text |
| nodeValue | 标签节点：null；属性节点：属性的值；文本节点：文本内容       |

```html
<div id="dv">
  <ul id="uu">
    <li>乔峰</li>
    <li>鹿茸</li>
    <li id="three">段誉</li>
    <li>卡卡西</li>
    <li>雏田</li>
  </ul>
</div>
<script type="text/javascript">
  var ulObj=document.getElementById("uu");
  //父级节点
  console.log(ulObj.parentNode);
  //父级元素
  console.log(ulObj.parentElement);
  //子节点
  console.log(ulObj.childNodes);
  //子元素
  console.log(ulObj.children);

  
  //第一个子节点
  console.log(ulObj.firstChild);//------------------------IE8中是第一个子元素
  //第一个子元素
  console.log(ulObj.firstElementChild);//-----------------IE8中不支持
  //最后一个子节点
  console.log(ulObj.lastChild);//------------------------IE8中是最后一个子元素
  //最后一个子元素
  console.log(ulObj.lastElementChild);//-----------------IE8中不支持
  //某个元素的前一个兄弟节点
  console.log(my$("three").previousSibling);
  //某个元素的前一个兄弟元素
  console.log(my$("three").previousElementSibling);
  //某个元素的后一个兄弟节点
  console.log(my$("three").nextSibling);
  //某个元素的后一个兄弟元素
  console.log(my$("three").nextElementSibling);

  //总结:凡是获取节点的代码在谷歌和火狐得到的都是  相关的节点
  //凡是获取元素的代码在谷歌和火狐得到的都是   相关的元素
  //从子节点和兄弟节点开始,凡是获取节点的代码在IE8中得到的是元素,获取元素的相关代码,在IE8中得到的是undefined----元素的代码,iE中不支持
</script>
```

### 兼容代码

```javascript
/**
 * 获取父级元素中的第一个子元素
 * @param element 父级元素
 * @returns {*} 父级元素中的子级元素
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
/**
 * 获取父级元素中的最后一个子元素
 * @param element 父级元素
 * @returns {*} 最后一个子元素
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
/**
 * 获取某个元素的前一个兄弟元素
 * @param element 某个元素
 * @returns {*} 前一个兄弟元素
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling
    } else {
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
/**
 * 获取某个元素的后一个兄弟元素
 * @param element 某个元素
 * @returns {*} 后一个兄弟元素
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling
    } else {
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
/**
 * 获取某个元素的所有兄弟元素
 * @param element 某个元素
 * @returns {Array} 兄弟元素
 */
function getSiblings(element) {
    if (!element)return;
    var elements = [];
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);
        }
        ele = ele.previousSibling;
    }
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);

        }
        ele = ele.nextSibling;
    }
    return elements;
}
```



## offset、client、scroll

### 偏移量

```javascript
var box = document.getElementById('box');
console.log(box.offsetParent);
console.log(box.offsetLeft);
console.log(box.offsetTop);
console.log(box.offsetWidth);
console.log(box.offsetHeight);
```

![1498743216279](Javascript/images/offset.png)

### 客户区大小

```javascript
var box = document.getElementById('box');
console.log(box.clientLeft);
console.log(box.clientTop);
console.log(box.clientWidth);
console.log(box.clientHeight);
```

![1498743269100](Javascript/images/Client.png)

### 滚动偏移

```javascript
var box = document.getElementById('box');
console.log(box.scrollLeft)
console.log(box.scrollTop)
console.log(box.scrollWidth)
console.log(box.scrollHeight)
```

![1498743288621](Javascript/images/scroll.png)

## 



















































# BOM

### 对话框

```javascript
window.alert("你好！")
```

```javascript
var timeout = window.prompt("设置刷新时间间隔[S]"); 
console.log(timeout)
```

```javascript
var result = window.confirm("你确定退出吗")
console.log(result)
```



### 定时器

#### setTimeout()和clearTimeout()

```javascript
// 创建一个定时器，1000毫秒后执行，返回定时器的标示
var timerId = setTimeout(function () {
  console.log('Hello World');
}, 1000);

// 取消定时器的执行
clearTimeout(timerId);
```

#### setInterval()和clearInterval()

```javascript
// 创建一个定时器，每隔1秒调用一次
var timerId = setInterval(function () {
  var date = new Date();
  console.log(date.toLocaleTimeString());
}, 1000);

// 取消定时器的执行
clearInterval(timerId);
```



### location对象

location可以获取或者设置浏览器地址栏的URL

```javascript
window.location.hash		//地址栏上#及后面的内容
window.location.host		//主机名及端口号
window.location.hostname	//主机名
window.location.pathname	//文件的路径---相对路径
window.location.port		//端口号
window.location.protocol	//协议
window.location.search		//搜索的内容
location.reload()			//重新加载--刷新
location.assign("http://www.jd.com")	//重新设置地址，跳转方法
location.href = "http://www.jd.com";		//重新设置地址，跳转属性
location.replace("http://www.jd.com")	//跳转到指定页面，且没有历史记录
```



解析URL中的query，并返回对象的形式

```javascript
function getQuery(queryStr) {
  var query = {};
  if (queryStr.indexOf('?') > -1) {
    var index = queryStr.indexOf('?');
    queryStr = queryStr.substr(index + 1);
    var array = queryStr.split('&');
    for (var i = 0; i < array.length; i++) {
      var tmpArr = array[i].split('=');
      if (tmpArr.length === 2) {
        query[tmpArr[0]] = tmpArr[1];
      }
    }
  }
  return query;
}
console.log(getQuery(location.search));
console.log(getQuery(location.href));
```

### history对象

```javascript
back();			forward();		go();
```

### navigator对象

通过`userAgent`可以判断用户浏览器的类型

通过`platform`可以判断浏览器所在的系统平台类型.

```javascript
console.log(window.navigator.platform)
console.log(window.navigator.userAgent)
```

```javascript
/**
 * 返回当前浏览器是什么类型的浏览器
 */
function getUserBrowser(){
    var browserName=navigator.userAgent.toLowerCase();
    if(/msie/i.test(browserName) && !/opera/.test(browserName)){
        console.log("IE");
    }else if(/firefox/i.test(browserName)){
        console.log("Firefox");
    }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){
        console.log("Chrome");
    }else if(/opera/i.test(browserName)){
        console.log("Opera");
    }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
        console.log("Safari");
    }else{
        console.log("不知道什么鬼!");
    }
}
```





























































