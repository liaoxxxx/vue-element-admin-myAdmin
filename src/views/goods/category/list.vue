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
        label="分类名称"
        prop="cateName"
        width="160"
      />
      <el-table-column
        sortable
        label="状态"
        width="120"
        prop="status"
      />
      <el-table-column
        sortable
        label="描述"
        width="240"
        prop="summary"
      />
      <el-table-column
        sortable
        label="创建日期"
        width="150"
        prop="createdAtStr"
      />
      <el-table-column
        sortable
        label="修改日期"
        width="150"
        prop="updateAtStr"
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
    this.$request.get('/admin_goods/get_all_category').then((res) => {
      res = res.data
      console.log(res)
      if (res.status === 1) {
        this.tableData = res.data
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
      this.$router.push({ path: '/goods/category/edit', query: { id: id }})
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

