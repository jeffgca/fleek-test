<script>
  import Nav from '../Nav.svelte';

  let route = '/results';
  import routes from '../routes';

</script>

<h2>Here's what we found:</h2>

<div>
  <ol>
    <li>Synth one</li>
    <li>Synth two</li>
  </ol>
</div>

<Nav route={route} routes={routes}/>



