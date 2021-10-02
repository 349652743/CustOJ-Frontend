<template>
  <n-grid :cols="4" style="height: 100%;">
    <n-grid-item  :span="1" class="nav-left-item">
    <n-space style="width: 80%;">
    <h2>长春理工大学在线评测系统</h2>
    </n-space>
    
    </n-grid-item >
    <n-grid-item :span="2" class="nav-middle-item">
      <n-menu  v-model:value="activeKey" mode="horizontal" :options="menuOptions"  style="align-items: center;" default-value="Home"/>
    </n-grid-item >
    <n-grid-item :span="1" class="nav-right-item" >
      <n-space style="width: 80%;" justify="end">
          <n-button @click="onClickLoginButton">登陆</n-button>
          <n-button @click="onClickRegisterButton">注册</n-button>
        </n-space>
    </n-grid-item>
  </n-grid>

    
</template>
<script>
import { h, resolveComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { NIcon } from 'naive-ui'
import {
 ListOutline as ListIcon,
 HomeOutline as HomeIcon,
 TrophyOutline as TrophyIcon,
 InformationCircleOutline as InformationIcon,
 TerminalOutline as TerminalIcon,
 LibraryOutline as LibraryIcon
} from '@vicons/ionicons5'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    icon: renderIcon(HomeIcon),
    label: () =>
      h(
        RouterLink,
        { to:"/" },
        '首页'
      ),
    key: 'Home',
  },
  {
    icon: renderIcon(ListIcon),
    label: () =>
      h(
        RouterLink,
        { to:"/about" },
        '题库'
      ),
    key: 'Problem',
  },
  {
    icon: renderIcon(TrophyIcon),
    label: () =>
      h(
        RouterLink,
        { to:"/about" },
        '比赛'
      ),
    key: 'Contest',
  },
  {
    icon: renderIcon(TerminalIcon),
    label: () =>
      h(
        RouterLink,
        { to:"/about" },
        '评测'
      ),
    key: 'evaluation',
  },
  {
    icon: renderIcon(LibraryIcon),
    label: () =>
      h(
        RouterLink,
        { to:"/about" },
        '排名'
      ),
    key: 'Rank',
  },
  {
    icon: renderIcon(InformationIcon),
    label: () =>
      h(
        RouterLink,
        { to:"/about" },
        '关于'
      ),
    key: 'About',
  }
]


export default {
    name:"NavBar",
    data() {
        return { 
            activeKey: null,
            menuOptions: menuOptions
        }
    },
    methods: {
      onClickRegisterButton() {
        this.$router.push({name: 'Register'})
      },
      onClickLoginButton() {
        this.$router.push({name: 'Login'})
      }
    }
}
</script>
<style>
.nav-left-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-middle-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-right-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.router-link-active {
  color: white;
}
</style>