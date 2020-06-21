<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span='24'>
        <iSelect />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span='24'>
        <hot-city />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span='24'>
        <categroy />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import iSelect from '@/components/changeCity/iSelect'
import hotCity from '@/components/changeCity/hotCity'
import categroy from '@/components/changeCity/categroy'
export default {
  components: {
    iSelect,
    hotCity,
    categroy
  }
}
</script>

<style lang="scss">
</style>
