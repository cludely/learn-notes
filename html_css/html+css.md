# HTML笔记

W3C :  http://www.w3school.com.cn/

MDN: https://developer.mozilla.org/zh-CN/

## 表单标签

### input 控件

其常用属性如下表所示。

<img src="html/image/input.png" />

###  label标签

用于绑定一个表单元素, 当点击label标签的时候, 被绑定的表单元素就会获得输入焦点。

for 属性规定 label 与哪个表单元素绑定。

```html
<label for="male">Male</label>
<input type="radio" name="sex" id="male" value="male">
```

### textarea控件

通过textarea控件可以轻松地创建多行文本输入框，其基本语法格式如下：

```html
<textarea cols="每行中的字符数" rows="显示的行数" style="resize：none ">
  文本内容
</textarea>
```

resize：none    可以防止 火狐 谷歌等浏览器随意的拖动 文本域。

### 下拉菜单

使用select控件定义下拉菜单的基本语法格式如下

```html
<select>
<!-- 在option 中定义selected =" selected "时，当前项即为默认选中项 -->
  <option>选项1</option>
  <option>选项2</option>
  <option>选项3</option>
  ...
</select>
```

### 表单域

```html
<form action="url地址" method="提交方式" name="表单名称">
  各种表单控件
</form>
```

## 特殊字符标签 

<img src="./html/image/zifu.png" />

## 锚点定位 

通过创建锚点链接，用户能够快速定位到目标内容。

~~~html
1.使用<“a href=”#id名>“链接文本"</a>创建链接文本（被点击的）
  <a href="#two">   

2.使用相应的id名标注跳转目标的位置。
  <h3 id="two">第2集</h3> 
~~~

## 创建表格

在HTML网页中，要想创建表格，就需要使用表格相关的标签。创建表格的基本语法格式如下：

```html
<!-- html表格边框很粗table td, th{ border-collapse:collapse; }  表示相邻边框合并在一起 -->
<table>
 <!-- 这个标题会被居中于表格之上 -->
  <caption>我是表格标题</caption>
  <thead>	<!-- 表头结构 -->
  	  <tr>	<!-- 创建行 -->
        <th>单元格内的文字</th>	<!-- 创建表头单元格 -->
        ...
      </tr>
  </thead>
  <tbody>	<!-- 表主体 -->
  	  <tr>
        <td>单元格内的文字</td>
        ...
      </tr>
  </tbody>
</table>
```

合并单元格	跨行合并：rowspan    跨列合并：colspan

# HTML5新标签与特性

## 常用新标签

 w3c  手册中文官网     :   http://w3school.com.cn/

```html
<header> 语义 :定义页面的头部  页眉</header>
<nav>  语义 :定义导航栏 </nav> 
<footer> 语义: 定义 页面底部 页脚</footer>
<article> 语义:  定义文章</article>
<section> 语义： 定义区域</section>
<aside> 语义： 定义其所处内容之外的内容 侧边</aside>
```



- datalist   标签定义选项列表。请与 input 元素配合使用该元素

  ```html
  <input type="text" value="输入明星" list="star"/> <!--  input里面用 list -->
  <datalist id="star">   <!-- datalist 里面用 id  来实现和 input 链接 -->  
      		<option value="刘德华">刘德华</option>
      		<option value="刘德华">刘若英</option>
      		<option value="刘德华">刘晓庆</option>
      		<option value="刘德华">郭富城</option>
      		<option value="刘德华">张学友</option>
      		<option value="刘德华">郭郭</option>
  </datalist>
  ```

  

- fieldset 元素可将表单内的相关元素分组，打包      legend 搭配使用

  ```HTML
  <fieldset>
      		<legend>用户登录</legend>  标题
      		用户名: <input type="text"><br /><br />
      		密　码: <input type="password">
  </fieldset>
  ```

  [datalist.html](./html/datalist.html)

## 新增的input type属性值：

| **类型** | 使用示例                | 含义                 |
| -------- | ----------------------- | -------------------- |
| email    | <input type="email">    | 输入邮箱格式         |
| tel      | <input type="tel">      | 输入手机号码格式     |
| url      | <input type="url">      | 输入url格式          |
| number   | <input type="number">   | 输入数字格式         |
| search   | <input type="search">   | 搜索框（体现语义化） |
| range    | <input type="range">    | 自由拖动滑块         |
| time     | <input type="time">     | 小时分钟             |
| date     | <input type="date">     | 年月日               |
| datetime | <input type="datetime"> | 时间                 |
| month    | <input type="month">    | 月年                 |
| week     | <input type="week">     | 星期 年              |

[新增表单.html](html/新增表单.html)

