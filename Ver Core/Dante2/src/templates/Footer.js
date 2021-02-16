const Footer = () => {
    const view = `
    <br>
    <br>
    <br>
    <br>
    <div class="container">
        <div class="subcribe-bar">
        <div style="display: none;" id="apploader1">Suscrito!</div>
        <div style="display: none;" id="apploader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
        <div id="appinputmail">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="subcribe-bar__content">
                <h5>No te pierdas de nada!</h5>
                <h3>Suscribete hoy!</h3>
              </div>
            </div>
            <div class="col-12 col-md-6">
            <div style="display: none;" id="appinputmaili">(Correo Incorrecto)<br></div>
              <div class="subcribe-bar__form">
                <input type="text" placeholder="example@gmail.com" id="app-mail"/>
                <button class="btn -normal" style="background-color: #29AEE4;" onclick="enviarmail();">Suscribirse</button>
              </div>
            </div>
            </div>
            </div>
          </div>
      </div>
    `;
    return view;
  };
  export default Footer;