export default async function deleteRequest(url, data) {
  return fetch(url, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
