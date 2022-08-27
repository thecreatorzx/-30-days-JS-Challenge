let inputs = document.querySelectorAll("input");
const handleUpdate = (input) => {
  const type = input.dataset.type || "";
  console.log(type);
  document.documentElement.style.setProperty(
    `--${input.name}`,
    input.value + type
  );
};
inputs.forEach((input) => {
  input.addEventListener("click", () => handleUpdate(input));
});
inputs.forEach((input) => {
  input.addEventListener("mousemove", () => handleUpdate(input));
});
