import { create} from "../controllers/user.contollers";

const userRoutes = app => {
    app.post("/auth/register", create);
}



export default userRoutes;