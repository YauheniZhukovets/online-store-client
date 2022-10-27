import {
    ADMIN_ROUTE,
    CART_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import {Admin} from "./page/Admin";
import {Cart} from "./page/Cart";
import {Shop} from "./page/Shop";
import {Auth} from "./page/Auth";
import {DevicePage} from "./page/DevicePage";

export const authRoutes = [
    {path: ADMIN_ROUTE, element: <Admin/>},
    {path: CART_ROUTE, element: <Cart/>},
]

export const publicRoutes = [
    {path: SHOP_ROUTE, element: <Shop/>},
    {path: LOGIN_ROUTE, element: <Auth/>},
    {path: REGISTRATION_ROUTE, element: <Auth/>},
    {path: DEVICE_ROUTE + '/:id', element: <DevicePage/>},
]