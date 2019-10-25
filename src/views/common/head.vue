<template>
  <div class="head_tab">
      <div class="head_box">
          <div class="head_left">
              <img src="../../assets/img/head_logo.png" alt="">
              <span style="font-size:34px;color:#9933cc;">整形医院</span>
          </div>
          <div class="head_right">
              <div>
                  <img src="../../assets/img/location.png" alt="">
                  <span>北京市朝阳区</span>
              </div>
              <div class="head_tel">
                  <img src="../../assets/img/tel.png" alt="">
                  <div>
                      <div>070-0000000</div>
                      <div>emait@email.mt</div>
                  </div>
              </div>
              <div class="head_time">
                  <img src="../../assets/img/canlendar.png" alt="">
                  <div>
                      <div>营业：9:00</div>
                      <div>休业：18:00</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.head_tab{
    width: 100%;
    height: 106px;
}
.head_box{
    width:100%;
    height: 100%;
    background-color: #ffffff;
}
.head_left{
     height: 106px;
    line-height: 132px;
    float: left;
    margin-left: 5%;
}
.head_right{
    float: right;
    display: flex;
    color:#9933cc;
    margin-top:40px;
    margin-right: 5%;
}
.head_right img{
    margin-right: 10px;
}
.head_tel{
    display: flex;
    margin-right: 20px;
    margin-left: 20px;
}
.head_time{
    display: flex;
}
</style>