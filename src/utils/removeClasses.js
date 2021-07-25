export default function removeCalsses(className) {
  const elements = document.getElementsByClassName(className);

  elements.forEach((element) => {
    element.classList.remove(className);
  });
}
