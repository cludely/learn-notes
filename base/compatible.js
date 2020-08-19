/**
 * Created by Administrator on 2019-09-29.
 */


/**
 *     兼容代码
 *     如果这个属性在浏览器中不支持,那么这个属性的类型是undefined
 *     判断这个属性的类型 是不是undefined,就知道浏览器是否支持
 */

var my$ = {
    /**
     * 获取全局对象
     * @return 指向全局对象的指针
     */
    getGlobalThis: function () {
      if (typeof self !== 'undefined') { return self; }
      if (typeof window !== 'undefined') { return window; }
      if (typeof global !== 'undefined') { return global; }
      throw new Error('unable to locate global object');
    },
    /**
     * 格式化日期
     * @returns {string} 返回值是格式化的字符串日期
     */
    getDate: function () {
        var dt = new Date();
        var str = "";//存储时间的字符串
        //获取年
        var year = dt.getFullYear();
        //获取月
        var month = dt.getMonth() + 1;
        //获取日
        var day = dt.getDate();
        //获取小时
        var hour = dt.getHours();
        //获取分钟
        var min = dt.getMinutes();
        //获取秒
        var sec = dt.getSeconds();
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        str = year + "年" + month + "月" + day + "日 " + hour + ":" + min + ":" + sec;
        return str;
    },
    /**
     * 获取任意的一个属性的当前的属性值: left--->此时的left属性的值,width---当前的元素的宽
     * @param  {[Object]} element 元素
     * @param  {[String]} attr    属性名字
     * @return {[String]}         属性值
     */
    getStyle: function (element,attr) {
      //判断浏览器是否支持这个方法
      return window.getComputedStyle? window.getComputedStyle(element,null)[attr]:element.currentStyle[attr];
    },
    /**
     * 获取的是页面向上或者向左卷曲出去的距离的值,返回的是对象
     * @returns {{top: (Number|number), left: (Number|number)}}
     */
    getScroll: function () {
        return {
            top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
            left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft||0
        };
    },
    /**
     * 变速动画函数增加任意多个属性和回调函数及层级还有透明度
     * @param  {Object}   element  添加动画的元素
     * @param  {json}   json       要变化的json属性
     * {
     *     "width": 300,
     *     "height":  300
     * }
     * @param  {Number}   time     变化的速度   默认20
     * @param  {Function} callback 回调函数      可选
     */
    animate:  function (element, json, time, callback) {
        var that = this;
        clearInterval(element.timeId);//清理定时器
        if (!time) {       //默认时间
            var time = 20;
        }
        //定时器,返回的是定时器的id
        element.timeId = setInterval(function () {
            var flag = true;//默认,假设,全部到达目标
            //遍历json对象中的每个属性还有属性对应的目标值
            for (var attr in json) {
                //判断这个属性attr中是不是opacity
                if (attr == "opacity") {
                    //获取元素的当前的透明度,当前的透明度放大100倍
                    var current = that.getStyle(element, attr) * 100;
                    //目标的透明度放大100倍
                    var target = json[attr] * 100;
                    var step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    current += step;//移动后的值
                    element.style[attr] = current / 100;
                } else if (attr == "zIndex") { //判断这个属性attr中是不是zIndex
                    //层级改变就是直接改变这个属性的值
                    element.style[attr] = json[attr];
                } else {
                    //普通的属性
                    //获取元素这个属性的当前的值
                    var current = parseInt(that.getStyle(element, attr));
                    //当前的属性对应的目标值
                    var target = json[attr];
                    //移动的步数
                    var step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    current += step;//移动后的值
                    element.style[attr] = current + "px";
                }
                //是否到达目标
                if (current != target) {
                    flag = false;
                }
            }
            if (flag) {
                //清理定时器
                clearInterval(element.timeId);
                //所有的属性到达目标才能使用这个函数
                if (callback) {
                    callback();
                }
            }
        }, time);
    },
    /**
     * 打印当前浏览器的类型
     */
    getUserBrowser: function (){
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
    },
    /**
     * 设置任意的标签中间的任意文本内容
     * @param {[Object]} element 要设置的元素对象
     * @param {[String]} text    要设置的内容
     */
    setInnerText: function (element,text) {
        //判断浏览器是否支持这个属性
        if(typeof element.textContent =="undefined"){//不支持
          element.innerText=text;
        }else{//支持这个属性
          element.textContent=text;
        }
    },
    /**
     * 获取元素的文本内容
     * @param element 任意元素
     * @returns {*} 任意元素中的文本内容
     */
    getInnerText: function (element) {
        if (typeof(element.textContent) == "undefined") {
            return element.innerText;
        } else {
            return element.textContent;
        }
    },
    /**
     * 为任意元素.绑定任意的事件, 任意的元素,事件的类型,事件处理函数
     * @param element 某个元素
     * @param type string 事件类型
     */
    addEventListener: function (element,type,fn) {
        //判断浏览器是否支持这个方法
        if(element.addEventListener){
            element.addEventListener(type,fn,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,fn);
        }else{
            element["on"+type]=fn;
        }
    },
    //为任意的一个元素解绑某个事件:元素,事件类型,事件处理函数
    removeEventListener: function (element,type,fn) {
        if(element.removeEventListener){
            element.removeEventListener(type,fn,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,fn);
        }else{
            element["on"+type]=null;
        }
    },
    /**
     * 获取父级元素中的第一个子元素
     * @param element 父级元素
     * @returns {*} 父级元素中的子级元素
     */
    getFirstElement: function (element) {
        if (element.firstElementChild) {
            return element.firstElementChild;
        } else {
            var node = element.firstChild;
            while (node && node.nodeType != 1) {
                node = node.nextSibling;
            }
            return node;
        }
    },
    /**
     * 获取父级元素中的最后一个子元素
     * @param element 父级元素
     * @returns {*} 最后一个子元素
     */
    getLastElement: function (element) {
        if (element.lastElementChild) {
            return element.lastElementChild;
        } else {
            var node = element.lastChild;
            while (node && node.nodeType != 1) {
                node = node.previousSibling;
            }
            return node;
        }
    },
    /**
     * 获取某个元素的前一个兄弟元素
     * @param element 某个元素
     * @returns {*} 前一个兄弟元素
     */
    getPreviousElement: function (element) {
        if (element.previousElementSibling) {
            return element.previousElementSibling
        } else {
            var node = element.previousSibling;
            while (node && node.nodeType != 1) {
                node = node.previousSibling;
            }
            return node;
        }
    },
    /**
     * 获取某个元素的后一个兄弟元素
     * @param element 某个元素
     * @returns {*} 后一个兄弟元素
     */
    getNextElement: function (element) {
        if (element.nextElementSibling) {
            return element.nextElementSibling
        } else {
            var node = element.nextSibling;
            while (node && node.nodeType != 1) {
                node = node.nextSibling;
            }
            return node;
        }
    },
    /**
     * 获取某个元素的所有兄弟元素
     * @param element 某个元素
     * @returns {Array} 兄弟元素
     */
    getSiblings: function (element) {
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
}
    











var evt={
    //window.event和事件参数对象e的兼容
    getEvent:function (evt) {
      return window.event||evt;
    },
    //可视区域的横坐标的兼容代码
    getClientX:function (evt) {
      return this.getEvent(evt).clientX;
    },
    //可视区域的纵坐标的兼容代码
    getClientY:function (evt) {
      return this.getEvent(evt).clientY;
    },
    //页面向左卷曲出去的横坐标
    getScrollLeft:function () {
      return window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0;
    },
    //页面向上卷曲出去的纵坐标
    getScrollTop:function () {
      return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0;
    },
    //相对于页面的横坐标(pageX或者是clientX+scrollLeft)
    getPageX:function (evt) {
      return this.getEvent(evt).pageX? this.getEvent(evt).pageX:this.getClientX(evt)+this.getScrollLeft();
    },
    //相对于页面的纵坐标(pageY或者是clientY+scrollTop)
    getPageY:function (evt) {
      return this.getEvent(evt).pageY?this.getEvent(evt).pageY:this.getClientY(evt)+this.getScrollTop();
    }
};











if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
        var T, k;
        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }
        // 1. Let O be the result of calling toObject() passing the
        // |this| value as the argument.
        var O = Object(this);
        // 2. Let lenValue be the result of calling the Get() internal
        // method of O with the argument "length".
        // 3. Let len be toUint32(lenValue).
        var len = O.length >>> 0;
        // 4. If isCallable(callback) is false, throw a TypeError exception. 
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }
        // 5. If thisArg was supplied, let T be thisArg; else let
        // T be undefined.
        if (arguments.length > 1) {
            T = thisArg;
        }
        // 6. Let k be 0
        k = 0;
        // 7. Repeat, while k < len
        while (k < len) {
            var kValue;
            // a. Let Pk be ToString(k).
            //    This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty
            //    internal method of O with argument Pk.
            //    This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {
                // i. Let kValue be the result of calling the Get internal
                // method of O with argument Pk.
                kValue = O[k];
                // ii. Call the Call internal method of callback with T as
                // the this value and argument list containing kValue, k, and O.
                callback.call(T, kValue, k, O);
            }
            // d. Increase k by 1.
            k++;
        }
        // 8. return undefined
    };
}


if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  }
}







      
















