<script context="module">
	export const ssr = true;
</script>

<script>
    import { cart } from '../scripts/cart'
    import { total } from '../scripts/total'
    export let card;

    function addToCart(mycard){
        let object = `{"data": ${mycard}, "number": 1 }`;
        
        object = JSON.parse(object);
    

        let exist = alreadyExist(object)
        if ( exist != -1 ){
            $cart[exist].number +=1 ;
        }
        else{
            let i = $cart.length;
            object =`{"data": ${mycard}, "number": 1, "index": ${i} }`;
            object = JSON.parse(object);
            $cart = [...$cart, object]
        }
        
        total.update(t=> Math.round((t + object.data.cardmarket.prices.avg1)*100)/100);
        

        
    }

function alreadyExist(json){
    for(let i = 0; i < $cart.length; i++){
        if ( $cart[i].data.id == json.data.id)
            return i
    }
    return -1
}

</script>

<div class="card">
    <p class="title"> {card.name} </p> 
    <img src={card.images.large} alt="img ${card.name}"/>
    <p class="price" >{card.cardmarket.prices.avg1}€</p> 
    <button on:click={addToCart(JSON.stringify(card))}>Ajouter au panier</button>
</div>


<style>
    .title{
        font-weight: 600;
    }

    .card{
        background-color: #c7ddde;
        border-radius: 16px;
        margin: 0.4em auto;
        padding:5px ;
        width: 70%;
        text-align: center;
    }
    
    .card img {
        max-width: 90%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .card button{
        background-color: #E63946;
        padding: 0.4em;
        border-radius: 16px;
        color: #F1FAEE;
        box-shadow: none;
        border: none;
    }

    .card button:active{
        background-color: #d83e48;
    }

    @media (min-width: 600px) {
        .card{
        border-radius: 16px;
        margin: 0.4em ;
        padding:5px ;
        width: auto;
        text-align: center;
        }
    }


</style>