const Publicar = () => {
    const view = `
      <div>
        <div>form</div>
        <div class="app-flex">
        <div style="display: none;" id="apploader"><br><br><br><br><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
        <div class="col-12 col-md-6" id="apploadercontent">
              <div class="contact-us__form">
                <br>
                <div class="app-grid-2">
                <div></div>
                <div class="app-cerrar" style="color: #aeaeae">
                <a href="/"><svg class="svgIcon-use" width="29" height="29"><path d="M20.13 8.11l-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61" fill-rule="evenodd"></path></svg></a>
                </div>
                </div>
                <br>
                <br>
                <h3 class="contact-title">NEW POST</h3>
                <br>
                <br>
                <form>
                  <input type="text" placeholder="Título" name="titulo" id="titulo" onkeyup="lookup();"/>
                  <div class="mainselection">
                  <select name="State" id="input7" onchange="lookchange(this);">
                      <option value="" disabled selected>Categoría</option>
                      <option value="1">Covid-19</option>
                      <option value="2">Vacuna</option>
                      <option value="3">Salud Mental</option>
                  </select>
                  </div>
                </form>
                <div>
                <span><form id="formimg"><input type="file" name="file" id="nuestroinput" onChange="imgchangetxt();"></form></span>
                <label for="nuestroinput"><span id="imgchange"><span><svg width="17" height="15" viewBox="0 0 20 20" fill="#aeaeae"><path d="M8.416,3.943l1.12-1.12v9.031c0,0.257,0.208,0.464,0.464,0.464c0.256,0,0.464-0.207,0.464-0.464V2.823l1.12,1.12c0.182,0.182,0.476,0.182,0.656,0c0.182-0.181,0.182-0.475,0-0.656l-1.744-1.745c-0.018-0.081-0.048-0.16-0.112-0.224C10.279,1.214,10.137,1.177,10,1.194c-0.137-0.017-0.279,0.02-0.384,0.125C9.551,1.384,9.518,1.465,9.499,1.548L7.76,3.288c-0.182,0.181-0.182,0.475,0,0.656C7.941,4.125,8.234,4.125,8.416,3.943z M15.569,6.286h-2.32v0.928h2.32c0.512,0,0.928,0.416,0.928,0.928v8.817c0,0.513-0.416,0.929-0.928,0.929H4.432c-0.513,0-0.928-0.416-0.928-0.929V8.142c0-0.513,0.416-0.928,0.928-0.928h2.32V6.286h-2.32c-1.025,0-1.856,0.831-1.856,1.856v8.817c0,1.025,0.832,1.856,1.856,1.856h11.138c1.024,0,1.855-0.831,1.855-1.856V8.142C17.425,7.117,16.594,6.286,15.569,6.286z"></path></svg>&nbsp;&nbsp;&nbsp;Imagen de portada</span></span></label>
                </div>
                <br>
                <button class="btn-publish" id="btnpublishn" onclick="enviarpost();">Publish Now</button>
        </div>
        </div>
      </div>
    `;
    return view;
  };
  export default Publicar;