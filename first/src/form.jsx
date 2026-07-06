import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [reg, setReg] = useState(0);
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  return (
    <>
      <form>
        <h2>Form</h2>

        <label>Name:</label>
        <br />
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <label>Registration ID:</label>
        <br />
        <input
          type="text"
          placeholder="Enter Reg ID"
          value={reg}
          onChange={(e) => setReg(e.target.value)}
        />

        <br /><br />

        <label>Email:</label>
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <p>Course:</p>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option value="BCA">BCA</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MCA">MCA</option>
        </select>

        <br /><br />

        <button type="submit">Add Details</button>
      </form>

      <h1>Student Details</h1>
      <p>Name: {name}</p>
      <p>Registration ID: {reg}</p>
      <p>Email: {email}</p>
      <p>Course: {course}</p>
    </>
  );
}

export default Form;