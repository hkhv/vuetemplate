<template>
  <div class="container">
    <div class="summary">
      <h4>Summary</h4>
      <ul class="row list-unstyled justify-content-around">
        <li class="col-md-3 col-sm-12 bg-light">
          <div>
            <h4>Last block</h4>
            <h5 class="last-block-num">{{ allBlockCount }}</h5>
            <button class="btn btn-outline-primary">View</button>
          </div>
        </li>
        <li class="col-md-3 col-sm-12 bg-light">
          <div>
            <h4>Total transactions</h4>
            <h5 class="last-block-num">{{ allTxCount }}</h5>
            <button class="btn btn-outline-primary">View</button>
          </div>
        </li>
        <li class="col-md-3 col-sm-12 bg-light">
          <div>
            <h4>Wallet address</h4>
            <h5 class="last-block-num">{{ allAddrCount }}</h5>
            <button class="btn btn-outline-primary">View</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="last-tx">
      <h4>Last Five TX</h4>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data: function () {
    return {
      'allBlockCount': 0,
      'allTxCount': 0,
      'allAddrCount': 0
    }
  },
  created: function () {
    this.getSummary()
  },
  methods: {
    getSummary: function () {
      let self = this
      $.ajax({
        url: 'http://192.168.1.39:8080/api/index',
        type: 'post',
        async: false,
        data: JSON.stringify({
          'jsonrpc': '2.0',
          'method': 'queryAllCounts',
          'params': [],
          'id': 1
        }),
        success: function (res) {
          self.allBlockCount = res.result.blockCounts
          self.allTxCount = res.result.txCounts
          self.allAddrCount = res.result.addressCounts
        }
      })
    }
  }
}
</script>

<style>
.container {
  padding-top: 20px;
}
.summary li {
  text-align: center;
  padding: 15px;
  margin-top: 10px;
}
</style>
