<template>
  <div class="m-iselect">
    <span class="name">按省份选择:</span>
    <el-select v-model="pvalue"
               placeholder="省份">
      <el-option v-for="item in province"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
      </el-option>
    </el-select>

    <el-select v-model="cvalue"
               :disabled="!city.length"
               placeholder="城市">
      <el-option v-for="item in city"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
      </el-option>
    </el-select>
    <span class="name" style="margin-left:50px">直接搜索：</span>
    <el-autocomplete v-model="input"
                     :fetch-suggestions="querySearch"
                     placeholder="请输入城市中文或拼音"
                     @select="handleSelect">
    </el-autocomplete>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      province: [],
      pvalue: '',
      city: [],
      cvalue: '',
      input: '',
      cities: []
    }
  },
  watch: {
    pvalue: async function (newPvalue) {
      let self = this
      let {
        status,
        data: { city }
      } = await self.$axios.get(`/geo/province/${newPvalue}`)
      if (status === 200) {
        self.city = city.map(item => {
          return {
            value: item.id,
            label: item.name
          }
        })
        self.cvalue = ''
      }
    }
  },
  mounted: async function () {
    let self = this
    let {
      status,
      data: { province }
    } = await self.$axios.get(`/geo/province`)
    if (status === 200) {
      self.province = province.map(item => {
        return {
          value: item.id,
          label: item.name
        }
      })
    }
  },
  methods: {
    querySearch: _.debounce(async function (query, cb) {
      let self = this
      if (self.cities.length) {
        cb(self.cities.filter(item => item.value.indexOf(query) > -1))
      } else {
        let {
          status,
          data: { code, city }
        } = await self.$axios.get('/geo/city')
        if (status === 200) {
          self.cities = city.map(item => {
            return {
              value: item.name
            }
          })
          cb(self.cities.filter(item => item.value.indexOf(query) > -1))
        } else {
          cb([])
        }
      }
    }, 200),
    handleSelect () {
      let self = this
      self.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss";
</style>
