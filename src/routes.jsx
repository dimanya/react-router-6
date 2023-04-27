import User from "./user";
import UserEdit from "./userEdit";
import UsersList from "./usersList";
import Home from "./home";
import { Navigate } from "react-router-dom";

const routes = () => [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "users",
        children: [
            {
                path: "",
                element: <UsersList/>
            },
            { 
                path: ":userId", 
                children: [
                    {
                        path: "",
                        element: <User /> 
                    },
                    {
                        path: "users",
                        element: <Navigate to="/users"/>
                    },
                    {
                        path: "edit",
                        children: [
                            {
                                path: "",
                                element: <UserEdit /> 
                            },
                            {
                                path: "users",
                                element: <Navigate to="/users"/>
                            }
                        ]
                    }
                ]
            },
            {
                path: "*",
                element: <Navigate to="/users/:userId"/>
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/"/>
    }
]

export default routes;