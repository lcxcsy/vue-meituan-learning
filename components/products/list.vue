<template>
  <div class="m-products-list">
    <dl>
      <dd v-for="item in nav"
          :key="item.name"
          :class="[item.name, item.acitve?'s-nav-active':'']"
          @click="navSelect(item.name)">{{ item.txt }}</dd>
    </dl>
    <ul>
      <Item v-for="(item,idx) in list"
            :key="idx"
            :meta="item"
            @curLocation="curLocation" />
    </ul>
  </div>
</template>

<script>
import Item from './product.vue'
export default {
  components: {
    Item
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      nav: [
        {
          name: 's-default',
          txt: '智能排序',
          acitve: true
        },
        {
          name: 's-price',
          txt: '价格最低',
          active: false
        },
        {
          name: 's-visit',
          txt: '人气最高',
          active: false
        },
        {
          name: 's-comment',
          txt: '评价最高',
          active: false
        }
      ]
    }
  },
  methods: {
    navSelect (name) {
      let self = this
      if (name === 's-price') {
        self.nav[0].acitve = false
        self.nav[1].acitve = true
        self.nav[2].acitve = false
        self.nav[3].acitve = false
        let items = self.list
        items.sort((a, b) => a.price - b.price)
        self.list = items
      } else if (name === 's-default') {
        self.nav[0].acitve = true
        self.nav[1].acitve = false
        self.nav[2].acitve = false
        self.nav[3].acitve = false
        let items = self.list
        items.sort((a, b) => b.price - a.price)
        self.list = items
      } else if (name === 's-visit') {
        self.nav[0].acitve = false
        self.nav[1].acitve = false
        self.nav[2].acitve = true
        self.nav[3].acitve = false
        let items = self.list
        items.sort((a, b) => b.comment - a.comment)
        self.list = items
      } else if (name === 's-comment') {
        self.nav[0].acitve = false
        self.nav[1].acitve = false
        self.nav[2].acitve = false
        self.nav[3].acitve = true
        let items = self.list
        items.sort((a, b) => b.rate - a.rate)
        self.list = items
      }
    },
    curLocation (location) {
      let self = this
      self.$emit('newPoint', location)
    }
  }
}
</script>