## 常用新属性

| 属性             | 用法                                           | 含义                                                         |
| ---------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| **placeholder**  | <input type="text" placeholder="请输入用户名"> | 占位符  当用户输入的时候 里面的文字消失  删除所有文字，自动返回 |
| **autofocus**    | <input type="text" autofocus>                  | 规定当页面加载时 input 元素应该自动获得焦点                  |
| **multiple**     | <input type="file" multiple>                   | 多文件上传                                                   |
| **autocomplete** | <input type="text" autocomplete="off">         | 规定表单是否应该启用自动完成功能  有2个值，一个是on 一个是off      on 代表记录已经输入的值  1.autocomplete 首先需要提交按钮 <br/>2.这个表单您必须给他名字 |
| **required**     | <input type="text" required>                   | 必填项  内容不能为空                                         |
| **accesskey**    | <input type="text" accesskey="s">              | 规定激活（使元素获得焦点）元素的快捷键   采用 alt + s的形式  |



## 多媒体标签

- embed：标签定义嵌入的内容
- audio：播放音频
- video：播放视频

### 多媒体 embed（会使用）

embed可以用来插入各种多媒体，格式可以是 Midi、Wav、AIFF、AU、MP3等等。url为音频或视频文件及其路径，可以是相对路径或绝对路径。

```html
<embed src="http://player.youku.com/player.php/sid/XMTI4MzM2MDIwOA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
```

### 多媒体 audio

HTML5通过`<audio>`标签来解决音频播放的问题。

```html
<audio src="./audio/1.mp3"></audio>
```

并且可以通过附加属性可以更友好控制音频的播放，如：

| 属性     | 语义                                      |
| -------- | ----------------------------------------- |
| autoplay | 自动播放                                  |
| controls | 是否显示默认播放控件                      |
| loop     | 循环播放    如果这个属性不写 默认播放一次 |

由于版权等原因，不同的浏览器可支持播放的格式是不一样的

* 多浏览器支持的方案：

`<source>` 标签允许您规定可替换的视频/音频文件供浏览器根据它对媒体类型或者编解码器的支持进行选择

```html
<audio controls>
	<!-- 通过 source 标签指定多格式音频文件 -->
	<source src="./music/See You Again.mp3">
	<source src="./music/See You Again.ogg">
	<source src="./music/See You Again.wav">
	您的浏览器不支持HTML音频播放功能
</audio>
```





### 多媒体 video

HTML5通过`<audio>`标签来解决音频播放的问题。

```html
<video src="./audio/1.mp3"></video>
```

同样，通过附加属性可以更友好的控制视频的播放

| 属性     | 语义                 |
| -------- | -------------------- |
| autoplay | 自动播放             |
| controls | 是否显示默认播放控件 |
| loop     | 循环播放             |
| width    | 设置播放窗口宽度     |
| height   | 设置播放窗口的高度   |

由于版权等原因，不同的浏览器可支持播放的格式是不一样的 

* 多浏览器支持的方案

```html
<vedio controls>
	<!-- 通过 source 标签指定多格式视频文件 -->
	<source src="./music/See You Again.mp4">
	<source src="./music/See You Again.ogg">
    您的浏览器版本
</vedio>
```

















# CSS笔记

## CSS字体样式

### font-size:字号大小

font-size属性用于设置字号，单位使用像素单位px

### font-family:字体

font-family属性用于设置字体。网页中常用的字体有宋体、微软雅黑、黑体等

可以同时指定多个字体，中间以逗号隔开，表示如果浏览器不支持第一个字体，则会尝试下一个，直到找到合适的字体。

```shell
# 现在网页中普遍使用14px+。
# 尽量使用偶数的数字字号。ie6等老式浏览器支持奇数会有bug。
# 尽量使用系统默认字体，保证在任何用户的浏览器中都能正确显示。
```

### font-weight:字体粗细

```shell
# font-weight属性用于定义字体的粗细，其可用属性值：normal、bold、bolder、lighter、100~900
# 数字 400 等价于 normal，而 700 等价于 bold。  但是我们更喜欢用数字来表示。 
```

### font-style:字体风格

其可用属性值如下：

`normal`：默认值，浏览器会显示标准的字体样式。

`italic`：浏览器会显示斜体的字体样式。

`oblique`：浏览器会显示倾斜的字体样式。

### font:综合设置字体样式 

font属性用于对字体样式进行综合设置，其基本语法格式如下：

```css
选择器{font: font-style  font-weight  font-size/line-height  font-family;}
```

```shell
# 其中不需要设置的属性可以省略，但必须保留font-size和font-family属性，否则font属性将不起作用。
```

