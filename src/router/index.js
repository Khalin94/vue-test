import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import About from "@/pages/AboutPage.vue";
import MembersPage from "@/pages/MembersPage.vue";
import VideosPage from "@/pages/VideosPage.vue";
import MemberInfo from "@/pages/MemberInfo.vue";
import VideoPlayer from "@/pages/VideoPlayer.vue"

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/', component : HomePage},
        {path : '/about', component: About},
        {path : '/members', component: MembersPage},
        {path : '/members/:id', component: MemberInfo},
        {
            path : '/videos', component : VideosPage,
            children : [
                {
                    path : ':id', component : VideoPlayer
                }
            ]
        }
    ]
})

export default router