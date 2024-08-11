import React, { useState } from "react";
import Modal from "react-modal";
import LottieAnimation1 from "./LottieAnimation1";
import "./modal.css";

const AddTodoModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(formData);
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
    });
    onClose();
  };
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={onClose}>
        <h2>Add New Todo</h2>
        <div className="parent-modal">
          <div className="left-modal-form">
            <div className="name">
              <label htmlFor="">Enter Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </div>
            <div className="phone">
              <label htmlFor="">Enter Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>
            <div className="email">
              <label htmlFor="">Enter Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </div>

            <div className="modal-btns">
              <button className="save" onClick={handleSave}>
                Save
              </button>
              <button className="cancel" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
          <div className="right-modal">
            <LottieAnimation1 />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddTodoModal;
