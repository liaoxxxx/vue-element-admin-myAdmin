<template>
  <div class="add-category-container">
    <h2>添加产品</h2>
    <div v-show="showInfoGroup" id="goods-info-group">
      <h3>商品摘要</h3>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="Name">商品名称:</label><el-input id="Name" v-model="name" placeholder="请输入商品名称" />
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="title">商品标题:</label><el-input id="title" v-model="title" placeholder="请输入商品名称" />
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="subTitle">商品副标题:</label><el-input id="subTitle" v-model="subTitle" placeholder="请输入商品备注" />
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="summary">商品备注:</label><el-input id="summary" v-model="summary" placeholder="请输入商品备注" />
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="cateId">选择商品分类:</label><el-input id="cateId" v-model="cateId" placeholder="请选择商品分类" />
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <label>选择缩略图</label>
          <el-upload
            :action="thumbPostUrl"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-change="uploadChange"
            :multiple="uploadMultiple"
            name="file"
          >
            <i class="el-icon-plus" />
          </el-upload>
        </el-col>
      </el-row>
      <br>
    </div>
    <div v-show="!showInfoGroup" id="goods-price-group">
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="basePrice">商品底价:</label><el-input id="basePrice" v-model="basePrice" placeholder="请输入商品备注" />
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="showPrice">商品标价:</label><el-input id="showPrice" v-model="showPrice" placeholder="请输入商品备注" />
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <label for="inputPrice">商品成本:</label><el-input id="inputPrice" v-model="inputPrice" placeholder="请输入商品备注" />
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
      <el-col v-show="!showInfoGroup" :span="2">
        <el-button type="primary" @click="switchInputGroups">上一步</el-button>
      </el-col>
      <el-col v-show="showInfoGroup" :span="2">
        <el-button type="primary" @click="switchInputGroups">下一步</el-button>
      </el-col>
      <el-col v-show="!showInfoGroup" :span="8">
        <el-button type="primary" @click="submit">提交</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'AddGoods',
  data() {
    return {
      showInfoGroup: true,
      dialogImageUrl: '',
      dialogVisible: false,
      name: '',
      cateId: '',
      summary: '',
      title: '',
      subTitle: '',
      status: 1,
      basePrice: 0,
      inputPrice: 0,
      showPrice: 0,
      uploadFileList: [],
      uploadMultiple: true,
      thumbPostUrl: 'http://localhost:8081/upload/singleImage'
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
    switchInputGroups() {
      if (this.showInfoGroup === true) {
        this.showInfoGroup = false
      } else {
        this.showInfoGroup = true
      }
    },
    submit() {
      // eslint-disable-next-line no-unused-vars
      const images = []
      for (let i = 0; i < this.uploadFileList.length; i++) {
        images[i] = this.uploadFileList[i].response.data.path
      }
      console.log(images)
      // eslint-disable-next-line no-unreachable
      const category = {
        'name': this.name,
        'cateId': this.cateId,
        'summary': this.summary,
        'title': this.title,
        'subTitle': this.subTitle,
        'images': images,
        'status': this.status,
        'basePrice': this.basePrice,
        'inputPrice': this.inputPrice,
        'showPrice': this.showPrice
      }
      this.$request.post('/admin_goods/add_goods/', category).then((res) => {
        res = res.data
        console.log(res)
        console.log(res.msg)
        console.log(res.data)
        if (res.status === 1) {
          this.$notify({
            title: '成功',
            message: res.message,
            type: 'success'
          })
        }
      })
    },
    handleRemove(file, fileList) {
      console.log(fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    uploadChange(file, fileList) {
      console.log(fileList)
      this.uploadFileList = fileList
      console.log(this.uploadFileList)
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
