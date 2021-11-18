import React, { useState, useEffect } from "react";
import "../Styles/AddEditUser.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const initialSate = {
  name: "",
  email: "",
  contact: "",
};
const AddEditUser = () => {
  const [formValue, setFormValue] = useState(initialSate);
  const { name, email, contact } = formValue;
  const { id } = useParams();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const addContactUser = async (data) => {
    const responsive = await axios.post("http://localhost:5000/user", data);
    if (responsive.status === 200) {
      toast.success(responsive.data);
    }
  };
  const updateContact = async (data, id) => {
    const responsive = await axios.put(
      `http://localhost:5000/user/${id}`,
      data
    );
    if (responsive.status === 200) {
      toast.success(responsive.data);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      return toast.error("Enter Please input !");
    } else {
      if (!id) {
        addContactUser(formValue);
      } else {
        updateContact(formValue, id);
      }
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  const getSingleUsers = async (id) => {
    const responsive = await axios.get(`http://localhost:5000/user/${id}`);
    if (responsive.status === 200) {
      setFormValue({ ...responsive.data[0] });
    }
  };
  useEffect(() => {
    if (id) {
      getSingleUsers(id);
    }
  }, [id]);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name..."
            value={name || ""}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email..."
            value={email || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Your Contact No. ..."
            value={contact || ""}
            onChange={handleInputChange}
          />

          <input type="submit" value={id ? "Edit User" : "Add User"} />
        </form>
      </div>
    </>
  );
};

export default AddEditUser;
