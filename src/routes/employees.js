const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Listar todo
router.get('/', (req, res) => {

    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Buscar por id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//Registrar nuevo empleado
router.post('/', (req, res) => {
    const { id, name, phoneCell, addrees, picture} = req.body;
    const query = `
        SET @id = ?;
        SET @name = ?;
        SET @phoneCell = ?;
        SET @addrees = ?;
        SET @picture = ?;
        CALL employeeAddOrEdit (@id, @name, @phoneCell, @addrees, @picture);
    `;
    mysqlConnection.query(query, [id, name, phoneCell, addrees, picture], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Employeed Saved '});
        } else {
            console.log(err);
        }
    });
});

//Actualizar empleado
router.put('/:id', (req, res) => {
    const {name, phoneCell, addrees, picture} = req.body
    const {id} = req.params;
    const query = `
        SET @id = ?;
        SET @name = ?;
        SET @phoneCell = ?;
        SET @addrees = ?;
        SET @picture = ?;
        CALL employeeAddOrEdit (@id, @name, @phoneCell, @addrees, @picture);
    `;
    mysqlConnection.query(query, [id, name, phoneCell, addrees, picture], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Employee Update'});
        } else {
            console.log(err);
        }

    });
});

//Eliminar empleado
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Employee Deleted'});
        } else {
           console.log(err);
        }
    });
});

module.exports = router; 
