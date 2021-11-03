<script>
    import { cart } from '../scripts/cart'
    import { total } from '../scripts/total'
    
    import { slide } from "svelte/transition"
    import CartCard from './cartCard.svelte'

    let cart_value;
    let total_value;

    const unsubscribeTotal = total.subscribe(value => {
        total_value = value;
    });

    const unsubscribeCart = cart.subscribe(value => {
        cart_value= value;
    });

</script>

<div transition:slide id="cart">


{#await cart_value}
    <p>... chargement</p>
{:then object}
        {#if $cart.length < 1}
            <div id="voidCart">
                <p>Nothing in the cart.</p>
                <img src="./img/pika.png" alt="sad pika" />
            </div>
        {:else}
            {#each object as card}
            <div class="item">
                    <CartCard card={card}/>
            </div>
            {/each}
            <div>
                <h2>Total: {total_value} €</h2>
            </div>
        {/if}
{:catch error}
    <p>Une erreur est survenue.
        {error}
    </p>
{/await}
</div>

<style>

    #cart::-webkit-scrollbar {
        display: none;
    }
    #cart {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    #cart{
        position: fixed;
        overflow-x: hidden;
        overflow-y: scroll;
        background-color: aliceblue;
        border-radius: 23px;
        color: #1D3557;
        border: solid black 1px;
        width: 33%;
        float: right;
        top:50px;
        bottom:2px;
        right:0;
    }

    .item:hover{
        background-color: #dadada;
    }

    .item:first-child{
        border-radius: 23px 23px 0 0 ;
    }
    .item:first-child:hover{
        border-radius: 23px 23px 0 0 ;
    }

    .item:last-child{
        border-radius: 0 0 23px 23px ;
    }
    .item:last-child:hover{
        border-radius: 0 0 23px 23px ;
    }
    #voidCart img{
        width: 100%;
    }
    #voidCart{
        position: absolute;
        text-align: center;
        bottom:0px
    }
  
</style>