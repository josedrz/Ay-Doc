import Header from '../templates/Header';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Publicar from '../pages/Publicar';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/publicar': Publicar,
};

const router = async () => {
  const header = null || document.getElementById('appheader');
  const content = null || document.getElementById('appbody');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  if ( hash == "/" ) {
    localStorage.setItem('estadogeneral1','0');
    if(  document.getElementById('btnpublish') ){
      document.getElementById('btnpublish').style="background-color: rgba(3,168,124,.25)";
    }
    content.innerHTML = await render();
  }
  if ( hash == 'publicar' ) {
    var we = localStorage.getItem('estadogeneral1');
    if ( we == 1 ){
      localStorage.setItem('imageestado','0');
      localStorage.setItem('estadogeneral','0');
      if( document.getElementById('app') ){
        document.getElementById('app').remove();
      }
      if(  document.getElementById('btnpublish') ){
        document.getElementById('btnpublish').style="display: none";
      }
      content.innerHTML = await render();
    }else {
      alert('Ups!!, no guardaste..');
      location.href="https://civitascrear.web.app/";
    }
  }
};

export default router;
