const controller = {};

controller.listaProveedores = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM  tb_Proveedores', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};


controller.listaProductos = (req, res) => {
  
  const { idProductos } = req.params;
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM  tb_Productos', [idProductos], (err, rows) => {
      res.render('ConsultaProductos', {
        datas: rows
      })
    });
  });
};




controller.guardar=(req, res) =>{
  const data =req.body;
  req.getConnection((err,conn)=>{
      conn.query('INSERT INTO tb_Usuarios set ? ', [data] , (err,usuarios) =>{
          res.render('./dash');
      });
  });
};


controller.guardarDireccion=(req, res) =>{
  res.send("paso direccion");
  const datadirec =req.body;
  req.getConnection((err,conn)=>{
      conn.query('INSERT INTO tb_domicilio set ? ', [datadirec] , (err,customer) =>{
      });
  });
};

controller.guardarResponsable=(req, res) =>{
  res.send("paso responsable");
  const datarespon =req.body;
  req.getConnection((err,conn)=>{
      conn.query('INSERT INTO tb_Responsable set ? ', [datarespon] , (err,customer) =>{
      });
  });
};

controller.guardarProveedor=(req, res) =>{
  res.send("paso proveedor");
  const dataprovee =req.body;
  req.getConnection((err,conn)=>{
      conn.query('INSERT INTO tb_Proveedores set ? ', [dataprovee] , (err,customer) =>{
      });
  });
};

controller.guardarProducto=(req, res) =>{
  res.send("paso proveedor");
  const dataprodcuto =req.body;
  req.getConnection((err,conn)=>{
      conn.query('INSERT INTO tb_Productos set ? ', [dataprodcuto] , (err,customer) =>{
      });
  });
};
controller.guardarPedido=(req, res) =>{
  res.send("paso proveedor");
  const datapedido =req.body;
  req.getConnection((err,conn)=>{
      conn.query('INSERT INTO tb_Pedidos set ? ', [datapedido] , (err,customer) =>{
      });
  });
};




controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { idProveedores } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM tb_Proveedores WHERE idProveedores = ?", [idProveedores], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { idProveedores } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE tb_Proveedores set ? where idProveedores = ?', [newCustomer, idProveedores], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { idProveedores } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM tb_Proveedores WHERE idProveedores = ?', [idProveedores], (err, rows) => {
      res.redirect('/');
    });
  });
}
controller.deleteProductos = (req, res) => {
  const { idProveedores } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM tb_Productos WHERE idProveedores = ?', [idProveedores], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
