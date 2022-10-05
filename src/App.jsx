import "antd/dist/antd.css";
import "./App.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [dataSource, setDataSource] = useState([{
    "id": 1,
    "carType": "Dodge",
    "carModel": "Dakota Club",
    "numberOfSeat": 1,
    "plateNumber": "8608",
    "carYear": 1994,
    "normallizationValue": 7
  }, {
    "id": 2,
    "carType": "Saturn",
    "carModel": "S-Series",
    "numberOfSeat": 6,
    "plateNumber": "95",
    "carYear": 1996,
    "normallizationValue": 5
  }, {
    "id": 3,
    "carType": "Volkswagen",
    "carModel": "Eurovan",
    "numberOfSeat": 4,
    "plateNumber": "5",
    "carYear": 2003,
    "normallizationValue": 5
  }, {
    "id": 4,
    "carType": "Toyota",
    "carModel": "Corolla",
    "numberOfSeat": 2,
    "plateNumber": "0387",
    "carYear": 2002,
    "normallizationValue": 11
  }, {
    "id": 5,
    "carType": "Lincoln",
    "carModel": "Town Car",
    "numberOfSeat": 5,
    "plateNumber": "240",
    "carYear": 2007,
    "normallizationValue": 10
  }]
  );
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "car Type",
      dataIndex: "carType",
    },
    {
      key: "3",
      title: "Car Model",
      dataIndex: "carModel",
    },
    {
      key: "4",
      title: "Number of Seat",
      dataIndex: "numberOfSeat",
    },
    { key: "5",
    title: "Plate number",
    dataIndex: "plateNumber",

    },
   { key: "6",
    title: "Manufacture Year",
    dataIndex: "carYear",
  },
  { key: "7",
    title: "Normalization Value",
    dataIndex: "normallizationValue",

    },
    {
      key: "8",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              style={{color:"green", }}
              onClick={() => {
                onEditVehicle(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteVehicle(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  
  const onDeleteVehicle = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Vehicle record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((Vehicle) => Vehicle.id !== record.id);
        });
      },
    });
  };
  const onEditVehicle = (record) => {
    setIsEditing(true);
    setEditingVehicle({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingVehicle(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Vehicle data"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((Vehicle) => {
                if (Vehicle.id === editingVehicle.id) {
                  return editingVehicle;
                } else {
                  return Vehicle;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingVehicle?.carType}
            onChange={(e) => {
              setEditingVehicle((pre) => {
                return { ...pre, carType: e.target.value };
              });
            }}
          />
          <Input
            value={editingVehicle?.carModel}
            onChange={(e) => {
              setEditingVehicle((pre) => {
                return { ...pre, carModel: e.target.value };
              });
            }}
          />
          <Input
            value={editingVehicle?.numberOfSeat}
            onChange={(e) => {
              setEditingVehicle((pre) => {
                return { ...pre, numberOfSeat: e.target.value };
              });
            }}
          />
          <Input
            value={editingVehicle?.plateNumber}
            onChange={(e) => {
              setEditingVehicle((pre) => {
                return { ...pre, plateNumber: e.target.value };
              });
            }}
          />
          <Input
            value={editingVehicle?.carYear}
            onChange={(e) => {
              setEditingVehicle((pre) => {
                return { ...pre, carYear: e.target.value };
              });
            }}
          />
          <Input
            value={editingVehicle?.normallizationValue}
            onChange={(e) => {
              setEditingVehicle((pre) => {
                return { ...pre, normallizationValue: e.target.value };
              });
            }}
          />
          

        </Modal>
      </header>
    </div>
  );
}

export default App;
