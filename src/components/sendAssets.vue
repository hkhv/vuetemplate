<template>
  <div class="hello container">
    <div class="form-group row">
      <label class='col-form-label col-sm-2'>转账</label>
      <select class="form-control  col-md-2"  name="" id="" v-model="assetType">
        <option value="">请选择</option>
        <option value="NEO">NEO</option>
        <option value="GAS">GAS</option>
      </select>
    </div>
    <div class="form-group row">
      <label class="col-form-label col-sm-2">私钥</label>
      <input class="form-control col-md-7" type="text" placeholder="请输入你的私钥" v-model="fromPrivateKey">
    </div>
    <div class="collapse" id="fromInfo">
      <div class="row">
          <label class="col-form-label col-sm-2">你的地址</label>
          <div class="col-md-7">
            <input type="text" readonly class="form-control-plaintext" v-bind:value="fromAddr">
          </div>
      </div>
       <div class="row">
          <label class="col-form-label col-sm-2">你的WIF</label>
          <div class="col-md-7">
            <input type="text" readonly class="form-control-plaintext" v-bind:value="fromWif">
          </div>
      </div>
       <div class="row">
          <label class="col-form-label col-sm-2">你的公钥</label>
          <div class="col-md-7">
            <input type="text" readonly class="form-control-plaintext" v-bind:value="fromPub">
          </div>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-form-label col-sm-2">转入地址</label>
      <input class="form-control col-md-7" type="text" placeholder="请输入转入地址" v-model="toAddr">
    </div>
    <div class="form-group row">
      <label class="col-form-label col-sm-2">数目</label>
      <input class="form-control col-md-7" type="text" placeholder="请输入转入金额" v-model="sendValue">
    </div>
    <button v-on:click="sendAsset" class="btn btn-primary btn-lg btn-block">转账</button>
  </div>
</template>

<script>
import $ from 'jquery'
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
      $('#fromInfo').collapse('show')
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
      api.sendAsset(config).then(config => {
      }).catch(res => {
      })
    }
  },
  mounted: function () {

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
  /* margin-top: 10px; */
}
p {
  /* margin: 0; */
  /* margin-top: 10px; */
}
</style>
