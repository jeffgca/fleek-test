<script>
  import Nav from '../Nav.svelte';
  // export let route, router;

  let route = '/scan';
  import routes from '../routes';
  let hasScanned = false;

  let clicker = () => { 
    hasScanned = true; 
  };

</script>

{#if !hasScanned}
  <p>Click this button to scan for Synths!</p>
  <button on:click={clicker}>Scan</button>
{:else}
  <h2>Scan complete!</h2>
  <Nav route={route} routes={routes}/>
{/if}


