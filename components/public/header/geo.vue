<template>
  <div class="m-geo">
    <i class="el-icon-location" />{{$store.state.geo.position.city}}
    <nuxt-link class="changeCity"
               to="/changeCity">切换城市</nuxt-link>
    [<a style="color:black"
       v-for="item in $store.state.geo.hots.slice(0,3)"
       :key="item.id">
      {{ item.province}}
    </a>]
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
</style>

