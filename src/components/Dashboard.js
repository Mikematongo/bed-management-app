import React, { useState, useEffect} from 'react';
const Dashboard = () => {
    const [, setSalesData] = useState([]);

    const mysql = require('/mysql');
    require('dotenv').config();

    useEffect(() => {
        fetch('/sales')
        .then((response) => response.json())
        .then((data) => setSalesData(data))
        .catch((error) => console.error('Error fetching sales data:', error));
    }, []);

    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <p>Total items sold: </p>
            <p>Total revenue: </p>
        </div>
    );
};

const connection = sql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MYSQL:', err.message);
  } else {
    console.log('Connected to MYSQL server.');
  }
});

const sql = 'SELECT * FROM Products';
connection.query(sql, (err, results) => {
  if (err){
    console.error('Error executing query:', err.message);
  } else {
    console.log('Products:', results);
  }
});

export default Dashboard;