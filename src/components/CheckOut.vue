<template>
  <div class="container">
    <c-header :cart="cart"></c-header>
    <main>
      <div class="row">
        <div class="col-8 offset-2">
          <div class="form-group form-row justify-content-center">
            <span class="h5">请输入结账信息</span>
          </div>
          <div class="form-group form-row">
            <label for="firstName" class="col-2 col-form-label text-right">名:</label>
            <div class="col-4">
              <input name="firstName" v-model.trim="order.firstName" class="form-control" />
            </div>
            <label for="lastName" class="col-2 col-form-label text-right">姓:</label>
            <div class="col-4">
              <input name="lastName" v-model.trim="order.lastName" class="form-control" />
            </div>
          </div>
          <div class="form-group form-row">
            <label for="address" class="col-2 col-form-label text-right">详细地址:</label>
            <div class="col-4">
              <input name="address" v-model.trim="order.address" class="form-control" />
            </div>
            <label for="city" class="col-2 col-form-label text-right">城市:</label>
            <div class="col-4">
              <input name="city" v-model.trim="order.city" class="form-control" />
            </div>
          </div>
          <div class="form-group form-row">
            <label for="zip" class="col-2 col-form-label text-right">邮政编码:</label>
            <div class="col-4">
              <input name="zip" v-model.number="order.zip" class="form-control" type="number" />
            </div>
            <label for="state" class="col-2 col-form-label text-right">省份:</label>
            <div class="col-4">
              <select name="state" v-model="order.state" class="form-control">
                <option disabled value="">省份:</option>
                <option v-for="(state, key) in states" v-bind:value="state">
                  {{state}}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group form-row align-items-center">
            <div class="col-4 offset-2">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="gift" value="true"
                       v-bind:true-value="order.sendGift" v-bind:false-value="order.dontSendGift"
                       v-model="order.gift">
                <label class="form-check-label" for="gift">作为礼物发送?</label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="home" v-bind:value="order.home"
                       v-model="order.method" checked>
                <label class="form-check-label" for="home">家庭地址</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="business"
                       v-bind:value="order.business" v-model="order.method">
                <label class="form-check-label" for="business">公司地址</label>
              </div>
            </div>
          </div>
          <div class="form-group form-row justify-content-center">
            <button type="submit" class="btn btn-primary submit" v-on:click="submitForm">发货</button>
          </div>
          <div class="form-group form-row">
            <div class="col-12 text-center">{{ cart }}</div>
            <div class="col-2 text-right">名:</div><div class="col-4 text-left">{{order.firstName}}</div>
            <div class="col-2 text-right">姓:</div><div class="col-4 text-left">{{order.lastName}}</div>
            <div class="col-2 text-right">详细地址:</div><div class="col-4 text-left">{{order.address}}</div>
            <div class="col-2 text-right">城市:</div><div class="col-4 text-left">{{order.city}}</div>
            <div class="col-2 text-right">邮政编码:</div><div class="col-4 text-left">{{order.zip}}</div>
            <div class="col-2 text-right">省份:</div><div class="col-4 text-left">{{order.state}}</div>
            <div class="col-2 text-right">地址类型:</div><div class="col-4 text-left">{{order.method}}</div>
            <div class="col-2 text-right">礼物:</div><div class="col-4 text-left">{{order.gift}}</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import CHeader from './Header.vue';
export default {
  name: 'CheckOut',
  // props: ['cart'],
  data() {
    return {
      states: {
        LN: '辽宁省',
        JL: '吉林省',
        HLJ: '黑龙江省',
        HB: '河北省',
        SD: '山东省'
      },
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: '家庭地址',
        business: '公司地址',
        home: '家庭地址',
        gift: '作为礼物发送',
        sendGift: '作为礼物发送',
        dontSendGift: '不作为礼物发送'
      }

    }
  },
  components: {
    CHeader
  },
  methods: {
    submitForm() {
      alert(this.cart + ' ' + '订购成功!');
    }
  },
}
</script>
<style scoped>
</style>
