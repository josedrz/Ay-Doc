import getDatac3 from '../utils/getDatac3';
const c3 = async () => {
  const characters = await getDatac3();
  const view = `
  <div id="content">
  <div class="container">
    <div class="gridde3">
    ${characters.map(character => `
        <div class="post-card-content-app">
            <div class="post-card -theme--blue -small -horizontal">
              <a class="card__cover" href="#/${character.id}/" tabindex="0"><img src="${character.img}" alt="${character.description}"></a>
              <div class="card__content">
                  <h5 class="card__content-category">${character.category}</h5>
                  <a class="card__content-title" href="#/${character.id}/" tabindex="0">${character.description}</a>
                  <div class="card__content-info">
                    <div class="info__time">
                        <i class="far fa-clock"></i>
                        <p>Clock ${character.time}, 2020</p>
                    </div>
                  </div>
              </div>
            </div>
        </div>`).join('')}
    </div>
  </div>
</div>
  `;
  return view;
  };

export default c3;