import Vue from 'vue'
import Router from 'vue-router'
import settings from "@root/publicMethods/settings";
import RenderCms from '@/views/projectConfigration';
import ProjectConfigration from '@/views/projectConfigration/renderForm';

Vue.use(Router)

const createRouter = () => new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    path: settings.admin_base_path + '/renderCms',
    name: 'renderCms',
    component: RenderCms
  }, {
    path: settings.admin_base_path + '/renderCms/configRender',
    name: 'configRender',
    component: ProjectConfigration
  }]
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router