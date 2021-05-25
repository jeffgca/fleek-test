<script>
  import Nav from '../Nav.svelte';
  let route = '/';
  import routes from '../routes';

  // console.log(location);
</script>

<p>Hey folks I want to scan all of your MIDI devices to create an open data 
  I sure hope you're running Chrome or Edge? Don't try this on your phone. ... yada yada. Click next!</p>

<Nav route={route} routes={routes}/>




