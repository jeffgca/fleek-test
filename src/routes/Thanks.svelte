<script>
  import Nav from '../Nav.svelte';
  let route = '/thanks';
  import routes from '../routes';
</script>
<div>
<h1>Thanks, friend!</h1>

<p>What's next?</p>

<ul>
  <li>this</li>
  <li>that</li>
  <li>the other</li>
</ul>

<Nav route={route} routes={routes}/>

</div>




<style>
  div {
    text-align: left;
  }
</style>



