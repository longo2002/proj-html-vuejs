import { reactive } from 'vue'

const store = reactive({
    navItems: [
        "home",
        "services",
        "skills",
        "partners",
        "blog",
        "get in touch"
    ],
    logos: [
        "/logo-1.png",
        "/logo-2.png",
        "/logo-3.png",
        "/logo-4.png",
        "/logo-5.png",

    ]
})

export default store
