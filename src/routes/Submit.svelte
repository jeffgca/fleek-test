<script>
import { push } from 'svelte-spa-router';

  // import Nav from '../Nav.svelte';
  let route = '/submit';
  import routes from '../routes';
  function submitHandler(ev) {
    ev.target.textContent = 'Submitting...';
    setTimeout(() => {
      push('/thanks');
    }, 2000)
  }
</script>

<p>Here's what we got! ready to submit to the public database?</p>

<button on:click={submitHandler}>Submit report</button>

<!-- <Nav route={route} routes={routes}/> -->


