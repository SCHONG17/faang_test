import React from "react";

function UserTable(props) {
  return (
    <div>
      <p>Name</p>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <p key={user.id}>
            <p>
              {user.id} : {user.name}
              <button
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Edit
              </button>
              <button onClick={() => props.deleteUser(user.id)}>Delete</button>
            </p>
          </p>
        ))
      ) : (
        <p>
          <p>No users</p>
        </p>
      )}
    </div>
  );
}

export default UserTable;
