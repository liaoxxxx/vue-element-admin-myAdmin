<template>
  <div class="add-category-container">
    <h2>添加产品</h2>
    <div v-show="showInfoGroup" id="goods-info-group">
      <h3>商品摘要</h3>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="Name">商品名称</label><el-input id="Name" v-model="Name" placeholder="请输入商品名称" />
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="title">商品标题</label><el-input id="title" v-model="title" placeholder="请输入商品名称" />
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="subTitle">商品副标题</label><el-input id="subTitle" v-model="subTitle" placeholder="请输入商品备注" />
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="summary">商品备注</label><el-input id="summary" v-model="summary" placeholder="请输入商品备注" />
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="parentId">选择商品分类</label><el-input id="parentId" v-model="parentId" placeholder="请选择商品分类" />
        </el-col>
      </el-row>
      <br>
    </div>
    <div v-show="showPriceGroup" id="goods-price-group">
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="basePrice">商品底价</label><el-input id="basePrice" v-model="summary" placeholder="请输入商品备注" />
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="showPrice">商品标价</label><el-input id="showPrice" v-model="showPrice" placeholder="请输入商品备注" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="inputPrice">商品成本</label><el-input id="inputPrice" v-model="inputPrice" placeholder="请输入商品备注" />
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <label>上架状态</label>
          <el-radio-group id="status" v-model="status">
            <el-radio :label="0">下架</el-radio>
            <el-radio :label="1">上架</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <br>
    </div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-button type="primary" @click="submit">提交</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      showInfoGroup: true,
      showPriceGroup: false,
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
        'parent': this.parentId
      }
      this.$request.post('/admin_goods/add_category/', category).then((res) => {
        res = res.data
        console.log(res)
        console.log(res.msg)
        console.log(res.data)
        console.log(res.data.cateName)

        if (res.msg === 'success') {
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
