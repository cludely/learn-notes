import $ from 'jquery'





$(function () {
	$('ul>li:even').css('backgroundColor', 'red')
	$('ul>li:odd').css('backgroundColor', 'lightgreen')
})