<script>
    import { addToCart } from '../main.js';
    export let card;
  
</script>

<div class="card">
    <p class="title"> {card.name} </p> 
    <img src={card.images.small} alt="img ${card.name}"/>
    <p class="price" >{card.cardmarket.prices.avg1}€</p> 
    <button on:click|once={addToCart(`${card.id}`)}>Ajouter au panier</button>
</div>


<style>

.card{
        background-color: aliceblue;
        border-radius: 16px;
        margin: 0.4em auto;
        padding:5px ;
        width: 70%;
        text-align: center;
    }

    
    .card img {
        width: auto;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .card button{
        background-color: #E63946;
        padding: 0.3em;
        border-radius: 16px;
        color: #F1FAEE;
    }


    @media (min-width: 600px) {
        .card{
        background-color: aliceblue;
        border-radius: 16px;
        margin: 0.4em ;
        padding:5px ;
        width: auto;
        text-align: center;
        }
    }
 
  

</style>