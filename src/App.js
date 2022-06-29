import React, {useState} from "react";
import Tweet from "./Tweet"

function App() {
  const [users, setUsers] = useState([
    { name: "Ousama", message: "This is a random tweet"},
    { name: "Yassine", message: "This is not a random tweet"},
    { name: "Abdelilah", message: "This is might be a random tweet"}
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;