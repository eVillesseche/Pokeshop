<script>   
    import { getCart } from '../main.js'
    import Cart from './cart.svelte'

 
    let newcart;

    let visible = false;
    function toggle(){
        visible = !visible;
    }
    
</script>

<header>
    <p>Bienvenue sur Pokeshop
    <img src="../img/cart.png" alt="cart" on:click={toggle}/></p>
    {#if visible}
        <Cart />
    {/if}
</header>

<style>

    header{
        background-color: #457B9D;
        width: 100%;
        height: 50px;
        color: #F1FAEE;
        position: fixed;
    }

    p{
        font-weight: 700;
        font-size:larger;
        margin: 0.4em;
    }

    img{
        float: right;
        filter: invert(1);
    }

</style>