export default async function patch(url, data) {
  return fetch(url, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}
