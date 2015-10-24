// ==UserScript==
// @name formAdder
// @description Добавляем возможность подстановки пароля в форму логина СБРС мехмата ЮФУ
// @author ulysses, dummer
// @license MIT
// @version 1.1
// @include     http://rating.mmcs.sfedu.ru/
// @include     https://rating.mmcs.sfedu.ru/
// @include     http://grade.sfedu.ru/
// @include     https://grade.sfedu.ru/
// @grant none
// ==/UserScript==

$('.AuthForm').first().wrapInner('<form></form>');
