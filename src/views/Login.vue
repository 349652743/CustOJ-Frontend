<template>
  <div class="login" style="padding: 80px 0px;">
    <n-card style="width: 30%">
      <n-form :model="model" ref="formRef" :rules="rules">
        <n-h2>登陆 - Cust OJ</n-h2>
        <n-form-item path="username" label="账号">
          <n-input v-model:value="model.username" />
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input v-model:value="model.password" type="password" />
        </n-form-item>
        <n-form-item :show-label="false">
          <n-checkbox v-model:checked="model.checkboxValue">七天内免登录</n-checkbox>
        </n-form-item>
        <n-form-item :show-label="false">
          <n-space vertical style="width: 100%" :size="20">
            <n-button style="width: 100%" type="success">登陆账号</n-button>
            <n-grid x-gap="12" :cols="2">
              <n-gi style="text-align: left;">
                还没有账号？
                <router-link to="/Register" >
                  <n-a :href="href">立即注册</n-a>
                </router-link>
                &nbsp;👉
              </n-gi>
            </n-grid>
          </n-space>
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent( {
  name: "Login",
  data() {
    return {
      model: {
        username: null,
        password: null,
        reenteredPassword: null
      }
    }
  }
})
</script>
<style>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>