## CSS外观属性

### color:文本颜色

color属性用于定义文本的颜色。

### line-height:行间距

line-height属性用于设置行间距，即字符的垂直间距，一般称为行高。常用单位为px

### text-align:水平对齐方式

```shell
text-align属性用于设置文本内容的水平对齐。其可用属性值如下：
    left：左对齐（默认值）		right：右对齐		center：居中对齐
```

### text-indent:首行缩进

text-indent属性用于设置首行文本的缩进。

1em 就是一个字的宽度   如果是汉字的段落， 1em 就是一个汉字的宽度

### text-decoration 文本装饰

| 值           | 描述                                          |
| ------------ | --------------------------------------------- |
| none         | 默认。定义标准的文本。                        |
| underline    | 定义文本下的一条线。下划线 也是我们链接自带的 |
| overline     | 定义文本上的一条线。                          |
| line-through | 定义穿过文本的一条线。                        |
| blink        | 闪烁                                          |

## CSS 背景(background)

| background-color                                            | 背景颜色         |
| ----------------------------------------------------------- | ---------------- |
| background-image                                            | 背景图片地址     |
| background-repeat                                           | 是否平铺         |
| background-position                                         | 背景位置         |
| background-attachment                                       | 背景固定还是滚动 |
| background:背景颜色 背景图片地址 背景平铺 背景滚动 背景位置 |                  |

### 背景图片(image)

~~~css
/*  背景图片更改大小只能用 background-size */
background-image : none | url (url) 
~~~

| 参数              | 语义                           |
| ----------------- | ------------------------------ |
| none              | 无背景图（默认的）             |
| url('图片的地址') | 使用绝对或相对地址指定背景图像 |

### 背景平铺（repeat）

~~~css
background-repeat : repeat | no-repeat | repeat-x | repeat-y 
~~~

| 参数     | 语义                       |
| -------- | -------------------------- |
| repeat   | 背景图像在纵向和横向上平铺 |
| no-repea | 背景图像不平铺（默认的）   |
| repeat-x | 背景图像在横向上平铺       |
| repeat-y | 背景图像在纵向平铺         |

设置背景图片时，默认把图片在水平和垂直方向平铺以铺满整个元素。

### 背景位置(position)

~~~css
background-position : position || position 
~~~


position : 　top | center | bottom | left | center | right | 百分数

设置或检索对象的背景图像位置。必须先指定background-image属性。默认值为：(0% 0%)。
如果只指定了一个值，该值将用于横坐标。纵坐标将默认为50%。第二个值将用于纵坐标。

### 背景附着

~~~css
background-attachment : scroll | fixed 
~~~

| 参数   | 语义                     |
| ------ | ------------------------ |
| scroll | 背景图像是随对象内容滚动 |
| fixed  | 背景图像固定             |

### 背景简写

background:背景颜色 背景图片地址 背景平铺 背景滚动 背景位置

~~~css
background: transparent url(image.jpg) repeat-y  scroll 50% 0 ;
~~~

### 背景透明(CSS3)

~~~css
background: rgba(0, 0, 0, 0.3);
~~~







## 标签显示模式（display）

行内元素和行内块元素也可以看作是某个盒子下的文本。可以直接设置居中对齐

HTML标签一般分为块标签和行内标签两种类型，它们也称块元素和行内元素。具体如下：

### 块级元素(block-level)

每个块元素通常都会独自占据一整行或多整行，可以对其设置**宽度、高度、对齐、外边距以及内边距**等属性

```html
常见的块元素有<h1>~<h6>、<p>、<div>、<ul>、<ol>、<li>等，其中<div>标签是最典型的块元素。
```



### 行内元素(inline-level)

行内元素（内联元素）不占有独立的区域，仅仅靠自身的字体大小和图像尺寸来支撑结构，一般不可以设置宽度、高度、对齐等属性

```
常见的行内元素有<a>、<strong>、<b>、<em>、<i>、<del>、<s>、<ins>、<u>、<span>等，其中<span>标签最典型的行内元素。
```

行内元素设置高、宽无效，但水平方向的padding和margin可以设置，垂直方向的无效。



### 块级元素和行内元素区别

~~~
块级元素的特点：
（1）总是从新行开始
（2）高度，行高、外边距以及内边距都可以控制。
（3）宽度默认是容器的100%
（4）可以容纳内联元素和其他块元素。
~~~

~~~
行内元素的特点：
（1）和相邻行内元素在一行上。
（2）高、宽无效，但水平方向的padding和margin可以设置，垂直方向的无效。
（3）默认宽度就是它本身内容的宽度。
（4）行内元素只能容纳文本或则其他行内元素。a标签除外
~~~



