<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd kind="all"
          :class="{active:kind==='all'}"
          keyword="景点">全部</dd>
      <dd kind="part"
          :class="{active:kind==='part'}"
          keyword="美食">约人聚餐</dd>
      <dd kind="spa"
          :class="{active:kind==='spa'}"
          keyword="丽人">丽人SPA</dd>
      <dd kind="movie"
          :class="{active:kind==='moive'}"
          keyword="电影">电影演出</dd>
      <dd kind="travel"
          :class="{active:kind==='travel'}"
          keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in cur"
          :key="item.title">
        <el-card :body-style="{ padding:'0px' }"
                 shadow="never">
          <img :src="item.img"
               class="image" />
          <ul class="cbody">
            <li class="title">{{item.title}}</li>
            <li class="pos">{{item.pos}}</li>
            <li class="price">￥<em></em>{{item.price}}<span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      kind: 'all',
      list: {
        all: [],
        part: [],
        spa: [],
        moive: [],
        travel: []
      }
    }
  },
  computed: {
    cur () {
      return this.list[this.kind]
    }
  },
  async mounted () {
    let self = this
    let {
      status,
      data: { count, pois }
    } = await self.$axios.get('/search/resultsByKeywords', {
      params: {
        keyword: '景点',
        city: self.$store.state.geo.position.city
      }
    })
    if (status === 200 && count > 0) {
      let r = pois
        .filter(item => item.photos.length)
        .map(item => {
          return {
            title: item.name,
            pos: item.type.split(';')[0],
            price: item.biz_ext.cost || '暂无',
            img: item.photos[0].url,
            url: '//abc.com'
          }
        })
      self.list[self.kind] = r.slice(0, 9)
    } else {
      self.list[self.kind] = []
    }
  },
  methods: {
    over: async function (e) {
      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      let self = this
      if (tag === 'dd') {
        this.kind = dom.getAttribute('kind')
        let keyword = dom.getAttribute('keyword')
        let {
          status,
          data: { count, pois }
        } = await self.$axios.get('/search/resultsByKeywords', {
          params: {
            keyword,
            city: self.$store.state.geo.position.city
          }
        })
        if (status === 200 && count > 0) {
          let r = pois
            .filter(item => item.photos.length)
            .map(item => {
              return {
                title: item.name,
                pos: item.type.split(';')[0],
                price: item.biz_ext.cost || '暂无',
                img: item.photos[0].url,
                url: '//abc.com'
              }
            })
          self.list[self.kind] = r.slice(0, 9)
        } else {
          self.list[self.kind] = []
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
