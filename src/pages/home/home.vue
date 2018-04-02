<template>
  <div class="container">
    <div class="summary">
      <h4>Summary</h4>
      <ul class="row list-unstyled justify-content-around">
        <li class="col-md-3 col-sm-12 border border-white">
          <div>
            <h4>Blocks</h4>
            <h5 >{{ allBlockCount }}</h5>
            <button class="btn btn-outline-light">View</button>
          </div>
        </li>
        <li class="col-md-3 col-sm-12 border border-white">
          <div>
            <h4>transactions</h4>
            <h5 class="last-block-num">{{ allTxCount }}</h5>
            <button class="btn btn-outline-light">View</button>
          </div>
        </li>
        <li class="col-md-3 col-sm-12 border border-white">
          <div>
            <h4>Wallets</h4>
            <h5 class="last-block-num">{{ allAddrCount }}</h5>
            <button class="btn btn-outline-light">View</button>
          </div>
        </li>
        <li class="col-md-3 col-sm-12 border border-white">
          <div>
            <h4>Assets</h4>
            <h5 class="last-block-num">{{ allAddrCount }}</h5>
            <button class="btn btn-outline-light">View</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="tx-table">
      <h4>Last Five TX</h4>
      <table class="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Size</th>
          </tr>
        </thead>
      </table>
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
      'allAddrCount': 0,
      'allAssets': 0,
      'blockTable': []
    }
  },
  created: function () {

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
          self.allAssets = res.result.assetCounts
        }
      })
    },
    getBlockList: function () {

    }
  }
}
</script>

<style >
.container {
  padding-top: 20px;
}
.summary li {
  text-align: center;
  padding: 15px;
  margin-top: 10px;
}
.tx-table {
  margin-top: 6rem;
}
</style>
