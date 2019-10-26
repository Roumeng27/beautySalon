<template>
    <div class="home_box">
        <div class="home_in">
            <div class="wheelPlanting">
                <el-carousel height="401px" :interval="5000" arrow="always">
                    <el-carousel-item v-for="(item,index) in dataimg" :key="index">
                        <div class="grid-content">
                            <el-col>
                                <div>
                                    <img :src="item.src">
                                </div>
                            </el-col>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="banner_service">
                <div class="banner_title">
                    <div style="font-size:36px;font-weight:300;">明星项目</div>
                    <div style="color:#ccc;">Star Project</div>
                </div>
                <div class="banner_img">
                    <img class="imgphoto" src="../../assets/img/banner1.png" alt="">
                    <img class="imgphoto" src="../../assets/img/banner2.png" alt="">
                    <img class="imgphoto" src="../../assets/img/banner3.png" alt="">
                    <img class="imgphoto" src="../../assets/img/banner4.png" alt="">
                </div>
            </div>
            <div class="banner_story">
                <img src="../../assets/img/brand.jpg" alt="">
                <div class="banner_right">
                    <div style="font-size:28px;">品牌故事</div>
                    <div style="color:#999;margin:10px 0">About Us</div>
                    <div style="color:#b6babd;">医疗美容（连锁）医院集团，经过十余年的品牌沉淀和稳步发展，在国内至今已拥有连锁医院规模，汇集了众多院长级/主任级骨干医师，
                        参与了国内多项医美专利技术的研发，参编或主编了多部医美学术专著，成就了众多爱美人士的个性美丽定制，
                        是目前国内规模和实力雄厚的专业医学美容医院连锁医院品牌。 我们历经将近10余年品牌深厚沉淀，至今已拥有全国30多家布局的品牌规模，
                        主要集中在全国各大城市， 不仅包括北京、上海、重庆、天津等直辖市，还包括绝大部分省会城市，其单体医院实力皆同城市居前，
                        是目前国内规模和实力雄厚的专业医疗美容机构。 我们凝萃多国医美技艺，汇纳国内外设备，以独立私密的医疗环境、
                        专业个性的美丽定制为求美者实现在国内即可享有国内外名师倾力为其打造的品质医美服务。</div>
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
        dataimg:[
            {
                src: require('../../assets/img/lunbo2.jpg'),
            },
            {
                src: require('../../assets/img/lunbo1.jpg'),
            }      
        ]
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
.home_box{
    width: 100%;
    height: 100%;
}
.banner_service{
    width: 100%;
    height: 400px;
    margin-top:30px;
}
.banner_title{
    width: 100%;
    text-align: center;
    color: #333;
}
.banner_img{
    width: 100%;
    display: flex;
    flex:1;
    justify-content: space-around;
}
.banner_img .imgphoto{
    display: inline-block;
    width:350px;
    height: 200px;
    margin-left: 10px;
}
.banner_story{
    display:flex;
    flex:1;
    justify-content: space-around;
    width: 1139px;
    height: 336px;
    margin:20px 60px;
}
.banner_story img{
    display: inline-block;
    /* width: 368px; */
    height: 254px;
}
.banner_right{
    margin-left: 20px;
    margin-top:10px;
}
</style>