### 行内块元素（inline-block）

```
在行内元素中有几个特殊的标签——<img />、<input />、<td>，可以对它们设置宽高和对齐属性称为行内块元素。
行内块元素的特点：
（1）和相邻行内元素（行内块）在一行上,但是之间会有空白缝隙。
（2）默认宽度就是它本身内容的宽度。
（3）高度，行高、外边距以及内边距都可以控制。
```

### 标签显示模式转换 display

| 模式转换              | 语义                     |
| --------------------- | ------------------------ |
| display:inline        | 块转行内                 |
| display:block         | 行内转块，显示元素       |
| display: inline-block | 块、行内元素转换为行内块 |
| display: flex         | 转为弹性盒子             |
| display: none         | 隐藏标签                 |

## 元素的显示与隐藏

### display 显示

display : none 隐藏对象 

特点： 隐藏之后，不再保留位置。

### visibility 可见性

设置或检索是否显示对象。

visible : 　对象可视

hidden : 　对象隐藏

特点： 隐藏之后，继续保留原有位置。

### overflow 溢出

检索或设置当对象的内容超过其指定高度及宽度时如何管理内容。

visible : 　不剪切内容也不添加滚动条。

auto : 　 超出自动显示滚动条，不超出不显示滚动条

hidden : 　不显示超过对象尺寸的内容，超出的部分隐藏掉

scroll : 　不管超出内容否，总是显示滚动条

# CSS优先级 (面试)

子元素可以继承父元素的样式（text-，font-，line-这些元素开头的都可以继承，以及color属性）

| 继承或者* 的贡献值       | 0,0,0,0  |
| ------------------------ | -------- |
| 每个元素（标签）贡献值为 | 0,0,0,1  |
| 每个类，伪类贡献值为     | 0,0,1,0  |
| 每个ID贡献值为           | 0,1,0,0  |
| 每个行内样式贡献值       | 1,0,0,0  |
| 每个!important贡献值     | ∞ 无穷大 |

权重是可以叠加的

 比如的例子：

```
div ul  li   ------>      0,0,0,3
.nav ul li   ------>      0,0,1,2
a:hover      -----—>      0,0,1,1
.nav a       ------>      0,0,1,1   
#nav p       ----->       0,1,0,1
```



# 盒子模型（Box Model）

## 盒子边框（border）

~~~css
border : border-width || border-style || border-color ;
/* border-radius: 左上角  右上角  右下角  左下角; */
border-radius: 5px;	/* 圆角边框 */
~~~

~~~shell
border-style常用属性值如下：
	none：没有边框即忽略所有边框的宽度（默认值）
	solid：边框为单实线
	dashed：边框为虚线  
	dotted：边框为点线
	double：边框为双实线
~~~

html表格边框很粗`table td, th{ border-collapse:collapse; }`  表示相邻边框合并在一起

## 内边距与外边距

| 值的个数                    | 表达意思                                       |
| --------------------------- | ---------------------------------------------- |
| padding: 3px;               | 表示上下左右都是3像素                          |
| padding: 3px 5px;           | 表示 上下3像素 左右 5像素                      |
| padding: 3px 5px 10px;      | 表示 上是3像素 左右是5像素 下是10像素          |
| padding: 3px 5px 10px 15px; | 表示 上是3像素 右是5像素 下是10像素 左是15像素 |

margin属性用于设置外边距。取值顺序跟内边距相同。

**如果一个盒子没有给定宽度/高度或者继承父亲的宽度/高度，则padding 不会影响本盒子大小。**

### 外边距实现盒子居中

给`左右的外边距都设置为auto`，就可使块级元素水平居中。

实际工作中常用这种方式进行网页布局，示例代码如下：

~~~css
.header{ width:960px; margin:0 auto;}
~~~

### 文字盒子居中图片和背景区别

~~~css
text-align: center; /*  文字居中水平 */
margin: 10px auto;  /* 盒子水平居中  左右margin 改为 auto */
~~~

~~~css
section img {  
		width: 200px;/* 插入图片更改大小 width 和 height */
		height: 210px;
		margin-top: 30px;  /* 插入图片更改位置 可以用margin 或padding  盒模型 */
		margin-left: 50px; /* 插入当图片也是一个盒子 */
	}

aside {
		width: 400px;
		height: 400px;
		border: 1px solid purple;
		background: #fff url(images/sun.jpg) no-repeat;
		background-size: 200px 210px; /*  背景图片更改大小只能用 background-size */
		background-position: 30px 50px; /* 背景图片更该位置 用 background-position */
	}
~~~

### 清除元素的默认内外边距

