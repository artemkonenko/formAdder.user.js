// ==UserScript==
// @name formAdder
// @description Добавляем возможность подстановки пароля в форму логина СБРС мехмата ЮФУ
// @author dummer <yadummer@gmail.com>, ulysses <ulysses4ever@gmail.com>
// @license MIT
// @version 1.3
// @include     http://rating.mmcs.sfedu.ru/
// @include     http://rating.mmcs.sfedu.ru/sign
// @include     https://rating.mmcs.sfedu.ru/
// @include     https://rating.mmcs.sfedu.ru/sign
// @include     http://grade.sfedu.ru/
// @include     http://grade.sfedu.ru/sign
// @include     https://grade.sfedu.ru/
// @include     https://grade.sfedu.ru/sign
// @grant       none
// ==/UserScript==

// For recording your credential form should be submit, but it brokes up manual redirect after ajax request and make quite strange url. And that's why I check the value of password field and switch off submission only after recordind the credential.
isFirstUsage = false;
$(document).ready(function(){
    if ( $('#password').val() == '' )
    {
	isFirstUsage = true;
    }
});

form = $('<form id="Auth" action="" autocomplete="on"></form>');
$('.AuthForm').first().wrapInner(form);

// Some hacks for firefox.
$('<input type="submit" name="share_entry_form_submit" id="share_entry_form_submit"></input>').insertAfter("#signin_b");
$('#share_entry_form_submit').css('display', 'none');
$('#share_entry_form').submit(function() {
    return true;
});

$(document).keypress(function(event){
    if( event.keyCode==13 && !isFirstUsage)
    {
	event.preventDefault();
    }
});
