<script>
	import Navbar from '$lib/components/navbar.svelte'
</script>

<Navbar/>

<slot></slot>



<style >
/* raleway-500 - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/raleway-v22-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/raleway-v22-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/raleway-v22-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/raleway-v22-latin-500.woff') format('woff'), /* Modern Browsers */
       url('../fonts/raleway-v22-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/raleway-v22-latin-500.svg#Raleway') format('svg'); /* Legacy iOS */
}

:global(*){
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
</style>