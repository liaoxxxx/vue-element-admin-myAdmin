<template>
  <div class="login-container">
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content bg-purple" /></el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <h1 class="title">{{ title }}</h1>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content bg-purple" /></el-col>
    </el-row>
    <label>
      <input v-model="message">
    </label>
  </div>
</template>
<style>
  .title{
    text-align: center;
  }
</style>
<script>
export default {
  name: 'List',
  data() {
    return {
      message: '初始信息 ',
      title: '聊天室'
    }
  },
  watch: {
  },
  created() {
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    let websocket = null
    if ('WebSocket' in window) {
      websocket = new WebSocket('ws://127.0.0.1:8081/websocket/999')
      console.log(websocket)
    } else {
      alert('Not support websocket')
    }
    // 连接成功建立的回调方法
    websocket.onopen = function(event) {
      console.log(event.data)
      websocket.send('客户端连接成功')
    }

    // 接收到消息的回调方法
    websocket.onmessage = function(event) {
      console.log(event.data)
    }

    // 连接关闭的回调方法
    websocket.onclose = function(event) {
      console.log(event.data)
    }

    // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function() {
      console.log(event)
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
  }
}
</script>

