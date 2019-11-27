const router = require('express').Router();

const customerController = require('../controllers/customerController');


router.get('/', customerController.listaProveedores);
router.get('/listaProductos', customerController.listaProductos);


router.post('/add', customerController.save);
router.get('/update/:idProveedores', customerController.edit);
router.post('/update/:idProveedores', customerController.update);

router.get('/delete/:idProveedores', customerController.delete);
router.get('/deleteproductos/:idProveedores', customerController.deleteProductos);

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

