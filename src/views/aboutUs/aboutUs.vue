<template>
    <div class="about_box">
        <div class="banner">
            <img src="../../assets/img/shaping.jpg" alt="">
        </div>
        <div class="title_box">
            <span style="color:#9933cc">走进我们</span>
            <span>在线留言</span>
            <span>加入我们</span>
        </div>
        <div class="main_box">
            <div class="main_tit">
                <div class="main_title">医疗美容（连锁）医院集团</div>
                <div class="main_word">经过十余年的品牌沉淀和稳步发展，在国内至今已拥有连锁医院规模，汇集了众多院长级/主任级骨干医师，参与了国内多项医美专利技术的研发，
                    参编或主编了多部医美学术专著，成就了众多爱美人士的个性美丽定制，是目前国内规模和实力雄厚的专业医学美容医院连锁医院品牌。
                </div>
                <div  class="main_word">
                    历经将近10余年品牌深厚沉淀，至今已拥有全国30多家布局的品牌规模，主要集中在全国各大城市，
不仅包括北京、上海、重庆、天津等直辖市，还包括绝大部分省会城市，其单体医院实力皆同城市居前，是目前国内规模和实力雄厚的专业医疗美容机构。
                </div>
                <div  class="main_word">
                    凝萃多国医美技艺，汇纳国内外设备，以独立私密的医疗环境、专业个性的美丽定制为求美者实现在国内即可享有国内外名师倾力为其打造的品质医美服务。
                </div>
                <div class="main_img">
                    <img src="../../assets/img/aboutus.jpg" alt="">
                </div>
                <div class="main_word" style="text-align:center;color:#9933cc;">
                    地  址：北京市朝阳区
                </div>
                <div class="main_word"  style="text-align:center;color:#9933cc;">
                    电话预约咨询：070-00000000
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
.about_box{
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
    width:100%;
    margin-top:40px;
}
.main_tit{
    width:80%;
    margin:0 auto;
    font-size: 16px;
}
.main_title{
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    color:#9933cc;
    margin-bottom: 20px;
}
.main_word{
    line-height: 1.8;
    margin-bottom: 30px;
}
.main_img{
    width: 100%;
}
.main_img img{
    display: inline-block;
    width: 100%;
    height: 490px;
    margin-bottom: 30px;
}
</style>