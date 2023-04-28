import Commerce from '@chec/commerce.js';

const key = process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY;

if(!key){
    console.error("Commerce Js Api Key is not defiend");
    process.exit(1);
}

const commerce = new Commerce(key);

export default commerce;