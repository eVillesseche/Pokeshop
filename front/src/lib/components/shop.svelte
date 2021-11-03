<script>
    import Card from './card.svelte'
    let nPage = 1;

    var myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "cfdd5342-c749-4fcb-a271-481d5670469c");
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' 
    };

    let cards = getMyCards();
    function getMyCards(){
        return fetch(`https://api.pokemontcg.io/v2/cards/?pageSize=40&page=${nPage}`,myInit).then((response) => {
            return response.json();
        })
    }


</script>

<div id="shop">
    <div>
        {#if nPage != 1}
            <button on:click={() => {nPage -= 1; cards = getMyCards();}}>Previous page</button>
        {/if}

        {nPage}

        <button on:click={() => {nPage +=1; cards = getMyCards();}}>Next page</button>
    </div>

    {#await cards}
        <div id="loading">
            <img src="./img/pokeball.gif" alt="pokeball"/>
            <p>... chargement</p>
        </div>
    {:then data}
        <div id="gallery">
            {#each data.data as myCard}

                <Card card={myCard}/>
            {/each}
        </div>
        <div>
            {#if nPage != 1}
            <button on:click={() => {nPage -= 1; cards = getMyCards();}}>Previous page</button>
            {/if}
        
            {nPage}
        
            <button on:click={() => {nPage +=1; cards = getMyCards();}}>Next page</button>
            </div>
    {:catch error}
        <p>Une erreur est survenue</p>
    {/await}

    

</div>


<style>

    #shop{
        padding-top: 50px;
        background-color: #FFFFFF;
    }
    #loading{
        text-align: center;
    }

    #gallery{
        display: grid;
        grid-template-columns: repeat(1, 1fr);       
        padding-top: 50px;
    }
    @media (min-width: 600px) {
        #gallery{
        grid-template-columns: repeat(2, 1fr);       
        }
    }
    @media (min-width: 800px) {
        #gallery{
        grid-template-columns: repeat(3, 1fr);       
        }
	}
    @media (min-width: 1100px) {
        #gallery{
        grid-template-columns: repeat(4, 1fr);       
        }
	}
    @media (min-width: 1500px) {
        #gallery{
        grid-template-columns: repeat(5, 1fr);       
        }
	}
 
  
</style>