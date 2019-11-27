const router = require('express').Router();

const customerController = require('../controllers/customerController');


router.get('/', customerController.listaProveedores);
router.get('/listaProductos', customerController.listaProductos);


router.post('/add', customerController.save);
router.get('/update/:idProveedores', customerController.edit);
router.post('/update/:idProveedores', customerController.update);
router.get('/delete/:idProveedores', customerController.delete);

router.post('/add', customerController.guardar);
router.post('/addDireccion', customerController.guardarDireccion);
router.post('/addResponsable', customerController.guardarResponsable);
router.post('/addProveedor', customerController.guardarProveedor);
router.post('/addProducto', customerController.guardarProducto);
router.post('/addPedido', customerController.guardarPedido);





module.exports = router;