为了更方便地控制网页中的元素，制作网页时，可使用如下代码清除元素的默认内外边距： 

~~~css
* {
   padding:0;         /* 清除内边距 */
   margin:0;          /* 清除外边距 */
}
~~~

### 相邻块元素垂直外边距的合并

当上下相邻的两个块元素相遇时，如果上面的元素有下外边距margin-bottom，下面的元素有上外边距margin-top，则他们之间的垂直间距不是margin-bottom与margin-top之和，而是两者中的较大者。

<img src="./html/image/www.png" />

### 嵌套块元素垂直外边距的合并

案例-[嵌套块元素垂直外边距的合并.html](./html/嵌套块元素垂直外边距的合并.html)

对于两个嵌套关系的块元素，如果父元素没有上内边距及边框，则父元素的上外边距会与子元素的上外边距发生合并，合并后的外边距为两者中的较大者，即使父元素的上外边距为0，也会发生合并。

<img src="./html/image/n.png" />

```shell
解决方案：
可以为父元素定义1像素的上边框或上内边距。
可以为父元素添加overflow:hidden。
```


## 盒子阴影

~~~css
box-shadow:水平阴影 垂直阴影 模糊距离 阴影尺寸 阴影颜色  内/外阴影；
~~~

| 值           | 描述                             |
| ------------ | -------------------------------- |
| h-shadow     | 必需。水平阴影的位置，允许负值。 |
| v-shadow     | 必需。垂直阴影的位置，允许负值。 |
| blur         | 可选。模糊距离。                 |
| spread       | 可选。阴影的尺寸                 |
| color        | 可选。阴影的颜色                 |
| inset/outset | 可选。外部阴影或内部阴影         |

~~~css
div {
			/* box-shadow: 5px 5px 3px 4px rgba(0, 0, 0, .4);  */
			/* box-shadow:水平位置 垂直位置 模糊距离 阴影尺寸（影子大小） 阴影颜色  内/外阴影； */
			box-shadow: 0 15px 30px  rgba(0, 0, 0, .4);		
}
~~~

## 文字阴影(CSS3)

```css
/* text-shadow:水平位置 垂直位置 模糊距离 阴影颜色; */
text-shadow: 0 15px 30px  rgba(0, 0, 0, .4);	
```

| 值       | 描述                   |
| -------- | ---------------------- |
| h-shadow | 必须。水平阴影位置。   |
| v-shadow | 必须。垂直阴影的位置。 |
| blur     | 可选。模糊的距离。     |
| color    | 可选。阴影的颜色。     |





## CSS3盒模型

可以分成两种情况：

**box-sizing: content-box**  盒子大小为 width + padding + border   

**box-sizing: border-box ** 盒子大小为 width    就是说  padding 和 border 是包含到width里面的





# 浮动(float)

元素添加浮动后，会体现行内块元素的特性

~~~css
div {float: right | left | none;}
~~~

| 属性值 | 描述                 |
| ------ | -------------------- |
| left   | 元素向左浮动         |
| right  | 元素向右浮动         |
| none   | 元素不浮动（默认值） |

## 清除浮动的方法(面试)

其实本质叫做闭合浮动更好一些, 记住，清除浮动就是把浮动的盒子圈到里面，让父盒子闭合出口和入口不让他们出来影响其他元素。

在CSS中，clear属性用于清除浮动，其基本语法格式如下：

```
选择器{clear:属性值;}
```

| 属性值 | 描述                                       |
| ------ | ------------------------------------------ |
| left   | 不允许左侧有浮动元素（清除左侧浮动的影响） |
| right  | 不允许右侧有浮动元素（清除右侧浮动的影响） |
| both   | 同时清除左右两侧浮动的影响                 |

### 额外标签法

[案例-额外标签法清除浮动](./html/额外标签法.html)

```html
通过在浮动元素末尾添加一个空的标签例如 <div style=”clear:both”></div>，或则其他标签br等亦可。
```

优点： 通俗易懂，书写方便

缺点： 添加许多无意义的标签，结构化较差。 

### 父级添加overflow属性方法

[案例-overflow 清除浮动.html](./html/overflow 清除浮动.html)

可以通过触发BFC的方式，可以实现清除浮动效果。

~~~css
可以给父级添加： overflow为 hidden|auto|scroll  都可以实现。
~~~

优点：  代码简洁

缺点：  内容增多时候容易造成不会自动换行导致内容被隐藏掉，无法显示需要溢出的元素。

### 使用after伪元素清除浮动

[案例-after伪元素清除浮动](./html/after伪元素清除浮动.html)

```css
 .clearfix:after {  content: "."; display: block; height: 0; clear: both; visibility: hidden;  }   

 .clearfix {*zoom: 1;}   /* IE6、7 专有 */
```

