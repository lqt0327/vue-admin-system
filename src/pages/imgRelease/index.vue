<template>
  <el-upload
    class="upload-demo"
    drag
    action="https://two.luoqintai.cn/upload"
    :before-upload="beforeUpload"
    multiple
    :on-success="success"
    list-type="picture"
    :on-preview="preview"
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <template #tip>
      <div class="el-upload__tip">
        只能上传 jpg/png 文件，且不超过 500kb
      </div>
    </template>
  </el-upload>
</template>

<script>
import { ElMessage } from 'element-plus'
import { copyHandle } from '@/utils/tools'
export default {
  components: {
  },
  methods: {
    /**
     * @description 图片上传前 格式效验
     */
    beforeUpload(file) {
      if(file.size > 500*1024) {
        ElMessage('图片大小不能超过500kb')
        return false
      }
    },
    // success(args) {
    //   console.log(args,'????')
    // },
    preview(args) {
      copyHandle(args.response.url)
    },
  }
};
</script>

<style lang="sass" scoped>

</style>