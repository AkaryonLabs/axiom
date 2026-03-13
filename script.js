const form = document.getElementById("intake-form");
const dialog = document.getElementById("placeholder-dialog");
const closeDialogButton = document.getElementById("close-dialog");
const stripePlaceholders = document.querySelectorAll("[data-placeholder='stripe']");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem("axiom-intake-request", JSON.stringify(data));

  const button = form.querySelector("button[type='submit']");
  const originalText = button.textContent;
  button.textContent = "Saved";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    form.reset();
  }, 1400);
});

stripePlaceholders.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    dialog?.showModal();
  });
});

closeDialogButton?.addEventListener("click", () => {
  dialog?.close();
});
