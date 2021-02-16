import Header from '../templates/Header';
import Categorias from '../templates/categorias';
import C1 from '../pages/categoria1';
import C2 from '../pages/categoria2';
import C3 from '../pages/categoria3';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/categoria1': C1,
  '/categoria2': C2,
  '/categoria3': C3,
  '/:id': Character,
};

const router = async () => {
  const header = null || document.getElementById('appheader');
  const categorias = null || document.getElementById('appcategorias');
  const content = null || document.getElementById('appposts');
  const footer = null || document.getElementById('appfooter');
  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  if ( hash == "/" ) {
    categorias.innerHTML = await Categorias();
  }
  if ( hash == "categoria1" ) {
    categorias.innerHTML = await Categorias();
  }
  if ( hash == "categoria2" ) {
    categorias.innerHTML = await Categorias();
  }
  if ( hash == "categoria3" ) {
    categorias.innerHTML = await Categorias();
  }
  content.innerHTML = await render();
  footer.innerHTML = await Footer();

  if ( hash == "/" ) {
    document.getElementById('apptab1').style="color:#29AEE4"
    var iddpe = localStorage.getItem('iddppe')
    if ( iddpe == 1){
      var iddp = localStorage.getItem('iddpp')
      if(  document.getElementById(iddp) ){
        document.getElementById('appcategorias').style="display:block;"
        document.getElementById('appfooter').style="display:block;"
        document.getElementById(iddp).remove();
      }
    }
  }
  if ( hash == "categoria1" ) {
    document.getElementById('apptab2').style="color:#29AEE4"
    var iddpe = localStorage.getItem('iddppe')
    if ( iddpe == 1){
      var iddp = localStorage.getItem('iddpp')
      if(  document.getElementById(iddp) ){
        document.getElementById('appcategorias').style="display:block;"
        document.getElementById('appfooter').style="display:block;"
        document.getElementById(iddp).remove();
      }
    }
  }
  if ( hash == "categoria2" ) {
    document.getElementById('apptab3').style="color:#29AEE4"
    var iddpe = localStorage.getItem('iddppe')
    if ( iddpe == 1){
      var iddp = localStorage.getItem('iddpp')
      if(  document.getElementById(iddp) ){
        document.getElementById('appcategorias').style="display:block;"
        document.getElementById('appfooter').style="display:block;"
        document.getElementById(iddp).remove();
      }
    }
  }
  if ( hash == "categoria3" ) {
    document.getElementById('apptab4').style="color:#29AEE4"
    var iddpe = localStorage.getItem('iddppe')
    if ( iddpe == 1){
      var iddp = localStorage.getItem('iddpp')
      if(  document.getElementById(iddp) ){
        document.getElementById('appcategorias').style="display:block;"
        document.getElementById('appfooter').style="display:block;"
        document.getElementById(iddp).remove();
      }
    }
  }
};

export default router;