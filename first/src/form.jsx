import { useState } from "react";

function Student({ student }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
      }}
    >
      <h2>Student Details</h2>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Registration ID:</b> {student.reg}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>Course:</b> {student.course}</p>
    </div>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  // Array to store multiple students
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    const obj = {
      name,
      reg,
      email,
      course,
    };

    // Add new student to array
    setStudents([...students, obj]);

    // Clear the form
    setName("");
    setReg("");
    setEmail("");
    setCourse("");
  };

  return (
    <>
      <form>
        <h2>Student Form</h2>

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
          placeholder="Enter Registration ID"
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

        <label>Course:</label>
        <br />
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

        <button type="button" onClick={addStudent}>
          Add Details
        </button>
      </form>

      <hr />

      <h1>All Students</h1>

      {students.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </>
  );
}

export default Form;