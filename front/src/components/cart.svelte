<script>

    import {getCart} from '../main'

    let cart = getCart();

</script>

<div id="cart">
{#await cart}
    <p>... chargement</p>
{:then object}
    {#each object as card}
        <div>
            {card.name}
        </div>
    {/each}
{:catch error}
    <p>Une erreur est survenue.
        {error}
    </p>
{/await}
</div>

<style>

#cart{
    background-color: aliceblue;
    border-radius: 23px;
    color: #1D3557;
    padding: 0.4em;
    border: solid black 1px;
    width: 33%;
    float: right;
}


</style>