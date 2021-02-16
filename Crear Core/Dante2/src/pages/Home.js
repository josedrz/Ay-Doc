import React from 'react'
import { render } from 'react-dom'
import Dante from '../../editor/components/Dante/Dante.js'
import {ImageBlockConfig} from '../../editor/components/blocks/image.js'
import getData from '../utils/getData'

const Home = async () => {

    var g=document.createElement('div');
    g.setAttribute("id", "app");
    document.body.appendChild(g);
    g.style.margin = "0px auto";
    g.style.padding = "3em";
    g.style.paddingTop = "150px";

    const txt = await getData();
    const demovar = txt.txt;
    const demovar0 = demovar.slice(1, -1);
    const demovar1 = JSON.parse(demovar0)
    const demo = demovar1;

    function App() {
      return (
            <Dante
              content={demo}
              debug={true}
              read_only={false}
              widgets={[
              ImageBlockConfig({
                options: {
                  upload_url: 'https://aydooc-img-api.herokuapp.com/api/upload',
                  upload_callback: (ctx, img) => {
                    console.log('file uploaded: ' +
          ctx.data.url)
                  },
                  upload_error_callback: (ctx,
          img) => {
                    console.log(ctx)
                  },
                },
              }),
            ]}
            />
      )
    }

    render(<App content={demo} />, document.getElementById('app'))

    const view = `
    `;
    return view;
    };

  export default Home;