<script setup lang="ts">
import IconDashboard from '@/assets/icons/shared/IconDashboard.svg';
import IconFolderShared from '@/assets/icons/shared/IconFolderShared.svg';
import IconLogo from '@/assets/icons/shared/IconLogo.svg';
import IconSettings from '@/assets/icons/shared/IconSettings.svg';
import { useThemeColor } from '@/composables/shared/use-theme-color';
import { HOME } from '@/constants/route-pages.const';
import { AUTH_PAGES, CODEBASE } from '@/constants/route-pages.const';

const { t } = useI18n();
const route = useRoute();
const { getThemeColor } = useThemeColor();
</script>

<template>
  <div class="container">
    <div class="container__logo">
      <RouterLink :to="HOME">
        <IconLogo />
      </RouterLink>
    </div>

    <ElMenu :defaultActive="route.path" :collapse="false" :router="true">
      <ElMenuItem :index="AUTH_PAGES.LOGIN">
        <ElIcon>
          <IconDashboard :fill="getThemeColor('ICON_SVG')" />
        </ElIcon>
        <template #title>{{ t('shared.navigator.login') }}</template>
      </ElMenuItem>

      <ElMenuItem :index="AUTH_PAGES.REGISTER">
        <ElIcon>
          <IconSettings :fill="getThemeColor('ICON_SVG')" />
        </ElIcon>
        <template #title>{{ t('shared.navigator.register') }}</template>
      </ElMenuItem>

      <ElMenuItem :index="CODEBASE">
        <ElIcon>
          <IconFolderShared :fill="getThemeColor('ICON_SVG')" />
        </ElIcon>
        <template #title>{{ t('shared.navigator.codebase') }}</template>
      </ElMenuItem>
    </ElMenu>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: calc(100% - 24px);

  .el-menu {
    height: calc(100% - 30px - $layout-margin - (24px * 3));
    border-right: 0;
    background-color: var(--v-background-content-color);
  }

  &__logo {
    width: 24px;
    height: 24px;
    margin: 20px auto;
    cursor: pointer;
    @include flexbox-style;
  }
}
</style>
