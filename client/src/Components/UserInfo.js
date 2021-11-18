import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/UserInfo.css";
const UserInfo = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const getSingleUsers = async (id) => {
    const responsive = await axios.get(`http://localhost:5000/user/${id}`);
    if (responsive.status === 200) {
      setUser({ ...responsive.data[0] });
      console.log(user);
    }
  };
  useEffect(() => {
    getSingleUsers(id);
  }, [id]);
  return (
    <>
      <div style={{ marginTop: "150px" }}>
        <div className="card">
          <div className="card-header">
            <p>User Contact Detail</p>
          </div>
          <div className="container">
            <strong>ID: </strong>
            <span>{id}</span>
            <br />
            <br />
            <strong>Name: </strong>
            <span>{user.name}</span>
            <br />
            <br />
            <strong>Address: </strong>
            <span>{user.address}</span>
            <br />
            <br />
            <strong>Email: </strong>
            <span>{user.email}</span>
            <br />
            <br />
            <strong>Contact: </strong>
            <span>{user.contact}</span>
            <br />
            <br />
            <Link to="/">
              <button className="btn btn-edit">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
