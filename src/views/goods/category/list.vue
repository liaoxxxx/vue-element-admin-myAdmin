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
        label="日期"
        width="120"
      >
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        sortable
        label="日期"
        width="120"
      >
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        sortable
        label="日期"
        width="120"
      >
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        sortable
        prop="name"
        label="姓名"
        width="120"
      />
      <el-table-column
        sortable
        prop="address"
        label="地址"
        show-overflow-tooltip
      />
    </el-table>
  </div>
</template>

<script>
</script>

