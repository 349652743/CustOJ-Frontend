
<template>
  <div class="register" style="padding: 80px 0px;">
    <n-card style="width: 30%">
      <n-form :model="model" ref="formRef" :rules="rules">
        <n-h2>注册 - Cust OJ</n-h2>
        <n-form-item path="username" label="账号">
          <n-input v-model:value="model.username" />
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input v-model:value="model.password" type="password" />
        </n-form-item>
        <n-form-item label="重复密码">
          <n-input
            :disabled="!model.password"
            v-model:value="model.reenteredPassword"
            type="password"
          />
        </n-form-item>
        <n-form-item :show-label="false">
          <n-button style="width: 100%" type="success">注册账号</n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
export default  defineComponent ({
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
.register {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>