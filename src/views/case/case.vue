<template>
  <div class="case">
      <div class="banner">
          <img src="../../assets/img/shaping.jpg" alt="">
      </div>
      <div class="title_box">
          <span style="color:#9933cc">微整案例</span>
          <span>皮肤案例</span>
      </div>
      <div class="main_box">
          <div class="main_face">
              <img src="../../assets/img/case1.jpg" alt="">
              <div>面部精雕+眼综合</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/case2.jpg" alt="">
              <div>下颌微整容</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/case3.jpg" alt="">
              <div>脸部微整容</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/case4.jpg" alt="">
              <div>鼻梁微整容</div>
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
.case{
    width:100%;
    height: 100%;
    background: #fff;
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
    display: flex;
    flex:1;
    background-color: #fff;
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