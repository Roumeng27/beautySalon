<template>
    <div class="memberCenter">
        <div class="banner">
            <img src="../../assets/img/shaping.jpg" alt="">
        </div>
        <div class="main_box">
            <div class="register_box">
                <div class="user_name">
                    <el-input
                        placeholder="用户名/邮箱/手机"
                        v-model="user"
                        clearable>
                    </el-input>
                </div>
                <div class="user_name">
                    <el-input
                        placeholder="密码"
                        type="password"
                        v-model="password"
                        clearable>
                    </el-input>
                </div>
                <div class="user_name" style="text-align:right;color:#85bee0;">
                    忘记密码？
                </div>
                <div class="user_name">
                    <el-button type="primary">登录</el-button>
                </div>
                <div class="user_name">
                    <el-button type="success">没有账号?现在去注册</el-button>
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
        user:'',//用户名
        password:'',//密码
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
.memberCenter{
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
.main_box{
    width:100%;
    height: 443px;
    background: url('../../assets/img/backLogin.jpg') no-repeat center;
    background-size:100% 443px; 
    position: relative;
}
.register_box{
    width:400px;
    height: 343px;
    background: rgba(255,255,255,.8);
    position: absolute;
    top:30px;
    left: 50px;
}
.user_name{
    width:80%;
    margin:30px auto;
}
.el-button{
    width: 320px !important;
}
</style>