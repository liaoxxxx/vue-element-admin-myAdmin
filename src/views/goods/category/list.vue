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
        width="55"
      />
      <el-table-column
        sortable
        label="分类名称"
        prop="cateName"
        width="120"
      >
      </el-table-column>
      <el-table-column
        sortable
        label="描述"
        width="120"
        prop="summary"
      >
      </el-table-column>
      <el-table-column
        sortable
        label="创建日期"
        width="150"
        prop="created_at"
      >
      </el-table-column>
      <el-table-column
        sortable
        label="修改日期"
        width="150"
        prop="updated_at"
      >
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      tableData: []
    }
  },
  watch: {
  },
  created() {
    this.$request.get('/admin_goods/get_all_category').then((res) => {
      res = res.data
      if (res.success === 'success') {
        console.log('aaaa')
        this.tableData = res.data
        console.log(this.tableData)
        console.log(typeof this.tableData)
      }
    })
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
        if (res.msg === 'success') {
          this.tableData = res.data
          console.log(res.data)
        }
      })
    }
  }
}
</script>

