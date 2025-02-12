import { useState } from 'react';

const UserForm = () => {
  const [username, setUsername] = useState('ChickenLady');
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Created User: ${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />
      <button>Add me to to list!</button>
    </form>
  );
};

export default UserForm;
