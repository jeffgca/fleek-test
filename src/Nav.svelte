<script>
  import {link, location} from 'svelte-spa-router'
  import {map, each, keys, values, take} from 'lodash-es';
  export let route, routes;

  let _map = take(map(routes, (_class, path) => {
    return [path, _class.name];
  }), keys(routes).length-1);
  let _paths = map(_map, (row) => { return row[0]; })
  let currentIndex = _paths.indexOf(route)
  console.log(route, currentIndex, _paths);
  let paths = keys(routes);

</script>

<div class="nav-top">
  <ul>
  {#if currentIndex === 0}
    <li>{_map[currentIndex][1]}</li>
    <li><a href="{_paths[currentIndex+1]}" use:link>Next</a></li>
  {:else if currentIndex < _paths.length-1}
    <li><a href="{_paths[currentIndex-1]}" use:link>Back</a></li>
    || <li>{_map[currentIndex][1]}</li> ||
    <li><a href="{_paths[currentIndex+1]}" use:link>Next</a></li>
  {:else}
    <li><a href="{_paths[currentIndex-1]}" use:link>Back</a></li>
    || <li>{_map[currentIndex][1]}</li> ||
    <li><a href="/">Home</a></li>

  {/if}
  </ul>
</div>

<style>
.nav-top li {
  display: inline;
}
</style>