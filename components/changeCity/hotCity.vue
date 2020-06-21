<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市：</dt>
      <dd @click='handleCityClick(item)'
          v-for="item in list"
          :key="item.id">
        <a href="/"
           style="color:black">
          {{item.name==='市辖区'?item.province:item.name}}
        </a>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  async mounted () {
    let {
      status,
      data: { hots }
    } = await this.$axios.get('/geo/hotCity')
    if (status === 200) {
      this.list = hots
    }
  },
  methods: {
    handleCityClick (item) {
      // let position = {}
      // position.city = item.name === '市辖区' ? item.province : item.name
      // position.province = item.province
      // this.store.mutations.setPosition(position)
      // this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/changeCity/hot.scss";
</style>

