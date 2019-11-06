<template>
  <div class="add-category-container">
    <h2>添加产品分类</h2>
    <el-row :gutter="20">
      <el-col :span="8">
        <label for="cateName">商品分类名称</label><el-input id="cateName" v-model="cateName" placeholder="请输入分类名称" />
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="20">
      <el-col :span="8">
        <label for="summary">商品分类备注</label><el-input id="summary" v-model="summary" placeholder="请输入分类备注" />
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="20">
      <el-col :span="8">
        <label for="parentId">选择父级分类</label><el-input id="parentId" v-model="parentId" placeholder="请选择父级分类" />
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="20">
      <el-col :span="8">
        <label>启用状态</label>
        <el-radio-group v-model="radio">
          <el-radio :label="1">禁用</el-radio>
          <el-radio :label="2">启用</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <br>
  </div>
</template>

<script>
    import 'element-ui/lib/theme-chalk/index.css'
    export default {
        name: 'Login',
        data() {
            return {
                imageUrl: '',
                cateName: 'a',
                summary: '',
                categoryName: '',
                parentId: 0,
                radio: 2
            }
        },
        watch: {
        },
        created() {
            // window.addEventListener('storage', this.afterQRScan)
        },
        mounted() {
        },
        destroyed() {
            // window.removeEventListener('storage', this.afterQRScan)
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw)
            }
        }
    }
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .login-form {
      position: relative;
      width: 520px;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }

    .thirdparty-button {
      position: absolute;
      right: 0;
      bottom: 6px;
    }

    @media only screen and (max-width: 470px) {
      .thirdparty-button {
        display: none;
      }
    }
  }
</style>