优点： 符合闭合浮动思想  结构语义化正确

缺点： 由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。


### 使用before和after双伪元素清除浮动

[案例-双伪元素清除浮动](./html/双伪元素清除浮动.html)

```css
.clearfix:before,.clearfix:after { 
  content:"";
  display:table;  /* 这句话可以出发BFC BFC可以清除浮动 */
}
.clearfix:after {
 clear:both;
}
.clearfix {
  *zoom:1;		/* 兼容ie6 */
}
```

优点：  代码更简洁

缺点：  由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。

# 定位(position)

和浮动一样，元素添加了绝对定位和固定定位之后，转换为行内块模式

## 定位模式

```shell
选择器{position:属性值;}
```

| 值       | 描述                                             |
| -------- | ------------------------------------------------ |
| static   | 自动定位（默认定位方式）                         |
| relative | 相对定位，相对于其原文档流的位置进行定位         |
| absolute | 绝对定位，相对于其上一个已经定位的父元素进行定位 |
| fixed    | 固定定位，相对于浏览器窗口进行定位               |

### 相对定位relative

对元素设置相对定位后，可以通过边偏移属性改变元素的位置，但是**它在文档流中的位置仍然保留**。

[案例—相对定位](./html/相对定位.html)

### 绝对定位absolute 

 绝对定位可以通过边偏移移动位置，但是它**完全脱标，完全不占位置**。

* 父级没有定位

  若所有父元素都没有定位，以浏览器为准对齐(document文档)。

* 父级有定位

  绝对定位是将元素依据最近的已经定位（绝对、固定或相对定位）的父元素（祖先）进行定位。 

* 子绝父相

  子级是绝对定位，父亲只要是定位即可。就是说， 子绝父绝，子绝父相都是正确的。


### 固定定位fixed

固定定位是绝对定位的一种特殊形式。它以浏览器窗口作为参照物来定义网页元素。**不管浏览器滚动条如何滚动也不管浏览器窗口的大小如何变化，该元素都会始终显示在浏览器窗口的固定位置。**

ie6等低版本浏览器不支持固定定位。

### 四种定位总结

| 定位模式         | 是否脱标占有位置     | 是否可以使用边偏移 | 移动位置基准           |
| ---------------- | -------------------- | ------------------ | ---------------------- |
| 静态static       | 不脱标，正常模式     | 不可以             | 正常模式               |
| 相对定位relative | 不脱标，占有位置     | 可以               | 相对自身位置移动       |
| 绝对定位absolute | 完全脱标，不占有位置 | 可以               | 相对于定位父级移动位置 |
| 固定定位fixed    | 完全脱标，不占有位置 | 可以               | 相对于浏览器移动位置   |

## 叠放次序（z-index）

当对多个元素同时设置定位时，定位元素之间有可能会发生重叠。

**只有相对定位，绝对定位，固定定位有此属性，其余标准流，浮动，静态定位都无此属性。**

比如：  z-index: 2;





# CSS3 选择器

### 结构(位置)伪类选择器（CSS3)

```css
li:first-child { /*  选择第一个孩子 */
        		color: pink; 
        	}
li:last-child {   /* 最后一个孩子 */
        		color: purple;
        	}
li:nth-child(4) {   /* 选择第4个孩子  n  代表 第几个的意思 */ 
				color: skyblue;
        	}
li:hover {}
li:link {}
li:active {}
li:visited {}
input:focus {}
```

### 目标伪类选择器(CSS3)

 :target目标伪类选择器 :选择器可用于选取当前活动的目标元素

```css
:target {
		color: red;
		font-size: 30px;
}
```

### 属性选择器

选取标签带有某些特殊属性的选择器 我们成为属性选择器

```css
/* 获取到 拥有 该属性的元素 */
div[class^=font] { /*  class^=font 表示 font 开始位置就行了 */
			color: pink;
		}
div[class$=footer] { /*  class$=footer 表示 footer 结束位置就行了 */
			color: skyblue;
		}
div[class*=tao] { /* class*=tao  *=  表示tao 在任意位置都可以 */
			color: green;
		}
```

### 伪元素选择器（CSS3)

```css
p::first-letter {	/*  文本的第一个单词或字（如中文、日文、韩文等） */
  font-size: 20px;
  color: hotpink;
}

/* 文本第一行 */
p::first-line {
  color: skyblue;
}

p::selection {	/*	可改变选中文本的样式； */
  /* font-size: 50px; */
  color: orange;
}
```

### E::before和E::after

在E元素内部的开始位置和结束位创建一个元素。

