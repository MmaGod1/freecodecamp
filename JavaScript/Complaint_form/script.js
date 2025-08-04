function validateForm() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const orderRegex = /^2024\d{6}$/;
  const productCodeRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;

  const damaged = document.getElementById("damaged-product").checked;
  const nonconforming = document.getElementById(
    "nonconforming-product",
  ).checked;
  const delayed = document.getElementById("delayed-dispatch").checked;
  const others = document.getElementById("other-complaint").checked;

  const refund = document.getElementById("refund").checked;
  const exchange = document.getElementById("exchange").checked;
  const otherSolutions = document.getElementById("other-solution").checked;

  const complaintDesc = document
    .getElementById("complaint-description")
    .value.trim();
  const solutionDesc = document
    .getElementById("solution-description")
    .value.trim();

  // Show/hide complaint textarea
  const complaintContainer = document.getElementById(
    "complaint-description-container",
  );
  complaintContainer.style.display = others ? "block" : "none";

  // Show/hide solution textarea
  const solutionContainer = document.getElementById(
    "solution-description-container",
  );
  solutionContainer.style.display = otherSolutions ? "block" : "none";

  return {
    "full-name": document.getElementById("full-name").value.trim() !== "",
    email: emailRegex.test(document.getElementById("email").value.trim()),
    "order-no": orderRegex.test(document.getElementById("order-no").value),
    "product-code": productCodeRegex.test(
      document.getElementById("product-code").value,
    ),
    quantity: document.getElementById("quantity").valueAsNumber > 0,
    "complaints-group": damaged || nonconforming || delayed || others,
    "complaint-description": !others || complaintDesc.length >= 20,
    "solutions-group": refund || exchange || otherSolutions,
    "solution-description": !otherSolutions || solutionDesc.length >= 20,
  };
}

function isValid(form) {
  let allTrue = true;

  for (let key in form) {
    let element = document.getElementById(key);

    if (key === "complaints-group")
      element = document.getElementById("complaints-group");

    if (key === "solutions-group")
      element = document.getElementById("solutions-group");

    if (form[key]) {
      element.style.borderColor = "green";
    } else {
      if (element) element.style.borderColor = "red";
      allTrue = false;
    }
  }
  return allTrue;
}

document.querySelectorAll("input, textarea").forEach((input) =>
  input.addEventListener("change", () => {
    const formState = validateForm();
    isValid(formState);
  }),
);

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  isValid(validateForm());
});
