import Commerce from '@chec/commerce.js';
import { fetchWithTimeout } from './fetchWithTimeout';

const key = process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY;

if(!key){
    console.error("Commerce Js Api Key is not defiend");
    process.exit(1);
}

const commerce = new Commerce(key, true, {
    timeoutMs: 0,
});

export const fetchProducts = async() => {
    console.log("KEY: ", key)
    const url = 'https://api.chec.io/v1/products?category_slug=featured'
    try {
        const res = await fetchWithTimeout(url, {
            headers: new Headers([
                ['X-Authorization',key],
                ['accept','application/json']
            ])
        });
        const result = await res.json();
        console.log(result)
    } catch (error) {
        console.log("Fetch error: ", error)
    }
    
}


export default commerce;