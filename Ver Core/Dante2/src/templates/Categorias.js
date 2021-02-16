const Header = () => {
    const view = `
    <div class="container">
          <div class="blog-ocean__content">
            <div class="news-block -theme--blue"><div class="news-block__header" style="margin-top: 160px;">
                    <div class="header__controller__title">
                      <div class="center-line-title -large -mb-0">
                        <h5>Categorias</h5>
                      </div>
                    </div>
                    <div class="header__controller">
                      <div class="header__controller__tab">
                      <a class="tab-item" href="informate" title="all" data-for="Todos" id="apptab1">Todos</a>
                      <a class="tab-item" href="informate#/categoria1" title="Covid-19" data-for="Covid-19" id="apptab2">Covid-19</a>
                      <a class="tab-item" href="informate#/categoria2" title="Vacuna" data-for="Vacuna" id="apptab3">Vacuna</a>
                      <a class="tab-item" href="informate#/categoria3" title="Salud Mental" data-for="Salud Mental" id="apptab4">Salud Mental</a>
                      </div>
                      <div class="header__controller__slider-control"></div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    `;
    return view;
  };

  export default Header;