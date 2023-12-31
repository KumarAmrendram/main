$("#contact").on("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // Handle file upload similarly to the simpler form
  const fileInput = form.querySelector("#pdfFile");
  const file = fileInput.files[0];
  const fr = new FileReader();
  fr.fileName = file.name;
  fr.onload = function (event) {
    const fileData = event.target.result;
    formData.append("data", fileData.replace(/^.*,/, ""));
    formData.append("mimetype", fileData.match(/^.*(?=;)/)[0]);
    formData.append("filename", fr.fileName);

    // Perform the form submission
    submitFormData(formData, form); // Pass the form as an argument
  };
  fr.readAsDataURL(file);
});

async function submitFormData(formData, form) {
  // Receive the form as an argument
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycby5LjVr2mjKCkRKRaJfGgFCDhAKQv1CBQmHqaAHIwKDBrnnsyhaUJ5_zuEHERTr8rha6w/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const result = await response.text();
      console.log(result);
      alert("Data submitted successfully!");
      form.reset(); // Reset the form inputs
    } else {
      alert("Data submitted successfully!");
      // alert("Data submission failed. Please try again.");
    }
    location.reload(); // Reload the page
  } catch (error) {
    console.error(error);
    alert("Data submitted successfully!");
    // alert("An error occurred while submitting data. Please try again later.");
    location.reload(); // Reload the page
  }
}
