import {serve} from 'bun';

serve({
    fetch(req) {
        const url = new URL(req.url);
        if(url.pathname==='/'){
            return new Response('Hello, Bun!',{status:200});
        }
        else if(url.pathname==='/about'){
            return new Response('About Page',{status:200});
        }
        else{
            return new Response('Nothing matches your request.',{status:404});
        }
    },

    port:3000,
    hostname:'127.0.0.1'
})