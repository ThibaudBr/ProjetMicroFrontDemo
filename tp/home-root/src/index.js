import { registerApplication, start } from 'single-spa';

registerApplication(
    'display-image',
    () => import('displayImage/displayImage'),
    location => location.pathname.startsWith('/')
);

registerApplication(
    'display-ticket',
    () => import('displayTicket/displayTicket'),
    location => location.pathname.startsWith('/')
);

registerApplication(
    'header',
    () => import('nav/header'),
    location => location.pathname.startsWith('/')
);

registerApplication(
    'footer',
    () => import('nav/footer'),
    location => location.pathname.startsWith('/')
);

registerApplication(
    'buy',
    () => import('buy/buy'),
    location => location.pathname.startsWith('/')
);

start(
    {
        urlRerouteOnly: true,
    }
);
