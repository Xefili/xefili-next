import { createRouter, createWebHistory } from 'vue-router'
import docRoutes from './docRoutes'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		...docRoutes,
		{
			path: '/',
			name: 'Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				title: 'Home - Xefili.dev',
			},
		},
		{
			path: '/tools',
			name: 'Tools',
			component: () => import('@/views/ToolsView.vue'),
		},
	],
})

router.afterEach((to) => {
	// `to` is the target Route Location object.

	// 1. Check if the target route or any of its ancestors have a `title` meta field.
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title)

	// 2. Determine the final title
	const finalTitle = nearestWithTitle
		? nearestWithTitle.meta.title
		: 'No title given. Please report this on Github.'

	// 3. Set the browser tab title
	document.title = finalTitle
})

export default router
