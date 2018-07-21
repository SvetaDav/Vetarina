<template>
  <div id="app">
    <div class='staticno'>
      <div class='naziv-firme'>
      </div>
      <nav>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>




<style>
 *{
   margin: 0;
   box-sizing: border-box;
 }
 #app{
   display: flex;
   flex-flow: column;
 }
  nav{

    flex: 1 0 200px;
  }
  .naziv-firme{
    flex: 1 0 100px;

  }
  .staticno{
    flex:2 0 100px;
    flex-flow: column;
    background-color:#242424;
    display:flex;
  }
</style>
