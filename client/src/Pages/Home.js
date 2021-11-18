import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import { toast } from "react-toastify";
const Home = () => {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const responsive = await axios.get("http://localhost:5000/users");
    if (responsive.status === 200) {
      setData(responsive.data);
    }
  };
  const DeleteUsers = async (id) => {
    if (window.confirm("Are you sure you want to delete user")) {
      const responsive = await axios.delete(`http://localhost:5000/user/${id}`);
      toast.success(responsive.data);
      getUsers();
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>ID</th>
              <th style={{ textAlign: "center" }}>Name</th>

              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Phone</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>

                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>
                      <Link to={`/editUser/${item.id}`}>
                        <button className="btn btn-edit">Edit</button>
                      </Link>
                      <button
                        className="btn btn-delete"
                        onClick={() => DeleteUsers(item.id)}
                      >
                        Delete
                      </button>
                      <Link to={`/userInfo/${item.id}`}>
                        <button className="btn btn-view">View</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
