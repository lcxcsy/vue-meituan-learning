<template>
  <div :id="id" :style="{width:width+'px',height:height+'px',margin:'34px auto'}" class="m-map" />
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    point: {
      type: Array,
      default () {
        return [116.46, 39.92]
      }
    }
  },
  data () {
    return {
      id: `map`,
      key: 'e55ae276212597319b04ef74778174a2'
    }
  },
  watch: {
    point: function (val, old) {
      this.map.setCenter(val)
      this.marker.setPosition(val)
    }
  },
  mounted () {
    let self = this
    // 动态id方便组件复用
    self.id = `map${Math.random()
      .toString()
      .slice(4, 6)}`
    // 异步加载指的是为 JS API 指定加载的回调函数，在 JS API 的主体资源加载完毕之后，将自动调用该回调函数。回调函数应该声明在 JS API 入口文件引用之前，异步加载可以减少对其他脚本执行的阻塞。下面为异步加载的Demo
    // window.onLoad  = function(){
    //       var map = new AMap.Map('container');
    // }
    // var url = 'https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值&callback=onLoad';
    // var jsApi = doc.createElement('script');
    // jsApi.charset = 'utf-8';
    // jsApi.src = url;
    // document.head.appendChild(jsApi);
    window.onMapLoad = () => {
      // 实例化一个地图对象，self.id为DOM节点
      let map = new window.AMap.Map(self.id, {
        resizeEnable: true,
        zoom: 13,
        center: self.point
      })
      self.map = map
      // 异步加载指的是在JS API加载完成之后，在需要使用到某个插件的时候，通过AMap.plugin方法按需引入插件，在plugin回调之后使用插件功能
      window.AMap.plugin('AMap.ToolBar', () => {
        let toolbar = new window.AMap.ToolBar()
        map.addControl(toolbar)
        let marker = new window.AMap.Marker({
          icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
          position: self.point
        })
        self.marker = marker
        marker.setMap(map)
      })
    }
    const url = `https://webapi.amap.com/maps?v=1.4.10&key=${self.key}&callback=onmaploaded`
    let jsApi = document.createElement('script')
    jsApi.charset = 'utf-8'
    jsApi.src = url
    document.head.appendChild(jsApi)
  }
}
</script>
