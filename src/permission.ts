import router from "@/router"
import { useNavigator } from "./common/navigator"

const { setTitle } = useNavigator();

router.beforeEach((to, from, next) => {
    setTitle((to.meta as any).title);
    next();
})

export default router;