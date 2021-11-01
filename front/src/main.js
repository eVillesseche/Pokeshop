import App from './App.svelte';
import carts from './components/cart.svelte';

var myHeaders = new Headers();
myHeaders.append("X-Api-Key", "cfdd5342-c749-4fcb-a271-481d5670469c")
var myInit = {
	method: 'GET',
	headers: myHeaders,
	mode: 'cors',
	cache: 'default' 
};


const app = new App({
	target: document.body
});

let cart = ['a'];
cart.length = 0;

export function addToCart(myid){


	let mycard = getCard(myid);

	console.log(mycard)

	if (cart.length == 0){
		cart = [mycard];
	}
	else{
		cart = [...cart, mycard]
	}
}

const getCard = function(myid){
	return fetch(`https://api.pokemontcg.io/v2/cards/${myid}`,myInit).then((response) => {
		return response.json();
})}

export const getCart = function(){
	console.log("cart: "+ cart )
	console.log(cart[0] )
	console.log(Promise.resolve(cart[0]))
	return cart
}


export default app;