// ==UserScript==
// @name formAdder
// @description Добавляем возможность подстановки пароля в форму логина СБРС мехмата ЮФУ
// @author ulysses
// @license MIT
// @version 1.0
// @include http://rating.mmcs.sfedu.ru/
// ==/UserScript==
 
// wrap the script in a closure (opera, ie)
// do not spoil the global scope
// The script can be transformed into a bookmarklet easily :)
(function(window, undefined ) {
 
        // normalized window
        var w;
        if (unsafeWindow != "undefined"){
                w = unsafeWindow
        } else {
                w = window;    
        }
 
        // You can inject almost any javascript library here.
        // Just pass the w as the window reference,
        // e.g. jquery.min.js embedding:
        // (function(a,b){function ci(a) ... a.jQuery=a.$=d})(w);
 
 
        // do not run in frames
        if (w.self != w.top){
                return;
        }
 
        // additional url check.
        // Google Chrome do not treat @match as intended sometimes.
        if (/http:\/\/rating.mmcs.sfedu.ru/.test(w.location.href)){
                //Below is the userscript code itself

                inputs=document.getElementById('inputs')
                form=document.createElement('form');
                form.innerHTML=inputs.outerHTML
                inputs.parentNode.replaceChild(form,inputs)
        }
})(window);
