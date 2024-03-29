import { getAuthUser } from 'Services/Methods/AuthMethods';

const Routes = [
    {
        name: "Item",
        path: "/itemList",
        elementPath: "ItemList",
        auth: true,
        permission: getAuthUser()?.userRole === 'User' ? false : true,
    },
]

export default Routes;