<script>   
    import Cart from './cart.svelte'
    
    let visible = false;
    function toggle(){
        visible = !visible;
    } 
</script>

<header>
    <p> <a  href="/">Bienvenue sur Pokeshop</a>
    <img src="../img/cart.png" alt="cart" data-testid="cart" on:click={toggle}/></p>
    {#if visible}
        <Cart/>
    {/if}
</header>

<style>

*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
    header{
        background-color: #457B9D;
        width: 100%;
        height: 50px;
        color: #F1FAEE  ;
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