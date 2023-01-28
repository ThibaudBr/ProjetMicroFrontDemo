import ticket from 'home/ticket';
import singleSpaHtml from 'single-spa-html';
import storeActions from 'storeActions/storeActions';

const template = `
<div
  class="ticket-image"
  style="display: grid; grid-template-columns: repeat(5, 20%);"
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
<img src="${image}" style="max-width: 100%" data-index="${index}" />
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
