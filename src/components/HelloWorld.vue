<template>
  <div class="hello">
      <button class="layui-btn">一个标准的按钮</button>
  </div>
</template>

<script>
// import $ from 'jquery'
// import Neon, { api } from '@cityofzion/neon-js'

export default {
  name: 'HelloWorld',
  mounted () {
    // const intent = api.makeIntent({ NEO: 1 }, 'Af5i2ov36nXsYVPCBYBimwgcJffGMbwneS')
    // console.log(intent)
    // let bal = Neon.get.balance('TestNet', 'AWSEU4BXpjGVdw9ajnFBXh8Rg8cgw9f3Zo')
    // console.log(bal)
    // const config = {
    //   net: 'TestNet',
    //   address: 'AWSEU4BXpjGVdw9ajnFBXh8Rg8cgw9f3Zo',
    //   privateKey: 'd3b826f1ccea2d25ddfb941def677c7526ea6c3485321bf808de54a3906287dd',
    //   intents: intent
    // }
    // console.log(config)
    // api.sendAsset(config).then(config => {
    //   console.log(config)
    //   console.log(1)
    // }).catch(res => {
    //   console.log(config)
    //   console.log(res)
    //   console.log(2)
    // })
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
</style>
