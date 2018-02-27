<template>
  <div id="cart" class="flex flex-wrap">
      <div class="cart-content flex-con">
        <div class="content-item flex" v-for="(items, index) in cartNum" :key="index">
          <div class="select-circle flex flex-vcenter">
            <span class="circle" :class="{'circle-act':selectedItem.indexOf(index) != -1}" @click="checkItem(index,$event)">
              <i v-show="selectedItem.indexOf(index) != -1"></i>
            </span>
          </div>
          <div class="good-pic">
            <img src="../assets/images/1.jpg" alt="">
          </div>
          <div class="good-desc">
            <p class="good-name">iphone 8</p>
            <p class="good-art">【白条】Apple iPhone 8 Plus (A1864) 64GB 银色 移动联通电信4G手机</p>
          </div>
          <div class="good-price">&yen;8000.00</div>
          <div class="good-num flex flex-vcenter">
            <a href="javascript:void(0)" class="g-num align-center" @click="minus(index)">-</a>
            <span class="num-input">
              <input type="text" :value="num[index]" class="align-center" @blur="checkInput(index, $event)">
            </span>
            <a href="javascript:void(0)" class="g-num align-center" @click="plus(index)">+</a>
          </div>
          <div class="good-opt flex-con align-r">
            <a href="javascript:void(0)" class="del" @click="del(index,selectedItem.indexOf(index) != -1)">删除</a>
          </div>
        </div>
      </div>
      <div class="cart-bot flex">
          <div class="select-all flex flex-vcenter" @click="switchAllItem">
            <span class="circle">
              <i v-show="selectedNum == cartNum"></i>  
            </span>全选
          </div>
          <div class="all-money flex flex-vcenter">总金额：<span>&yen;{{totalMoney}}</span></div>
          <div class="flex-con buy-btn align-r">
            <span class="buy-btn-opt align-center">确认购买</span>
          </div>
      </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedItem: [],
      num: []
    };
  },
  created() {
    for (let index = 0; index < this.cartNum; index++) {
      const element = this.cartNum[index];

      this.num.push(1);
    }
  },
  computed: {
    ...mapGetters({
      totalMoney: "getMoney",
      cartNum: "getCartNum",
      selectedNum: "getSelectedNum"
    })
  },
  methods: {
    // 选择购物车商品
    checkItem(index, event) {
      if (event.currentTarget.className == "circle") {
        // 选中
        this.selectedItem.push(index);

        this.$store.dispatch("checkItem", {
          num: this.num[index]
        });
      } else {
        // 取消选中
        var index = this.selectedItem.indexOf(index);
        this.selectedItem.splice(index, 1);

        this.$store.dispatch("checkoutItem", {
          num: this.num[index]
        });
      }
    },
    switchAllItem() {
      if (this.selectedNum === this.cartNum) {
        // 取消全部选中
        this.selectedItem = [];
        this.$store.dispatch("selectNo");
      } else {
        // 全部选中
        for (let index = 0; index < this.cartNum; index++) {
          this.selectedItem.push(index);
        }
        this.$store.dispatch("selectAll");
      }
    },
    // 减少数量
    minus(index) {
      if (this.num[index] < 2) return;

      var num = this.num[index];
      this.$set(this.num, index, num - 1);
    },
    // 增加数量
    plus(index) {
      if (this.num[index] > 98) return;

      var num = this.num[index];
      this.$set(this.num, index, num + 1);
    },
    // 在数量input中失焦时检查数量是否有效
    checkInput(index, event) {
      var value = event.currentTarget.value;
      if (!/^[1-9]\d$/.test(value)) return "";

      this.$set(this.num, index, parseInt(value));
    },
    del(index, ifSelected) {
      this.$store.dispatch("moveToCart", {
        ifSelected: ifSelected
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#cart {
  $inline-block: inline-block;
  @mixin font14 ($fontSize: 14px) {
    font-size: $fontSize;
  }
  @mixin img-scale() {
    display: block;
    width: 100%;
    height: auto;
  }
  @mixin cursor-pointer {
    cursor: pointer;
  }

  width: 100%;
  height: 100%;

  .circle {
    position: relative;
    margin-right: 6px;
    display: $inline-block;
    width: 16px;
    height: 16px;
    border-radius: 90px;
    border: 1px solid #aaa;
    @include cursor-pointer;

    i {
      position: absolute;
      top: 4px;
      left: 4px;
      width: 6px;
      height: 6px;
      border-radius: 90px;
      background: red;
    }
  }

  .circle-act {
    border-color: red;
  }

  .cart-bot {
    border-top: 1px solid #ededed;
  }

  .select-all {
    padding: 0 5px 0 14px;
    @include cursor-pointer;
  }

  .all-money {
    padding: 0 12px;
    span {
      color: red;
      font-weight: bold;
    }
  }

  .buy-btn-opt {
    display: $inline-block;
    max-width: 100%;
    width: 200px;
    height: 44px;
    line-height: 44px;
    background: #ffb03f;
    color: #fff;
    @include cursor-pointer;
    @include font14;
  }

  .content-item {
    padding-left: 10px;
    border-bottom: 1px solid #ededed;
  }
  .select-circle {
    padding: 5px;
  }

  .good-pic {
    padding: 10px;
    width: 150px;
    height: 150px;

    img {
      @include img-scale;
    }
  }

  .good-desc {
    width: 30%;
    padding-top: 10px;

    .good-name {
      margin-bottom: 10px;
      @include font14;
      font-weight: bold;
    }

    .good-art {
      padding-right: 10px;
      line-height: 20px;
    }
  }

  .good-price {
    margin-right: 14px;
    height: 150px;
    line-height: 150px;
  }

  .good-num {
    margin-right: 10px;
  }

  .g-num {
    display: $inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #cacbcb;
  }

  .num-input {
    display: $inline-block;
    width: 46px;
    height: 20px;
    input {
      width: 100%;
      height: 100%;
      border-left: none;
      border-right: none;
      border-top: 1px solid #cacbcb;
      border-bottom: 1px solid #cacbcb;
    }
  }

  .good-opt {
    padding: 10px;
    height: 150px;
    line-height: 150px;
  }
}
</style>


