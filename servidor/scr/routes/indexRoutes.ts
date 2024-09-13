import { Router, request } from "express";
import { indexController } from "../controllers/indexController";


class IndexRoutes{
    public router: Router = Router();

    //metodo contructos
    constructor(){
        this.config();
    }
    //metodo config
    config(): void{
        this.router.get('/',indexController.index);//ruta inicial del indexController
        
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;