import getHash from '../utils/getHash';
import getData from '../utils/getData';
import React from 'react'
import { render } from 'react-dom'
import Dante from '../../editor/components/Dante/Dante.js'

const Character = async () => {
    const id = getHash();
    const character = await getData(id);
    var g=document.createElement('div');
    g.setAttribute("class", "app-responsive-mid");
    g.setAttribute("id", id);
    document.body.appendChild(g);
    g.style.margin = "0px auto";
    g.style.padding = "3em";
    g.style.paddingTop = "150px";
    const demovar = character.txt;
    const demovar0 = demovar.slice(1, -1);
    const demovar1 = JSON.parse(demovar0)
    const demo = demovar1;
    document.getElementById('appcategorias').style="display:none;"
    document.getElementById('appfooter').style="display:none;"
    localStorage.setItem('iddppe', '1')
    localStorage.setItem('iddpp', id)
    function App() {
      return (
            <Dante
              content={demo}
              read_only={true}
            />
      )
    }
    render(<App content={demo} />, document.getElementById(id))
    const view = `
      <p>${character.id}</p>
    `;
    return view;
    };

  export default Character;