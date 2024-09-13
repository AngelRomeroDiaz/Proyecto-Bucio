import { Request, Response, text } from "express";
 
class IndexController{
    public index(req: Request, res: Response){
        res.json({message: 'puedes acceder a /app/empleados, /app/facturas, /app/productos, /app/proveedores, /app/recargas'});
    }
    
}

export const indexController = new IndexController();