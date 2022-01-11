import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.name) return;

          props.addUser(user);
          setUser(initialFormState);
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <br />
        <button>Add new user</button>
      </form>
    </div>
  );
};

export default AddUserForm;
