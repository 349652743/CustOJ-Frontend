<template>
  <n-grid :cols="4" style="height: 100%;" item-responsive>
    <n-grid-item span="3 800:1" class="nav-left-item">
      <n-space style="width: 80%;">
        <n-h2 style="margin: 0px;">Cust OJ</n-h2>
      </n-space>
    </n-grid-item>
    <n-grid-item span="0 800:2" class="nav-middle-item">
      <n-menu
        v-model:value="activeKey"
        mode="horizontal"
        :options="menuOptions"
        style="align-items: center;"
        default-value="Home"
      />
    </n-grid-item>
    <n-grid-item span="0 800:1" class="nav-right-item">
      <n-space style="width: 80%;" justify="end">
        <n-button @click="onClickLoginButton">登陆</n-button>
        <n-button @click="onClickRegisterButton">注册</n-button>
      </n-space>
    </n-grid-item>
    <n-grid-item span="1 800:0" class="nav-right-item">
      <n-space style="width: 70%;" justify="end">
        <n-button text @click="showDrawer()" size="large">
          <n-icon>
            <app-icon></app-icon>
          </n-icon>
        </n-button>
      </n-space>
    </n-grid-item>
  </n-grid>
  <n-drawer v-model:show="active" :width="200" :placement="right">
      <n-menu :options="menuOptions" indent="20"/>
  </n-drawer>
</template>
<script>
import { h, defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { NIcon } from 'naive-ui'
import {
  ListOutline as ListIcon,
  HomeOutline as HomeIcon,
  TrophyOutline as TrophyIcon,
  InformationCircleOutline as InformationIcon,
  TerminalOutline as TerminalIcon,
  LibraryOutline as LibraryIcon,
  AppsSharp as AppIcon
} from '@vicons/ionicons5'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    icon: renderIcon(HomeIcon),
    label: () =>
      h(
        RouterLink,
        { to: "/" },
        '首页'
      ),
    key: 'Home',
  },
  {
    icon: renderIcon(ListIcon),
    label: () =>
      h(
        RouterLink,
        { to: "/problems" },
        '题库'
      ),
    key: 'Problem',
  },
  {
    icon: renderIcon(TrophyIcon),
    label: () =>
      h(
        RouterLink,
        { to: "/contests" },
        '比赛'
      ),
    key: 'Contest',
  },
  {
    icon: renderIcon(TerminalIcon),
    label: () =>
      h(
        RouterLink,
        { to: "/status" },
        '评测'
      ),
    key: 'evaluation',
  },
  {
    icon: renderIcon(LibraryIcon),
    label: () =>
      h(
        RouterLink,
        { to: "/about" },
        '排名'
      ),
    key: 'Rank',
  },
  {
    icon: renderIcon(InformationIcon),
    label: () =>
      h(
        RouterLink,
        { to: "/about" },
        '关于'
      ),
    key: 'About',
  }
]


export default defineComponent( {
  name: 'NavBar',
  components: {
    AppIcon,
  },
  data() {
    return {
      active: false,
      activeKey: null,
      menuOptions: menuOptions
    }
  },
  methods: {
    onClickRegisterButton() {
      this.$router.push({ name: 'Register' })
    },
    onClickLoginButton() {
      this.$router.push({ name: 'Login' })
    },
    showDrawer() {
      this.active = this.active ? false : true
    }
  }
})
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