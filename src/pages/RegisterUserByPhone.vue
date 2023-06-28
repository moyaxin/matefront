<template>
  <div style="padding-top:60px;  margin-left: -10px;;min-width: 380px">
    <div class="uploaderCenter">
      <img class="img" :src="defaultPicture">
    </div>
    <div style="padding-top: 8px"/>
    <van-row justify="center">
      <h3>"小鱼塘! 寻找一起玩的小伙伴"</h3>
    </van-row>
    <van-divider></van-divider>
    <!--  <van-uploader class="uploaderCenter" :after-read="afterRead"/>-->
    <div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          
          
          <van-field
              v-model="phone"
              :rules="[{ required: true, message: '请填写手机号!' }]"
              label="手机号"
              name="手机号"
              placeholder="请填写手机号"
          />
          <van-field
              v-model="code"
              center
              clearable
              label="验证码"
              placeholder="请输入验证码"
            >
            <template #button>
              <van-button size="small" type="primary" @click="submitCode">发送验证码</van-button>
            </template>
        </van-field>
          <div class="longin">
            <van-button block class="defaultLogin" native-type="submit" round type="primary">
              登录注册账号
            </van-button>
            <van-cell title="" to="/user/login" value="已有账号？点击登录"></van-cell>
          </div>
        </van-cell-group>
      </van-form>
    </div>
  </div>
</template>
<script  setup>


import {ref} from "vue";
import {useRoute,useRouter} from "vue-router";
import {showFailToast, showSuccessToast} from "vant";
import request from "../service/myAxios";
import {defaultPicture} from "../common/userCommon";
import { showNotify, closeNotify } from 'vant';

const route = useRoute()
const router = useRouter()
const code = ref('')
const phone = ref('')
const onSubmit = async () => {
  const loginUser = await request.post("/user/login/code", {
    "phone": phone.value,
    "code": code.value
  });
  // console.log("loginUser="+JSON.stringify(loginUser))
  if (loginUser) {
    // sessionStorage.setItem("token", register ? JSON.stringify(register) : undefined)
    sessionStorage.setItem("longUser", loginUser ? JSON.stringify(loginUser) : undefined)
    showSuccessToast('注册成功');
    await router.push("/");
  }
};
const submitCode = async () => {
  if (!phone.value) {
        // 手机号为空，进行相应的处理
        showFailToast('请输入手机号')
        return;
      }
      showSuccessToast('验证码发送成功');
      const response = await request.post("/user/code", {
        phone: phone.value,});
        // 3 秒后自动关闭
        showNotify("你的验证码是："+response);
};

</script>

<style scoped>
@import "../assets/css/public.css";

.longin {
  margin: 16px 14px 0 5%;
}

.defaultLogin {
  flex: auto;
}

.uploaderCenter {
  margin-top: 8px;
  display: flex;
  justify-content: center;
}

</style>
