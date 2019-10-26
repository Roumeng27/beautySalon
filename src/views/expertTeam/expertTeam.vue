<template>
    <div class="skin">
        <div class="banner">
            <img src="../../assets/img/shaping.jpg" alt="">
        </div>
        <div class="title_box">
            <span style="color:#9933cc">专家团队</span>
            <span>著名整容专家</span>
            <span>著名微整专家</span>
            <span>资深微整专家</span>
            <span>著名微调专家</span>
            <span>皮肤管理专家</span>
        </div>
        <div class="main_box">
            <div class="main_tit">
                <div class="main_title">医疗美容（连锁）医院专家团队</div>
                <div class="main_word">医疗整形美容团是百度知道医疗整形美容团队简称，是为求美者提供一个权威解答的平台！没有广告，没有推荐，只有参考，当你在求
                美的道路上遇到任何的麻烦，我们都会尽力来帮你解答。</div>
                <div class="main_word">
                    当你想了解任意一项关于医疗整形美容项目时，我们都会给你最权威的分析！本着实事求是，服务人民的原则，坚定不移的走义务服务道路。
                    医疗整形美容团自成立之初起，就推行有问必答，尽心心力的回答风格，让每一个提问者在这里获得满意的答案。
                </div>
                <div class="main_img">
                    <img src="../../assets/img/expert.jpg" alt="">
                </div>
                <div class="main_word">
                    经过十余年的品牌沉淀和稳步发展，在国内至今已拥有连锁医院规模，汇集了众多院长级/主任级骨干医师，参与了国内多项医美专利技术的研发，
                    参编或主编了多部医美学术专著，成就了众多爱美人士的个性美丽定制，是目前国内规模和实力雄厚的专业医学美容医院连锁医院品牌。
                </div>
                <div  class="main_word">
                    历经将近10余年品牌深厚沉淀，至今已拥有全国30多家布局的品牌规模，主要集中在全国各大城市，
不仅包括北京、上海、重庆、天津等直辖市，还包括绝大部分省会城市，其单体医院实力皆同城市居前，是目前国内规模和实力雄厚的专业医疗美容机构。
                </div>
                <div class="main_word">
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
.skin{
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
    padding-bottom: 40px;
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