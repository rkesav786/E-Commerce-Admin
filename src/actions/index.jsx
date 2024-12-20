export const mainPageFormData = (formValues) => {
  const apiurl = import.meta.env.VITE_ECOMMERCE_ADMIN_API;
  console.log("apiurl", apiurl);

  return fetch(`${apiurl}/api/formdata`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formValues),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error:", err);
    });
};
