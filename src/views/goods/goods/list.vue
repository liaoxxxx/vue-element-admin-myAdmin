<template>
  <div class="login-container">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        sortable
        type="selection"
        prop="id"
        width="55"
      />
      <el-table-column
        sortable
        label="id"
        prop="id"
        width="55"
      />
      <el-table-column
        sortable
        label="商品名称"
        prop="name"
        width="160"
      />
      <el-table-column
        sortable
        label="商品标题"
        width="240"
        prop="title"
      />
      <el-table-column
        sortable
        label="入货价(￥)"
        width="100"
        prop="inputPrice"
      />
      <el-table-column
        sortable
        label="标价(￥)"
        width="100"
        prop="showPrice"
      />
      <el-table-column
        sortable
        label="底价(￥)"
        width="100"
        prop="basePrice"
      />
      <el-table-column
        sortable
        label="描述"
        width="240"
        prop="summary"
      />
      <el-table-column
        sortable
        label="状态"
        width="120"
        prop="status"
      />
      <el-table-column
        sortable
        label="创建日期"
        width="150"
        prop="createdAt"
      />
      <el-table-column
        sortable
        label="修改日期"
        width="150"
        prop="updatedAt"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="180"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click.native.prevent="delete(scope.$index, tableData)"
          >
            删除
          </el-button>
          <el-button type="text" size="small" @click="edit(scope.row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      tableData: [],
      currentPage: 1
    }
  },
  watch: {
  },
  created() {
    console.log(this.$request.defaults.headers)
    this.$request.get('/admin_goods/goods_list').then((res) => {
      res = res.data
      console.log(res)
      if (res.status === 1) {
        this.tableData = res.data
        for (let i = 0; i < this.tableData.length; i++) {
          const createdDate = new Date(this.tableData[i].createdAt)
          const updatedDate = new Date(this.tableData[i].updatedAt)
          this.tableData[i].createdAt = createdDate.getFullYear() + '-' + createdDate.getUTCMonth() + '-' + createdDate.getUTCDay() + ' ' + createdDate.getUTCHours() + ':' + createdDate.getUTCMinutes() + ':' + createdDate.getUTCSeconds()
          this.tableData[i].updatedAt = updatedDate.getFullYear() + '-' + updatedDate.getUTCMonth() + '-' + updatedDate.getUTCDay() + ' ' + updatedDate.getUTCHours() + ':' + updatedDate.getUTCMinutes() + ':' + updatedDate.getUTCSeconds()
        }
      }
    })
  },
  mounted() {
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    edit(id) {
      this.$router.push({ path: '/goods/goods/edit', query: { id: id }})
    },
    delete(id) {
      console.log(id)
    },
    handleSelectionChange() {
      console.log('aaa')
    },
    currentPage4() {
      console.log('aaa')
    },
    handleSizeChange() {
      console.log('aaa')
    },
    handleCurrentChange() {
      console.log('aaa')
    }

  }
}
</script>

