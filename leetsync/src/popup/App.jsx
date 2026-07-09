import { useEffect, useState } from "react";
import { testGitHubConnection } from "../services/github";
import "./popup.css";

function App() {
  const [username, setUsername] = useState("");
  const [repository, setRepository] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    chrome.storage.local.get(
      ["githubUsername", "repository", "githubToken"],
      (data) => {
        setUsername(data.githubUsername || "");
        setRepository(data.repository || "");
        setToken(data.githubToken || "");
      }
    );
  }, []);

  function saveConfiguration(e) {
    e.preventDefault();

    if (!username || !repository || !token) {
      setMessage("Please fill all fields");
      return;
    }

    chrome.storage.local.set(
      {
        githubUsername: username.trim(),
        repository: repository.trim(),
        githubToken: token.trim(),
      },
      () => {
        setMessage("Configuration saved successfully!");

        setTimeout(() => {
          setMessage("");
        }, 2500);
      }
    );
  }
  async function testConnection() {
  setMessage("Testing connection...");

  try {
    await testGitHubConnection(username, repository, token);

    setMessage("GitHub connected successfully! ✅");
  } catch (error) {
    setMessage("Connection failed ❌");
  }
}

  return (
    <div className="container">
      <h1>LeetSync 🚀</h1>

      <p className="subtitle">
        Automatically sync accepted solutions to GitHub.
      </p>

      <form onSubmit={saveConfiguration}>
        <div className="form-group">
          <label>GitHub Username</label>

          <input
            type="text"
            placeholder="DeepakThakur10"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Repository Name</label>

          <input
            type="text"
            placeholder="leetcode"
            value={repository}
            onChange={(e) => setRepository(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>GitHub Token</label>

          <input
            type="password"
            placeholder="github_pat_..."
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>

        <button type="submit">
          Save Configuration
        </button>
        <button
          type="button"
          className="test-button"
          onClick={testConnection}
        >
        Test GitHub Connection
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;