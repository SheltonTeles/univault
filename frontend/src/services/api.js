const API_URL = "http://127.0.0.1:8000";

export async function getResources() {
  const response = await fetch(`${API_URL}/api/resources`);

  if (!response.ok) {
    throw new Error("Failed to fetch resources");
  }

  return response.json();
}

export async function createResource(resource) {
  const response = await fetch(`${API_URL}/api/resources`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resource),
  });

  if (!response.ok) {
    throw new Error("Failed to create resource");
  }

  return response.json();
}