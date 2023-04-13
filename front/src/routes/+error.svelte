<script context="module">
	// export function load({ error, status }) {
	// 	return {
	// 		props: {
	// 			title: `<p> ${status} </p>
    //             <p> ${error.message}</p>`
	// 		}
	// 	};
	// }
</script>

<script>
	export let title;
</script>


<div>
    <img src="./img/Joel.png" alt="Joel"/>
    <h1 >{@html title}</h1>  
</div>


<style>

div{
    position: relative;
    top: 50px;
    text-align: center;
    font-family:monospace;
    height: 90%;
}
img{
    height: auto;
    width: 30%;
}

</style>