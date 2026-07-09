export async function testGitHubConnection(
  username,
  repository,
  token
) {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${repository}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Unable to connect to the GitHub repository");
  }

  return response.json();
}