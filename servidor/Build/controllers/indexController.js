"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ message: 'puedes acceder a /app/empleados, /app/facturas, /app/productos, /app/proveedores, /app/recargas' });
    }
}
exports.indexController = new IndexController();