**伪元素:before和:after添加的内容默认是inline元素；这个两个伪元素的`content`属性，表示伪元素的内容,设置:before和:after时必须设置其`content`属性，否则伪元素就不起作用。**

```css
div::befor {
  content:"开始";
}
div::after {
  content:"结束";
}
```



# CSS动画

## 过渡(CSS3)****

~~~css
/* transition: 要过渡的属性  花费时间  运动曲线  何时开始; */
transition: all 0.6s;  /* 所有属性都变化用all 就可以了  后面俩个属性可以省略 */
~~~

| 属性                       | 描述                                         |
| -------------------------- | -------------------------------------------- |
| transition                 | 简写属性，用于在一个属性中设置四个过渡属性。 |
| transition-property        | 规定应用过渡的 CSS 属性的名称。              |
| transition-duration        | 定义过渡效果花费的时间。默认是 0。           |
| transition-timing-function | 规定过渡效果的时间曲线。默认是 "ease"。      |
| transition-delay           | 规定过渡效果何时开始。默认是 0。             |

```shell
如果想要所有的属性都变化过渡， 写一个all 就可以
transition-duration  花费时间  单位是  秒     s    比如 0.5s    这个s单位必须写      ms 毫秒
运动曲线   默认是 ease
何时开始  默认是 0s  立马开始
```

运动曲线示意图：

![1498445454760](./html/image/1498445454760.png)



## 2D变形(CSS3) transform

###  移动 translate(x, y)    

```css
translate(50px,50px); 	/*	将文字或图像在水平方向和垂直方向上分别垂直移动50像素	*/
transform:translate(-50%,-50%);  /* 走的自己的一半 */
```

~~~css
/* 让定位的盒子水平居中 */
.box {
  width: 499.9999px;
  height: 400px;
  background: pink;
  position: absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
}
~~~

### 缩放 scale(x, y) 

```css
transform:scale(0.8,1);	/*	对元素进行水平和垂直方向的缩放	*/
```

### 旋转 rotate(deg) 

~~~css
transform:rotate(45deg);	/*对元素进行旋转，正值为顺时针，负值为逆时针；*/
~~~

### transform-origin可以调整元素转换变形的原点

```css
 div{
     transform-origin: left top;
     transform: rotate(45deg); }  /* 改变元素原点到左上角，然后进行顺时旋转45度 */    
```

### 倾斜 skew(deg, deg) 

```css
transform:skew(30deg,0deg);	/*把元素水平方向上倾斜30度，处置方向保持不变*/
```





## 动画(CSS3) animation

~~~css
animation:动画名称 动画时间 运动曲线  何时开始  播放次数  是否反方向;
~~~

![1498461096243](html/image/1498445454760.png)

关于几个值，除了名字，动画时间，延时有严格顺序要求其它随意r

~~~css
@keyframes 动画名称 {
  from{ 开始位置 }  0%
  to{  结束  }  100%
}
~~~

~~~
animation-iteration-count:infinite;  

~~~

```css
.animation {
  animation-name: goback;
  animation-duration: 5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;	/*无限循环播放*/
  /*animation-play-state:paused;*/   	/*暂停动画*/
}
@keyframes goback {
  0%{}
  49%{
    transform: translateX(1000px);
  }
  55%{
    transform: translateX(1000px) rotateY(180deg);
  }
  95%{
    transform: translateX(0) rotateY(180deg);
  }
  100%{
    transform: translateX(0) rotateY(0deg);
  }
}
```









# CSS高级技巧

## CSS用户界面样式

### 鼠标样式cursor

 设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。 

```html
cursor :  default  小白 | pointer  小手  | move  移动  |  text  文本
```

### 轮廓 outline

 是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

~~~css
 outline : outline-color ||outline-style || outline-width 
~~~

最直接的写法是 ：  outline: 0;   或者  outline: none;

### 防止拖拽文本域resize

resize：none    这个单词可以防止 火狐 谷歌等浏览器随意的拖动 文本域。

```html
<textarea  style="resize: none;"></textarea>
```

## vertical-align 垂直对齐

带有宽度的块级元素居中对齐，是margin: 0 auto;          文字居中对齐，是 text-align: center;

~~~css
vertical-align : baseline |top |middle |bottom 
~~~

设置或检索对象内容的垂直对其方式。 **通常用来控制图片/表单与文字的对齐**。

### 去除图片底侧空白缝隙

图片或者表单等行内块元素，他的底线会和父级盒子的基线对齐。这样图片底侧会有一个空白缝隙。

解决的方法就是：  

```shell
给img vertical-align:middle | top等等。  让图片不要和基线对齐。
给img 添加 display：block; 转换为块级元素就不会存在问题了。
```



