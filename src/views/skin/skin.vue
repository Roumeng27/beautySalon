<template>
  <div class="skin">
      <div class="banner">
          <img src="../../assets/img/shaping.jpg" alt="">
      </div>
      <div class="title_box">
          <span style="color:#9933cc">全部</span>
          <span>除皱美白</span>
          <span>胶原蛋白</span>
          <span>月光脱毛</span>
      </div>
      <div class="main_box" style="margin-left:100px;">
          <div class="main_face">
              <img src="../../assets/img/skin1.jpg" alt="">
              <div>双美II胶原蛋白</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/skin2.jpg" alt="">
              <div>光子嫩肤</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/skin3.jpg" alt="">
              <div>韩式童颜术</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/skin4.jpg" alt="">
              <div>水美人</div>
          </div>
      </div>
      <div class="main_box"style="margin-left:100px;">
          <div class="main_face">
              <img src="../../assets/img/skin5.jpg" alt="">
              <div>光子嫩肤</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/skin6.jpg" alt="">
              <div>魔网瞬时提拉</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/skin7.jpg" alt="">
              <div>唇部脱毛</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/skin8.jpg" alt="">
              <div>全身脱毛</div>
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
.skin{
    width:100%;
    height: 100%;
    background-color: #fff;
}
.banner{
    width:100%;
    height: 279px;
}
.banner img{
    display: inline-block;
    width: 100%;
    height: 100%;
}
.title_box{
    width:100%;
    height: 75px;
    text-align: center;
}
.title_box span{
    margin-left: 30px;
    line-height: 75px;
    font-size: 16px;
    color:#465952; 
}
.main_box{
    width: 100%;
    margin-top:30px;
    margin-bottom: 30px;
    display: flex;
    flex:1;
    padding:20px 0;
}
.main_face{
    width: 24%;
    margin-right: 20px;
   
}
.main_face img{
    display: inline-block;
    width: 250px;
    height: 190px;
}
.main_face div{
    font-size: 16px;
    margin-top:20px;
    margin-left: 70px;
}
</style>