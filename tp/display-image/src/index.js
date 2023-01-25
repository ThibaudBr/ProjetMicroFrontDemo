import ticket from 'home/ticket';
import singleSpaHtml from 'single-spa-html';
import displayTicket from 'displayTicket/displayTicket';

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
            el.innerHTML = ticket
                .map(({image}, index) => `
<img src="${image}" style="max-width: 100%" data-index="${index}"  alt=""/>
          `)
                .join('');
            document
                .querySelectorAll('.ticket-image img')
                .forEach(el => el.addEventListener('click', (evt) => {
                    displayTicket.image = parseInt(
                        evt.target.getAttribute('data-index')
                    );
                }))
        });
};

export const bootstrap = jsComponent.bootstrap;
export const mount = jsComponent.mount;
export const unmount = jsComponent.unmount;
