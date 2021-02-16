import router from './src/routes';
import './src/Blog/Blog.css';
window.onload = function() {
    localStorage.setItem('selectedOption', 0);
    localStorage.setItem('estadogeneral1', 0);
    localStorage.setItem('estadogeneral', 0);
    localStorage.setItem('imageestado', 0);
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);

var h=document.createElement('header');
h.setAttribute("id", "appheader");
document.body.appendChild(h);

var j=document.createElement('section');
j.setAttribute("id", "appbody");
document.body.appendChild(j);
