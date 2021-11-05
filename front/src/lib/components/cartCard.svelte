<script context="module">
	export const ssr = true;
</script>

<script>   
     import { cart } from '../scripts/cart'
    import { total } from '../scripts/total'
    export let card;
  
    function deleteCard(mycard){
        $cart = $cart.filter(c => c.data.id !== mycard.data.id);
    }



</script>

    <div class="content">
            <img src={card.data.images.small} alt="img {card.data.name}"/>

            <span>{card.data.name}</span>
            {#if card.number != 1}
                <button on:click={() => {card.number -= 1; $total =(Math.round(($total - card.data.cardmarket.prices.avg1)*100)/100);}}>-</button>
                {:else}
                <button>-</button>
            {/if}
            <span>{card.number}</span>
            <button on:click={() => {card.number += 1;  $total = (Math.round(($total + card.data.cardmarket.prices.avg1)*100)/100);}}>+</button>
            <button on:click={() =>{ $total = (Math.round(($total - (card.number * card.data.cardmarket.prices.avg1))*100)/100); deleteCard(card)}}>X</button>
    </div> 

<style>

    img{
        width: 200px;
        height: auto;
        vertical-align:middle;
    }
    .content{
        padding: 0.4em;
        position: relative;
        display: inline-block;
    }

    button{
        width: 20px;
        border-radius: 50%;
        border: 1px solid black;
    }

</style>