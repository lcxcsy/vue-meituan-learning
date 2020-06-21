<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="leave">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in $store.state.home.menu"
        :key="index"
        @mouseenter="enter"
      >
        <i :class="item.type" />{{ item.name }}<span class="arrow" />
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseleave="sout" @mouseenter="sover">
      <template v-for="(item, index) in curdetail.child">
        <h4 :key="index">{{ item.title }}</h4>
        <span v-for="v in item.child" :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind: ''
      // menu: [
      //   {
      //     type: 'food',
      //     name: '美食',
      //     child: [
      //       {
      //         title: '酒店星级',
      //         child: ['代金券', '舒适/三星', '高档/四星', '豪华/五星']
      //       }
      //     ]
      //   },
      //   {
      //     type: 'takeout',
      //     name: '外卖',
      //     child: [
      //       {
      //         title: '外卖',
      //         child: ['美团外卖']
      //       }
      //     ]
      //   }
      // ]
    }
  },
  computed: {
    curdetail () {
      return this.$store.state.home.menu.filter(
        item => item.type === this.kind
      )[0]
    }
  },
  methods: {
    leave () {
      let self = this
      self._timer = setTimeout(() => {
        self.kind = ''
      }, 150)
    },
    enter (e) {
      this.kind = e.target.querySelector('i').className
    },
    sover () {
      clearTimeout(this._timer)
    },
    sout () {
      this.kind = ''
    }
  }
}
</script>

<style lang="scss"></style>
