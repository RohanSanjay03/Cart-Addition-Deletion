import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });
  const [display, setDisplay] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setDisplay([...display, formData.firstname]);
  };

  //display.map((item) => {
  //  console.log(item);
  //});
  /* if (index !== -1) {
      display.splice(index, 1);
      setDisplay(...display);
    } else {
      alert("NO Item for Deletion");

    const copy = display.filter((items) => items[index] !== items);
    console.log(copy)
    } */

  const handleDeletion = () => {
    const index = display.findIndex(
      (element) => element === formData.firstname
    );
    console.log(index);
    //console.log(display);
    const toUpdate = display;
    const copy = toUpdate.filter((_, i) => index !== i);
    console.log(copy);
    if (index === -1) {
      alert("Nothing for Deletion");
    }

    setDisplay(copy);
  };

  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            placeholder="First Name"
            id="firstname"
            name="firstname"
            onChange={handleChange}
          />
        </div>

        <button>ADD</button>
      </form>

      <button onClick={handleDeletion}>DELETE</button>

      <div>
        {display.map((show, i) => (
          <div>
            {i + 1} : {show}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
