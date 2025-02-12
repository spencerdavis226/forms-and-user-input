import { useState } from 'react';

const UserForm = () => {
  const initialState = {
    username: '',
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    alert(
      `Created user, ${username} with email ${email} and password ${password}`
    );
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Label is to identify what input is for (also for accessability). htmlFor should match input's id. */}
      {/* Name must match exactly what you have in UserForm for things to link */}

      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button>Add me to to list!</button>
    </form>
  );
};

export default UserForm;
