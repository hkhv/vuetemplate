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
export default {
  data: function () {
    return {
      'allBlockCount': 0,
      'allTxCount': 0,
      'allAddrCount': 0
    }
  },
  methods: {
    getBlockCount: function () {
      console.log(1)
    },
    getTxCount: function () {
      console.log(1)
    },
    getAddrCount: function () {
      console.log(1)
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
