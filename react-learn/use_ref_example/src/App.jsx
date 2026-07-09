import { useRef, useState } from "react";
import Child from "./components/child";

function App() {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(null);

  const imageRef = useRef(null);

  function handleChange(e) {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  }

  function removeImage() {
    setImage(null);
    imageRef.current.value = "";
  }

  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "50px"
        }}
      >
        <h2>Upload Image</h2>

        <input
          type="file"
          accept="image/jpeg, image/png"
          ref={imageRef}
          onChange={handleChange}
        />

        {image && (
          <div>
            <img
              src={image}
              alt="Selected"
              style={{
                width: "250px",
                display: "block",
                margin: "20px auto"
              }}
            />

            <button
              onClick={removeImage}
              style={{
                padding: "8px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
            >
              Remove Image
            </button>
          </div>
        )}
        <Child name="john" />

        <h2>{count}</h2>

        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      
    </>
  );
}

export default App;


