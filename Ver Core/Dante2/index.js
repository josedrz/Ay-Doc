import router from './src/routes';
import './src/Blog/Blog.css';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

var h=document.createElement('header');
h.setAttribute("id", "appheader");
document.body.appendChild(h);

var h=document.createElement('div');
h.setAttribute("id", "appcategorias");
document.body.appendChild(h);

var j=document.createElement('section');
j.setAttribute("id", "appposts");
document.body.appendChild(j);

var j=document.createElement('div');
j.setAttribute("id", "appfooter");
document.body.appendChild(j);