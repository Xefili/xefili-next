const docRoutes = [
    {
        path: "/documentation/build",
        name: "Building",
        component: () => import("@/views/documentation/Build.vue"),
        meta: {
            title: "Contributing - Xefili.dev Documentation"
        }
    },
    {
        path: "/documentation/structure",
        name: "Structure",
        component: () => import("@/views/documentation/Structure.vue"),
        meta: {
            title: "Structure - Xefili.dev Documentation"
        }
    },
    {
        path: "/documentation/contribute",
        name: "Contribute",
        component: () => import("@/views/documentation/Contribute.vue"),
        meta: {
            title: "Contributing - Xefili.dev Documentation"
        }
    },
    {
        path: "/documentation",
        name: "Documentation",
        component: () => import('@/views/DocumentationView.vue'),
        meta: {
            title: "Documentation - Xefili.dev"
        }
    }
]

export default docRoutes;