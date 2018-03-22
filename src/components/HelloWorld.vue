<template>
  <div class="hello container">
    <fieldset>
      <legend>转账</legend>
      <div class="layui-field-box">
          <select  name="" id="" v-model="assetType">
            <option value="">请选择</option>
            <option value="NEO">NEO</option>
            <option value="GAS">GAS</option>
          </select>
          <br>
          <input type="text" placeholder="请输入你的私钥" v-model="fromPrivateKey">
          <p>你的地址：{{ fromAddr }}</p>
          <p>你的WIF：{{ fromWif }}</p>
          <p>你的公钥：{{ fromPub }}</p>
          <input type="text" placeholder="请输入转入地址" v-model="toAddr">
          <br>
          <input type="text" placeholder="请输入转账金额" v-model="sendValue">
          <button v-on:click="sendAsset" >转账</button>
      </div>
    </fieldset>
  </div>
</template>

<script>
// import $ from 'jquery'
import Neon, { api } from '@cityofzion/neon-js'

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      'fromPrivateKey': '',
      'fromAddr': '',
      'fromWif': '',
      'fromPub': '',
      'fromBal': 0,
      'toAddr': '',
      'assetType': '',
      'sendValue': 0
    }
  },
  watch: {
    fromPrivateKey: function () {
      const from = Neon.create.account(this.fromPrivateKey)
      this.fromAddr = from.address
      this.fromWif = from.WIF
      this.fromPub = from.publicKey
    }
  },
  created: function () {
  },
  methods: {
    sendAsset: function () {
      const intent = api.makeIntent({ [this.assetType]: this.sendValue }, this.toAddr)
      const config = {
        net: 'TestNet',
        address: this.fromAddr,
        privateKey: this.privateKey,
        intents: intent
      }
      console.log(config)
      api.sendAsset(config).then(config => {
        console.log(config)
        console.log(1)
      }).catch(res => {
        console.log(config)
        console.log(res)
        console.log(2)
      })
    }
  },
  mounted: function () {
    const client = Neon.create.rpcClient('TestNet', '2.3.2')
    console.log(client)
    console.log(client.getBlockCount())
    console.log(client.getRawTransaction('0x0866952b1456f27cf565b524964601081835ae8f53cfb8e1c0f8be89d6cef481'))
    let query = Neon.create.query({method: 'getaccountstate', params: ['AWSEU4BXpjGVdw9ajnFBXh8Rg8cgw9f3Zo']})
    client.execute(query)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->]
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  margin-top: 10px;
}
p {
  margin: 0;
  margin-top: 10px;
}
</style>
