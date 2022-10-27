import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";

export const AppRouter = () => {
    const isAuth = true

    return (
        <Routes>
            {isAuth && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} replace/>}/>
        </Routes>
    )
}