import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: "Home - Xefili.dev"
      }
    },
    {
      path: "/documentation",
      name: "Documentation",
      component: () => import('../views/DocumentationView.vue')
    },
    {
      path: "/blog",
      name: "Blog",
      component: () => import('../views/BlogView.vue')
    },
    {
      path: "/tools",
      name: "Tools",
      component: () => import("../views/ToolsView.vue")
    },
    {
      path: "/blog/more",
      name: "Additional Articles",
      component: () => import("../views/BlogMore.vue")
    }
  ],
})

router.afterEach((to) => {
  // `to` is the target Route Location object.

  // 1. Check if the target route or any of its ancestors have a `title` meta field.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  
  // 2. Determine the final title
  const finalTitle = nearestWithTitle ? nearestWithTitle.meta.title : 'My Default Application Title';

  // 3. Set the browser tab title
  document.title = finalTitle;
});


export default router