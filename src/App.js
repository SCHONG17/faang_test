import React, { useState } from "react";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import Calendar from "./Calendar";
import "./App.css";

const App = () => {
  const initialFormState = { id: null, name: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const usersData = [{ id: 1, name: "matt", username: "hong" }];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name });
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };
  return (
    <div className="App">
      <Calendar />
      <div>
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Add user</h2>
            <div>
              <AddUserForm addUser={addUser} />
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop: 60 }}>
        <h2>Lists</h2>
        <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
      </div>
    </div>
  );
};

export default App;
