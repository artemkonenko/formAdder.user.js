// ==UserScript==
// @name formAdder
// @description Добавляем возможность подстановки пароля в форму логина СБРС мехмата ЮФУ
// @author ulysses
// @license MIT
// @version 1.0
// @include http://rating.mmcs.sfedu.ru/
// @grant none
// ==/UserScript==

inputs=document.getElementById('inputs')
form=document.createElement('form');
form.innerHTML=inputs.outerHTML
inputs.parentNode.replaceChild(form,inputs)
