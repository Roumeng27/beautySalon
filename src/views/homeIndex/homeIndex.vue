<template>
  <div class="myDiv">
    <headtab></headtab>
    <div>
        <el-menu :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#9933cc"
            text-color="#fff"
            active-text-color="#ffd04b"
            :unique-opened='true'
            :router='true'  >
            <template v-for="(item,index) in listArr">
                <el-submenu :index="item.url" v-if="item.childMenus" >
                    <template slot="title">
                        <span slot="title" style="cursor:pointer;">{{item.name}}</span>
                    </template>
                    <div  v-for="(itemb,indexb) in item.childMenus">
                        <el-submenu :index="itemb.url" v-if="itemb.childMenus">
                            <template slot="title">
                                <span slot="title" style="cursor:pointer;">{{itemb.name}}</span>
                            </template>
                            <el-menu-item v-for="(childc,index) in itemb.childMenus" :index="childc.url" :key="index">
                                {{childc.name}}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else :index="itemb.url">
                            <span style="cursor:pointer;">{{itemb.name}}</span>
                        </el-menu-item>
                    </div>
                </el-submenu>
                <el-menu-item v-else :index="item.url">
                    <i :class="item.icon"></i>
                    <span style="cursor:pointer;">{{item.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
    <div>
        <router-view></router-view>
    </div>
    <div class="footer_box">
        <div>我的网站 版权所有 2009-2019 湘ICP备8888888</div>
        <div>本站涵盖的内容、图片、视频等模板演示数据，部分未能与原作者取得联系。若涉及版权问题，请及时通知我们并提供相关证明材料，我们将支付合理报酬或立即予以删除！</div>
        <div>Powered by <span style="color:#9933cc;">MetInfo 7.0.0beta</span> ©2008-2019  mituo.cn</div>
    </div> 
  </div>
</template>

<script>
import headtab from '../common/head.vue'
export default {
  components:{
      headtab
  },
  props:{},
  data(){
    return {
        activeIndex2: '1',
        listArr:[
            {
                name:'首页',
                index:1,
                url: "/homeIndex/home"
            },
            {
                name:'微整形中心',
                index:2,
                url: "/homeIndex/micoShaping"
            },
            {
                name:'皮肤美容中心',
                index:3,
                url: "/homeIndex/skin"
            },
            {
                name:'专家团队',
                index:4,
                url: "/homeIndex/expertTeam"
            },
            {
                name:'案例中心',
                index:5,
                url: "/homeIndex/case"
            },
            {
                name:'关于我们',
                index:6,
                url: "/homeIndex/aboutUs"
            },
            {
                name:'医美咨询',
                index:7,
                url: "/homeIndex/consultation"
            },
            {
                name:'会员中心',
                index:8,
                url: "/homeIndex/memberCenter"
            },
        ]
    }
  },
  watch:{},
  computed:{},
  methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
.myDiv{
    width:100%;
    height: 100%;
    margin:0 auto;
    overflow-x: scroll;
}
.el-header{
    height: 160px !important;
}
body > .el-container {
margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
line-height: 320px;
}
.footer_box{
    width:100%;
    height: 105px;
    background-color: #333;
    /* position: fixed;
    bottom: 0;
    left: 0; */
    color: #999;
    padding-top:15px;
}
.footer_box div{
    text-align: center;
    line-height: 28px;
}
</style>