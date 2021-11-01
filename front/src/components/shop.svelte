<script>
    
    import Card from './card.svelte'

    var myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "cfdd5342-c749-4fcb-a271-481d5670469c")
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' 
    };

    let cards = getMyCards();

    function getMyCards(){
        return fetch('https://api.pokemontcg.io/v2/cards/',myInit).then((response) => {
            return response.json();
        })
    }



</script>


<div id="gallery">
    {#await cards}
        <p>... chargement</p>
    {:then data}
        {#each data.data as myCard}

            <Card card={myCard}/>
        
            {/each}
    {:catch error}
        <p>Une erreur est survenue</p>
    {/await}
</div>

<style>

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