import Vue from 'vue'
import VueRouter from 'vue-router'
import route from './router.js'


var router = new VueRouter({
    routes: route
})

router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    // const targetPath = router.history.pending.fullPath;
    if (isChunkLoadFailed) {
        location.reload();
        // const targetPath = $router.history.pending.fullPath;
        // $router.replace(targetPath);
    }
});

Vue.use(VueRouter)
export default router