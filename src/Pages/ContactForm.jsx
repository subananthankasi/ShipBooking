import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message
    const message = `Name: ${formData.name}%0AWhatsApp: ${formData.whatsapp}%0APhone: ${formData.phone}`;
    const targetNumber = "7708794678"; 

    // Open WhatsApp link
    window.open(`https://wa.me/${targetNumber}?text=${message}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>WhatsApp Number:</label>
        <input
          type="text"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Send to WhatsApp</button>
    </form>
  );
};

export default ContactForm;
