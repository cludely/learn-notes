#  jQuery 笔记

[jQuery官网](http:// jquery.com)

## DOM 对象与 jQuery 对象

### DOM 对象

```shell
# 用原生JavaScript获取的DOM对象
# 	通过document.getElementById()  反馈的是元素(DOM对象)
# 通过document.getElementsByTagName()获取到的是什么？
#	伪数组(集合)，集合中的每一个对象是DOM对象
```



### jQuery 对象

```shell
# jQuery对象用$(" ")或jQuery(" ")的方式获取的对象
# jQuery对象又可以叫做包装集(包装的DOM对象的集合)
```

jQuery 对象不能使用 DOM 对象的成员，DOM 对象不能使用 jQuery 对象的成员



### jQuery 对象与 DOM 对象相互转换

```javascript
//DOM获取的对象
var btnObj1 = document.getElementById("btn")
//jQuery获取的---jQuery对象
var btnObj2=$("#btn");

  btnObj2[0].onclick=function () {	//jQuery对象转换成DOM对象,btnObj2[0]
    console.log("哈哈,我又变帅了");
  };

  $("btnObj1").click(function () { 	//DOM对象转换成jQuery对象,$("btnObj1")
      console.log("哈哈！")
  })

  console.log(btnObj1==btnObj2);  //false
```







## 页面加载的事件

```javascript
 //DOM中页面加载事件--------页面全部加载完毕才触发(标签,文字,图片,引入的文件)
    window.onload=function () {		//重新赋值，只执行一个  //2
      console.log("1");
    };
    window.onload=function () {
      console.log("2");
    };

    //jQuery中第一种页面加载的事件，执行两个---页面中的基本的元素加载后就触发
    $(window).load(function () {
      console.log("1");
    });
    $(window).load(function () {
      console.log("2");
    });

//    //jQuery中第二种页面加载的事件
    $(document).ready(function () {
      console.log("1");
    });
    $(document).ready(function () {
      console.log("2");
    });

//    //jQuery中第三种页面加载的事件---页面中基本的元素加载后就触发了
    $(function () {
      console.log("页面加载了1111");
    });



```





## 选择器

jQuery选择器是jQuery为我们提供的一组方法，让我们更加方便的获取到页面中的元素。注意：jQuery选择器返回的是jQuery对象。

jQuery选择器有很多，基本兼容了CSS1到CSS3所有的选择器，并且jQuery还添加了很多更加复杂的选择器。（查看jQuery文档）

jQuery选择器虽然很多，但是选择器之间可以相互替代，就是说获取一个元素，你会有很多种方法获取到。所以我们平时真正能用到的只是少数的最常用的选择器。

### jQuery基本选择器

| 名称       | 用法               | 描述                                 |
| ---------- | ------------------ | :----------------------------------- |
| ID选择器   | $('#id');          | 获取指定ID的元素                     |
| 类选择器   | $('.class');       | 获取同一类class的元素                |
| 标签选择器 | $('div');          | 获取同一类标签的所有元素             |
| 并集选择器 | $('div,p,li');     | 使用逗号分隔，只要符合条件之一就可。 |
| 交集选择器 | $('div.redClass'); | 获取class为redClass的div元素         |



### jQuery层级选择器

| 名称       | 用法          | 描述                                                        |
| ---------- | ------------- | :---------------------------------------------------------- |
| 子代选择器 | $('ul > li'); | 使用-号，获取儿子层级的元素，注意，并不会获取孙子层级的元素 |
| 后代选择器 | $('ul li');   | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等  |



### jQuery过滤选择器

- 这类选择器都带冒号:

| 名称         | 用法                               | 描述                                                        |
| ------------ | ---------------------------------- | :---------------------------------------------------------- |
| :eq（index） | $('li:eq(2)').css('color', 'red'); | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始。 |
| :odd         | $('li:odd').css('color', 'red');   | 获取到的li元素中，选择索引号为奇数的元素                    |
| :even        | $('li:even').css('color', 'red');  | 获取到的li元素中，选择索引号为偶数的元素                    |



### jQuery筛选选择器(方法)

- 筛选选择器的功能与过滤选择器有点类似，但是用法不一样，筛选选择器主要是方法。

| 名称               | 用法                        | 描述                             |
| ------------------ | --------------------------- | :------------------------------- |
| children(selector) | $('ul').children('li')      | 相当于$('ul>li')，子类选择器     |
| find(selector)     | $('ul').find('li');         | 相当于$('ul li'),后代选择器      |
| siblings(selector) | $('#first').siblings('li'); | 查找兄弟节点，不包括自己本身。   |
| parent()           | $('#first').parent();       | 查找父级元素                     |
| eq(index)          | $('li').eq(2);              | 相当于$('li:eq(2)'),index从0开始 |
| next()             | $('li').next()              | 找下一个兄弟                     |
| prev()             | $('li').prev()              | 找上一次兄弟                     |
| nextAll()          | $('li').nextAll()           | 获取li后面所有的兄弟元素         |
| prevAll()          | $('li').prevAll()           | 获取li前面所有的兄弟元素         |





## jQuery操作样式

### CSS操作

- 功能：设置或者修改样式，操作的是style属性。

- 操作单个样式

```javascript
// name：需要设置的样式名称
// value：对应的样式值
$obj.css(name, value);
// 使用案例
$('#one').css('background','gray');// 将背景色修改为灰色
```

- 设置多个样式

```javascript
// 参数是一个对象，对象中包含了需要设置的样式名和样式值
$obj.css(obj);
// 使用案例
$('#one').css({
    'background':'gray',
    'width':'400px',
    'height':'200px'
});
```

- 获取样式

```javascript
// name:需要获取的样式名称
$obj.css(name);
// 案例
$('div').css('background-color');
```

注意：获取样式操作只会返回第一个元素对应的样式值。

隐式迭代：

1. 设置操作的时候，如果是多个元素，那么给所有的元素设置相同的值
2. 获取操作的时候，如果是多个元素，那么只会返回第一个元素的值。

### class操作

- 添加样式类

```javascript
// name：需要添加的样式类名，注意参数不要带点.
$obj.addClass(name);
// 例子,给所有的div添加one的样式。
$('div').addClass('one');
```

- 移除样式类

```javascript
// name:需要移除的样式类名
$obj.removeClass('name');
// 例子，移除div中one的样式类名
$('div').removeClass('one');
```

- 判断是否有某个样式类

```javascript
// name:用于判断的样式类名，返回值为true false
$obj.hasClass(name)
// 例子，判断第一个div是否有one的样式类
$('div').hasClass('one');
```

- 切换样式类

```javascript
// name:需要切换的样式类名，如果有，移除该样式，如果没有，添加该样式。
$obj.toggleClass(name);
// 例子
$('div').toggleClass('one');
```







## jQuery动画

### 三组基本动画

- 显示(show)与隐藏(hide)是一组动画：
- 滑入(slideUp)与滑出(slideDown)与切换(slideToggle)，效果与卷帘门类似
- 淡入(fadeIn)与淡出(fadeOut)与切换(fadeToggle)

```javascript
$obj.show([speed], [callback]);
// speed(可选)：动画的执行时间
	 // 1.如果不传，就没有动画效果。如果是slide和fade系列，会默认为normal
	 // 2.毫秒值(比如1000),动画在1000毫秒执行完成(推荐)
     // 3.固定字符串，slow(200)、normal(400)、fast(600)，如果传其他字符串，则默认为normal。
// callback(可选):执行完动画后执行的回调函数

slideDown()/slideUp()/slideToggle();同理
fadeIn()/fadeOut();fadeToggle();同理
```

### 自定义动画

- animate: 自定义动画

```javascript
$(selector).animate({params},[speed],[easing],[callback]);
// {params}：要执行动画的CSS属性，带数字（必选）
// speed：执行动画时长（可选）
// easing:执行效果，默认为swing（缓动）  可以是linear（匀速）
// callback：动画执行完后立即执行的回调函数（可选）
```

### 动画队列与停止动画

- 在同一个元素上执行多个动画，那么对于这个动画来说，后面的动画会被放到动画队列中，等前面的动画执行完成了才会执行（联想：火车进站）。

```javascript
// stop方法：停止动画效果
stop(clearQueue, jumpToEnd);
// 第一个参数：是否清除队列
// 第二个参数：是否跳转到最终效果
```



## jQuery节点操作

### 创建节点

```javascript
// $(htmlStr)
// htmlStr：html格式的字符串
$('<span>这是一个span元素</span>');
```

### 添加节点

```javascript
append  appendTo	在被选元素的结尾插入内容
prepend prependTo	在被选元素的开头插入内容
before				在被选元素之前插入内容
after				在被选元素之后插入内容
```

### 清空节点与删除节点

- empty：清空指定节点的所有元素，自身保留(清理门户)

```javascript
$('div').empty(); // 清空div的所有内容（推荐使用，会清除子元素上绑定的内容，源码）
$('div').html('');// 使用html方法来清空元素，不推荐使用，会造成内存泄漏，绑定的事件不会被清除。
```

- remove：相比于empty，自身也删除

```javascript
$('div').remove();	//删除div
```



### 克隆节点

- 作用：复制匹配的元素

```javascript
// 复制$(selector)所匹配到的元素（深度复制）
// cloneNode(true)
// 返回值为复制的新元素，和原来的元素没有任何关系了。即修改新元素，不会影响到原来的元素。
$(selector).clone();
```





## jQuery操作属性

### attr操作

- 设置单个属性

```javascript
// 第一个参数：需要设置的属性名
// 第二个参数：对应的属性值
$obj.attr(name, value);
// 用法举例
$('img').attr('title','哎哟，不错哦');
$('img').attr('alt','哎哟，不错哦');
```

- 设置多个属性

```javascript
// 参数是一个对象，包含了需要设置的属性名和属性值
$obj.attr(obj)
// 用法举例
$('img').attr({
    title:'哎哟，不错哦',
    alt:'哎哟，不错哦',
    style:'opacity:.5'
});
```

- 获取属性

```javascript
// 传需要获取的属性名称，返回对应的属性值
$obj.attr(name)
// 用法举例
var oTitle = $('img').attr('title');
alert(oTitle);
```

- 移除属性

```javascript
// 参数：需要移除的属性名，
$obj.removeAttr(name);
// 用法举例
$('img').removeAttr('title');
```

### prop操作

- 在jQuery1.6之后，对于checked、selected、disabled这类boolean类型的属性来说，不能用attr方法，只能用prop方法。

```javascript
// 设置属性
$(':checked').prop('checked',true);
// 获取属性
$(':checked').prop('checked');// 返回true或者false
```

### val()/text/()html()/css()

```shell
$obj.val()		#获取或者设置表单元素的value属性的值
$obj.html() 	#对应innerHTML
$obj.text()		#对应innerText/textContent，处理了浏览器的兼容性
$obj.css()		#设置css
```





## jQuery尺寸和位置操作

+ 09-固定导航栏

### width方法与height方法

- 设置或者获取高度，不包括内边距、边框和外边距

```javascript
// 带参数表示设置高度
$('img').height(200);
// 不带参数获取高度
$('img').height();
```

获取网页的可视区宽高

```javascript
// 获取可视区宽度
$(window).width();
// 获取可视区高度
$(window).height();
```

### innerWidth/innerHeight/outerWidth/outerHeight

```javascript
innerWidth()/innerHeight()	方法返回元素的宽度/高度（包括内边距）。
outerWidth()/outerHeight()  方法返回元素的宽度/高度（包括内边距和边框）。
outerWidth(true)/outerHeight(true)  方法返回元素的宽度/高度（包括内边距、边框和外边距）。
```

### scrollTop与scrollLeft

- 设置或者获取垂直滚动条的位置

```javascript
// 获取页面被卷曲的高度
$(window).scrollTop();
// 获取页面被卷曲的宽度
$(window).scrollLeft();
```

### offset方法与position方法

- offset方法获取元素距离document的位置，position方法获取的是元素距离有定位的父元素(offsetParent)的位置。

```javascript
// 获取元素距离document的位置,返回值为对象：{left:100, top:100}
$(selector).offset();
// 获取相对于其最近的有定位的父元素的位置。
$(selector).position();
```





## jQuery事件机制

#### 简单事件注册

```javascript
click(handler)			单击事件
mouseenter(handler)		鼠标进入事件
mouseleave(handler)		鼠标离开事件
```

缺点：不能同时注册多个事件

#### bind方式注册事件

```javascript
// 第一个参数：事件类型
// 第二个参数：事件处理程序
$('p').bind('click mouseenter', function(){
    // 事件响应方法
});
```

缺点：不支持动态事件绑定

#### delegate注册委托事件

```javascript
// 第一个参数：selector，要绑定事件的元素
// 第二个参数：事件类型
// 第三个参数：事件处理函数
$('.parentBox').delegate('p', 'click', function(){
    // 为 .parentBox下面的所有的p标签绑定事件
});
```

缺点：只能注册委托事件，因此注册时间需要记得方法太多了



### on注册事件(重点)

on注册简单事件

```javascript
// 表示给$(selector)绑定事件，并且由自己触发，不支持动态绑定。
$(selector).on( 'click', function() {});
```

on注册事件委托

```javascript
// 表示给$(selector)绑定代理事件，当必须是它的内部元素span才能触发这个事件，支持动态绑定
$(selector).on( 'click','span', function() {});
```

事件委托原理

```javascript
// 事件委托的原理
var ul = document.querySelector('#ul');
ul.onclick = function (e) {
  // console.log(e.target.tagName);
  if (e.target.tagName.toLowerCase() === 'li') {
    console.log(e.target);
  }
}
```



on注册事件的语法：

```javascript
// 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）
// 第二个参数：selector, 执行事件的后代元素（可选），如果没有后代元素，那么事件将有自己执行。
// 第三个参数：data，传递给处理函数的数据，事件触发的时候通过event.data来使用（不常使用）
// 第四个参数：handler，事件处理函数
$(selector).on(events[,selector][,data],handler);
```

### 事件解绑

#### unbind方式（不用）

```javascript
$(selector).unbind(); // 解绑所有的事件
$(selector).unbind('click'); // 解绑指定的事件
$(selector).unbind('click mouseenter mouseleave'); // 同时解绑多个事件
```

#### undelegate方式（不用）

```javascript
$( selector ).undelegate(); // 解绑所有的delegate事件
$( selector).undelegate( 'click' ); // 解绑所有的click事件
```

#### off方式（推荐）

```javascript
// 解绑匹配元素(包括父级和子级元素)的所有事件
$(selector).off();
// 解绑匹配元素(包括父级和子级元素)的所有click事件
$(selector).off('click');
//解绑子级元素中p元素的click事件
$(selector).off('click'，'p');
//解绑子级元素中p元素的所有事件
$(selector).off(''，'p');
//解绑所有子级元素的点击事件
$(selector).off('click'，'**');
```

### 触发事件

```javascript
$(selector).click(); // 触发 click事件
$(selector).trigger('click');
```

### jQuery事件参数对象

jQuery事件对象其实就是js事件对象的一个封装，处理了兼容性。

```shell
 screenX和screenY	#对应屏幕最左上角的值
 clientX和clientY	#距离可视页面左上角的位置（忽视滚动条）
 pageX和pageY	#距离页面最顶部的左上角的位置（会计算滚动条的距离）

 event.button   #用户按下的鼠标的值（左键、滚轮、右键对应的值分别为0、1、2)
 
 #用于判断用户是否按下组合键
 event.altKey   #用户是否按下了alt键(true、false)
 event.shiftKey #用户是否按下了shift键
 event.ctrlKey  #用户是否按下了ctrl键
 event.keyCode  #用户按下的键值(对应ACSII码  a=65、A=97)

 event.data	#存储绑定事件时传递的附加数据

 event.stopPropagation()	#阻止事件冒泡行为
 event.preventDefault()	#阻止浏览器默认行为
 return false				#既能阻止事件冒泡，又能阻止浏览器默认行为。
```





## jQuery知识点

### each方法

作用：遍历jQuery对象集合，为每个匹配的元素执行一个函数

```javascript
// 参数一表示当前元素在所有匹配元素中的索引号
// 参数二表示当前元素（DOM对象）
$(selector).each(function(index,element){});
```

[each方法的使用.html](each方法的使用.html)



### 多库共存

- jQuery使用$作为标示符，但是如果与其他框架中的$冲突时，jQuery可以释放$符的控制权.

```javascript
var c = $.noConflict();// 释放$的控制权,并且把$的能力给了c
```



### jQuery的迭代(包装集)

如何判断对象是否存在，jQuery选择器返回的是一个对象数组，调用text()、html()、click()之类方法的时候其实是对数组中每个元素迭代调用每个方法，因此即使通过id选择的元素不存在也不会报错，如果需要判断指定的id是否存在，应该写：

```javascript
if ($("#btn1").length <= 0) {
	alert("id为btn1的元素不存在！");
 }

$('#id').length>0	//用途：可以判断页面上的某个元素是否存在
```



# Ajax

```javascript
$.ajax({
    url: '127.0.0.1:3000',
    type: 'get',
    dataType: 'jsonp',
    data: {
        id: 1
    },
    beforeSend: function (xhr) {
        console.log('before send')
    },
    success: function (data) {
        console.log(data)
    },
    error: function (err) {
        console.log(err)
    },
    complete: function () {
        console.log('Request Complete!')
    }
})
```







