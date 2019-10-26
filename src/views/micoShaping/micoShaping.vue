<template>
  <div class="shaping">
      <div class="banner">
          <img src="../../assets/img/shaping.jpg" alt="">
      </div>
      <div class="title_box">
          <span style="color:#9933cc">全部</span>
          <span>精雕面部</span>
          <span>膨体隆鼻</span>
          <span>精细美唇</span>
          <span>精致亮眼</span>
          <span>丰胸隆胸</span>
      </div>
      <div class="main_box" style="margin-left:100px;">
          <div class="main_face">
              <img src="../../assets/img/shaping1.jpg" alt="">
              <div>活力苹果肌</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/shapingeye.jpg" alt="">
              <div>精微双眼皮</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/shapingbi.jpg" alt="">
              <div>膨体隆鼻</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/shapingface.jpg" alt="">
              <div>精致小V脸</div>
          </div>
      </div>
      <div class="main_box"style="margin-left:100px;">
          <div class="main_face">
              <img src="../../assets/img/shapingchun.jpg" alt="">
              <div>水嫩嘟嘟唇</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/shapingbi2.jpg" alt="">
              <div>双曲线俏鼻</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/shapingbi3.jpg" alt="">
              <div>挺立美鼻</div>
          </div>
          <div class="main_face">
              <img src="../../assets/img/shpingbi4.jpg" alt="">
              <div>鼻型设计</div>
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
.shaping{
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
    display: flex;
    flex:1;
    padding:20px 0;
}
.main_face{
    width: 23%;
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