function loadFont(a,b,c,d){function e(){if(!window.FontFace)return!1;var a=new FontFace("t",'url("data:application/font-woff2,") format("woff2")',{}),b=a.load();try{b.then(null,function(){})}catch(c){}return"loading"===a.status}var f=navigator.userAgent,g=!window.addEventListener||f.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/)&&!f.match(/Chrome/);if(!g){var h={};try{h=localStorage||{}}catch(i){}var j="x-font-"+a,k=j+"url",l=j+"css",m=h[k],n=h[l],o=document.createElement("style");if(o.rel="stylesheet",document.head.appendChild(o),!n||m!==b&&m!==c){var p=c&&e()?c:b,q=new XMLHttpRequest;q.open("GET",p),q.onload=function(){q.status>=200&&q.status<400&&(h[k]=p,h[l]=q.responseText,d||(o.textContent=q.responseText))},q.send()}else o.textContent=n}}


// loadFont('firasans-book','fonts/.woff.css'),

loadFont('bebasneue_bold','fonts/bebasneue_bold.woff.css'),
loadFont('bebasneue_book','fonts/bebasneue_book.woff.css'),
loadFont('bebasneue_light','fonts/bebasneue_light.woff.css'),
loadFont('bebasneue_regular','fonts/bebasneue_regular.woff.css'),

loadFont('moon_bold','fonts/moon_bold.woff.css'),
loadFont('moon_light','fonts/moon_light.woff.css'),

loadFont('poppins-bold','fonts/poppins-bold.woff.css'),
loadFont('poppins-regular','fonts/poppins-regular.woff.css'),
loadFont('poppins-light','fonts/poppins-light.woff.css'),
loadFont('poppins-medium','fonts/poppins-medium.woff.css'),
loadFont('poppins-semibold','fonts/poppins-semibold.woff.css');

/*не забывать ставить запятые!!!*/

/*loadFont('smthng name','fonts/ ),
loadFont('smthng name','fonts/ '),
loadFont('smthng name','fonts/ '),
loadFont('smthng name','fonts/ '),
loadFont('smthng name','fonts/ '),
loadFont('smthng name','fonts/ ');*/