

-- Proyecto control de proveedores


create database db_ControlProveedoresbeta;
use db_ControlProveedoresbeta;

create table tb_domicilio( 
idDomicilio int primary key not null,
estado varchar(20),
municipio varchar(20),
cp int,
colonia varchar (20),
calle varchar(20),
numero int
);


create table tb_Responsable(
rfc varchar(15) primary key not null,
nombre_responsable varchar(15),
apellidoP varchar(15),
apellidoM varchar(15)
);


create table tb_Productos(
idProductos varchar(15) primary key not null,
nombre_producto varchar(20),
cantidadExistente int,
precio float,
idProveedores int(10) UNSIGNED AUTO_INCREMENT,
constraint FK_idProveedores foreign key (idProveedores) references tb_Proveedores(idProveedores)
);


create table tb_Pedidos(
idPedido varchar(15) primary key not null,
iva float,
costo float,
fechaEntrega varchar(20),
fechaPedido varchar(20),
contidadPedido int,
idProductos varchar(15),
constraint FK_idPedido foreign key (idProductos) references tb_Productos(idProductos)
);


create table tb_Proveedores(
idProveedores int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre_empresa varchar(20),
telefono int,
idDomicilio int,
idProductos varchar(15),
rfc varchar(15),
constraint FK_idDomicilio foreign key (idDomicilio) references tb_domicilio(idDomicilio),
constraint FK_rfc1 foreign key (rfc) references tb_Responsable(rfc)
);



create table tb_Usuarios(
    idUsuario int PRIMARY KEY NOT NULL,
    password varchar (20)
);

CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

SET SQL_SAFE_UPDATES=0;

use db_ControlProveedoresbeta;
SELECT * FROM tb_usuarios;
SELECT * FROM tb_domicilio;
SELECT * FROM tb_responsable;
select * from tb_Proveedores;
select * from tb_Productos;
select * from tb_Pedidos;
select * from customer;

