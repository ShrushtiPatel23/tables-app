
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);

  const url = 'http://localhost:5000';

  const fetchData = () => {
    fetch(`${url}/income`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchData2 = () => {
    fetch(`${url}/phoneprice`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData2(actualData);
        console.log(data2);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchData3 = () => {
    fetch(`${url}/lastname`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData3(actualData);
        console.log(data3);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const fetchData4 = () => {
    fetch(`${url}/car`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData4(actualData);
        console.log(data4);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const fetchData5 = () => {
    fetch(`${url}/city`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData5(actualData);
        console.log(data5);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
    fetchData2();
    fetchData3();
    fetchData4();
    fetchData5();
  }, []);

  const columns = [
    { field: 'id', headerName: 'Id', width: 170, headerAlign: 'center', },
    { field: 'first_name', headerName: 'First_Name', width: 170, headerAlign: 'center', },
    { field: 'last_name', headerName: 'Last_Name', width: 170, headerAlign: 'center', },
    { field: 'email', headerName: 'Email', width: 170, headerAlign: 'center', },
    { field: 'gender', headerName: 'Gender', width: 170, headerAlign: 'center', },
    { field: 'income', headerName: 'Income', width: 170, headerAlign: 'center', },
    { field: 'city', headerName: 'City', width: 170, headerAlign: 'center', },
    { field: 'car', headerName: 'Car', width: 170, headerAlign: 'center', },
    { field: 'quote', headerName: 'Quote', width: 170, headerAlign: 'center', },
    { field: 'phone_price', headerName: 'Phone_Price', width: 170, headerAlign: 'center', },
  ];



  return (
    <div>
      <div className='row p-3 mx-2'>
        <div className="container my-3 col-1" style={{ height: 400, width: '50%' }}>
          <p className='text-md-center badge bg-primary text-wrap' style={{ width: "10rem;" }}>Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</p>
          <DataGrid rows={data} columns={columns}
            pageSize={5}
          />

        </div>
        <div className="container my-3 col-2" style={{ height: 400, width: '50%' }}>
          <p className='text-md-center badge bg-primary text-wrap' style={{ width: "10rem;" }}>Male Users which have phone price greater than 10,000.</p>
          <DataGrid rows={data2} columns={columns}
            pageSize={5}
          />
        </div>
      </div>
      <div className='row p-3 mx-2 my-5'>
        <div className="container my-3 col-1" style={{ height: 400, width: '50%' }}>
          <p className='text-md-center badge bg-primary text-wrap' style={{ width: "10rem;" }}>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name</p>
          <DataGrid rows={data3} columns={columns}
            pageSize={5}
          />

        </div>
        <div className="container my-3 col-2" style={{ height: 400, width: '50%' }}>
          <p className='text-md-center badge bg-primary text-wrap' style={{ width: "10rem;" }}>Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</p>
          <DataGrid rows={data4} columns={columns}
            pageSize={5}
          />
        </div>
      </div>
      <div className="container my-5 col-2 p-5" style={{ height: 400, width: '70%' }}>
        <p className='text-md-center badge bg-primary text-wrap' style={{ width: "10rem;" }}>Show the data of top 10 cities which have the highest number of users and their average income.</p>
        <table class="table-primary table-bordered" style={{ height: 400, width: '70%' }}>
          <thead>
            <tr>
              <th style={{ "text-align": "center" }} scope="col">City</th>
              <th style={{ "text-align": "center" }} scope="col">Income_Average</th>
            </tr>
          </thead>

          <tbody>

            {data5.map((item, index) => (
              <tr key={index}>
                <td style={{ "text-align": "center" }}>{item._id.city}</td>
                <td style={{ "text-align": "center" }}>{item._id.income_average}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