## 溢出的文字隐藏

### word-break:自动换行

主要处理英文单词

| 属性值    | 语义                         |
| --------- | ---------------------------- |
| normal    | 使用浏览器默认的换行规则     |
| break-all | 允许在单词内换行             |
| keep-all  | 只能在半角空格或连字符处换行 |

### white-space

可以处理中文

| 属性值 | 语义                                                         |
| ------ | ------------------------------------------------------------ |
| normal | 默认处理方式                                                 |
| nowrap | 强制在同一行内显示所有文本，直到文本结束或者遭遇br标签对象才换行 |

### text-overflow 文字溢出

一定要首先强制一行内显示，再次和overflow属性  搭配使用

| 属性值   | 语义                                  |
| -------- | ------------------------------------- |
| clip     | 不显示省略标记（...），而是简单的裁切 |
| ellipsis | 当对象内文本溢出时显示省略标记（...） |



# CSS精灵技术（sprite）

背景图片很少的情况，没有必要使用精灵技术，维护成本太高。 如果是背景图片比较多，可以使用精灵技术。

### 精灵技术本质

CSS精灵是一种处理网页背景图像的方式。它将一个页面涉及到的所有零星背景图像都集中到一张大图中去，然后将大图应用于网页，这样，当用户访问该页面时，只需向服务发送一次请求，网页中的背景图像即可全部展示出来。

### 精灵技术的使用

CSS 精灵其实是将网页中的一些背景图像整合到一张大图中，然而，各个网页元素通常只需要精灵图中不同位置的某个小图，要想精确定位到精灵图中的某个小图，就需要使用CSS的background-image、background-repeat和background-position属性进行背景定位。

### 滑动门

核心技术就是利用CSS精灵（主要是背景位置）和盒子padding撑开宽度, 以便能适应不同字数的导航栏。

一般的经典布局都是这样的：

```html
<li>
  <a href="#">
    <span>导航栏内容</span>
  </a>
</li>
```

总结： 

1. a 设置 背景左侧，padding撑开合适宽度。    
2. span 设置背景右侧， padding撑开合适宽度 剩下由文字继续撑开宽度。
3. 之所以a包含span就是因为 整个导航都是可以点击的。





### 网站优化三大标签

SEO是由英文Search Engine Optimization缩写而来， 中文意译为“搜索引擎优化”！SEO是指通过对网站进行站内优化、网站结构调整、网站内容建设、网站代码优化等)和站外优化，从而提高网站的关键词排名以及公司产品的曝光度。

#### 网页title 标题

title具有不可替代性，是我们的内页第一个重要标签，是搜索引擎了解网页的入口，和对网页主题归属的最佳判断点。

建议：

首页标题：网站名（产品名）- 网站的介绍    

例如：

京东(JD.COM)-综合网购首选-正品低价、品质保障、配送及时、轻松购物！

小米商城 - 小米5s、红米Note 4、小米MIX、小米笔记本官方网站

#### Description  网站说明

对于关键词的作用明显降低，但由于很多搜索引擎，仍然大量采用网页的MATA标签中描述部分作为搜索结果的“内容摘要”。 就是简要说明我们网站的主要做什么的。
我们提倡，Description作为网站的总体业务和主题概括，多采用“我们是…”“我们提供…”“×××网作为…”“电话：010…”之类语句。

京东网：

```
<meta name="description" content="京东JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!" />
```

注意点：

1. 描述中出现关键词，与正文内容相关，这部分内容是给人看的，所以要写的很详细，让人感兴趣， 吸引用户点击。
2. 同样遵循简短原则，字符数含空格在内不要超过 120  个汉字。
3. 补充在 title  和 keywords  中未能充分表述的说明.
4. 用英文逗号 关键词1,关键词2

```
<meta name="description" content="小米商城直营小米公司旗下所有产品，囊括小米手机系列小米MIX、小米Note 2，红米手机系列红米Note 4、红米4，智能硬件，配件及小米生活周边，同时提供小米客户服务及售后支持。" />
```

#### Keywords 关键字

Keywords是页面关键词，是搜索引擎关注点之一。Keywords应该限制在6～8个关键词左右，电商类网站可以多 少许。

京东网：

```
<meta name="Keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东" />
```

小米网：

```
<meta name="keywords" content="小米,小米6,红米Note4,小米MIX,小米商城" />
```



# CSS W3C 统一验证工具

CssStats 是一个在线的 CSS 代码分析工具

```
网址是：  http://www.cssstats.com/
```

W3C 统一验证工具：    http://validator.w3.org/unicorn/  可以检测本地文件







































