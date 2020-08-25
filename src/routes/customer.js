const router = require('express').Router();

const customerController = require('../controllers/customerController');


router.get('/', customerController.listaProveedores);
router.get('/listaProductos', customerController.listaProductos);
router.get('/listaPedidos', customerController.listaPedidos);


router.post('/add', customerController.save);
router.get('/update/:idProveedores', customerController.edit);
router.post('/update/:idProveedores', customerController.update);
router.get('/updateproductos/:idProductos', customerController.editproductos);
router.post('/updateproductos/:idProductos', customerController.updateproductos);
router.get('/updatepedidos/:idPedido', customerController.editpedidos);
router.post('/updatepedidos/:idPedido', customerController.updatepedidos);


router.get('/delete/:idProveedores', customerController.delete);
router.get('/deleteproductos/:idProductos', customerController.deleteProductos);
router.get('/deletePedidos/:idPedido', customerController.deletePedidos);

router.post('/add', customerController.guardar);
router.post('/addDireccion', customerController.guardarDireccion);
router.post('/addResponsable', customerController.guardarResponsable);
router.post('/addProveedor', customerController.guardarProveedor);
router.post('/addProducto', customerController.guardarProducto);
router.post('/addPedido', customerController.guardarPedido);



router.get('/dashBoard',(req, res)=>{
    res.render('./customers');
    });
    
    
    router.get('/inicio',(req, res)=>{
        res.render('./usuarios');
        });
        



module.exports = router;

