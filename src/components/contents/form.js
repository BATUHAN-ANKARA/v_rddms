"use client";
import React, { useState } from "react";

function MyForm(props) {
  const { title, fields } = props;

  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   r
  };

  return (
    <form className="forms" onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <div className="formGrid">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}:</label>
            {field.type === "date" ? (
              <input
                type="date"
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleInputChange}
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleInputChange}
              >
                 <option value="">Seçiniz</option>
                <option value="sorumlu1">Proje Sorumlusu 1</option>
                <option value="sorumlu2">Proje Sorumlusu 2</option>
               </select>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleInputChange}
              />
            )}
          </div>
        ))}
      </div>
      <button className="submitButton" type="submit">
        Gönder
      </button>
    </form>
  );
}

export default MyForm;
