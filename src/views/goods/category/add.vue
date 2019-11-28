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
        <el-radio-group id="status" v-model="status">
          <el-radio :label="0">禁用</el-radio>
          <el-radio :label="1">启用</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-button type="primary" @click="submit">提交</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'AddGoodCategory',
  data() {
    return {
      imageUrl: '',
      cateName: '',
      summary: '',
      parentId: 0,
      status: 1
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
    submit() {
      const category = {
        'cateName': this.cateName,
        'summary': this.summary,
        'status': this.status,
        'parentId': this.parentId
      }
      this.$request.post('/admin_goods/add_category/', category).then((res) => {
        res = res.data
        console.log(res)
        console.log(res.msg)
        console.log(res.data)
        console.log(res.data.cateName)
        if (res.status === 1) {
          this.$notify({
            title: '成功',
            message: '分类' + res.data.cateName + '添加成功',
            type: 'success'
          })
        }
      })
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
      margin: 0 auto 40px auto;
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
