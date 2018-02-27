<template>
  <div id="good-detail">
      <div class="good-detail flex">
          <div class="good-pics">
              <img src="../assets/images/1.jpg" alt="">
          </div>
          <div class="detail-r flex-con">
              <p class="detail-tit">Apple 苹果</p>
              <div class="detail-scale flex">
                  <div class="detail-l-tit">描述：</div>
                  <div class="detail-r-info flex-con">
                      <span class="detail-r-i">【白条】Apple iPhone 8 Plus (A1864) 64GB 银色 移动联通电信4G手机</span>
                  </div>
              </div>
              <div class="detail-scale flex">
                  <div class="detail-l-tit">价格：</div>
                  <div class="detail-r-info flex-con">
                      <span class="detail-r-i color-red">&yen;{{price}}</span>
                  </div>
              </div>
              <div class="detail-scale flex detail-mul">
                  <div class="detail-l-tit">外观：</div>
                  <div class="detail-r-info flex-con">
                      <span class="good-color neicun-active" @click="changeColor">金色</span>
                      <span class="good-color">黑色</span>
                      <span class="good-color">灰色</span>
                  </div>
              </div>
              <div class="detail-scale flex detail-mul">
                  <div class="detail-l-tit">内存容量：</div>
                  <div class="detail-r-info flex-con">
                      <span class="good-color" :class="{'neicun-active':neicun == 0}" @click="changePrice(0)">8GB</span>
                      <span class="good-color" :class="{'neicun-active':neicun == 1}" @click="changePrice(1)">16GB</span>
                      <span class="good-color" :class="{'neicun-active':neicun == 2}" @click="changePrice(2)">32GB</span>
                  </div>
              </div>

              <div class="add-btn" @click="addToCart">
                  <a href="javascript:void(0)">加入购物车</a>
              </div>
              
          </div>
      </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      neicun: 0
    };
  },
  created() {
    // 初始化进来触发vuex，默认选中一个内存规格
    this.changePrice(0);
  },
  computed: {
    ...mapGetters({
      price: "getPrice"
    })
  },
  methods: {
    changePrice(type) {
      this.neicun = type;
      // 以载荷方式提交
      this.$store.dispatch("changePrice", {
        type: type
      });
    },
    // 选择商品颜色，切换左侧的图片
    changeColor() {},
    addToCart() {
      this.$store.dispatch("addToCart", {
        goodId: 10
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#good-detail {
  .good-pics {
    padding: 20px;
    width: 40%;
    max-width: 560px;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
    }
  }

  .detail-r {
    padding-top: 20px;
  }

  .detail-tit {
    margin-bottom: 35px;
    font-size: 14px;
    color: #333;
    font-weight: bold;
  }

  .detail-scale {
    margin-bottom: 20px;

    .color-red {
      color: red;
    }

    .detail-r-info {
      padding-left: 4px;
    }

    .detail-r-i {
      line-height: 20px;
    }

    .detail-l-tit {
      text-align: right;
      width: 60px;
      color: #666;
    }

    .good-color {
      margin-right: 4px;
      padding: 4px 13px;
      border: 1px solid #bfbfbf;
      border-radius: 4px;
    }

    .neicun-active {
      border: 1px solid #f23030;
      color: #f23030;
    }
  }

  .detail-mul {
    margin-bottom: 30px;
  }

  .add-btn {
    a {
      display: block;
      width: 160px;
      height: 40px;
      line-height: 40px;
      background: #ffb03f;
      text-align: center;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>


