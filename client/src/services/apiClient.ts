export async function apiClient(endpoint: string, method: string, body?: any) {
  const baseURL = `${import.meta.env.VITE_REACT_APP_LOCALBASEURL}/api`;
  const url = `${baseURL}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_REACT_APP_API_KEY,
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    console.error("Error while fetching data: ", err);
  }
}
