const blogRoutes = [
    {
        path: "/blog",
        name: "Blog",
        component: () => import('@/views/BlogView.vue'),
        meta: {
            title: "Blog - Xefili.dev"
        }
    },
    {
        path: "/blog/more",
        name: "Additional Articles",
        component: () => import("@/views/BlogMore.vue"),
        meta: {
            title: "Blog Archive - Xefili.dev"
        }
    },
    {
        path: "/blog/read/:id",
        name: "Read Article",
        component: () => import("@/views/read/ReadArticle.vue"),
        meta: {
            title: "Read Article - Xefili.dev"
        }
    }
]

export default blogRoutes;