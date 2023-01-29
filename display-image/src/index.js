import ticket from 'home/ticket';
import singleSpaHtml from 'single-spa-html';
import storeActions from 'storeActions/storeActions';

const template = `
<div
  class="ticket-image"
  style="display: grid; grid-template-columns: repeat(3, 33%);"
>
</div>
`;

const jsComponent = singleSpaHtml({
    template,
});

jsComponent.originalMount = jsComponent.mount;
jsComponent.mount = function(opts, props) {
    return jsComponent.originalMount(opts, props)
        .then(() => {
            const el = document.querySelector('.ticket-image');
            const html =
                ticket
                    .map(({image}, index) => `
<img src="${image}" style="width: 100%; height: 200px; border-radius: 5px; padding: 10px; background: white; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); cursor: pointer; margin: 15px " data-index="${index}" />
          `)
                    .join('');
            el.innerHTML = html;
            document
                .querySelectorAll('.ticket-image img')
                .forEach(el => el.addEventListener('click', (evt) => {
                    storeActions.image = parseInt(
                        evt.target.getAttribute('data-index')
                    );
                }))
        });
};

export const bootstrap = jsComponent.bootstrap;
export const mount = jsComponent.mount;
export const unmount = jsComponent.unmount;
