// eslint-disable-next-line
export default function (element, binding) {
  // eslint-disable-next-line
  element.style.position = "absolute";
  Object.keys(binding.modifiers).forEach((key) => {
    // eslint-disable-next-line
    element.style[key] = binding.value[key];
  });
}
