export default function (className) {
  const elements = document.getElementsByClassName(className);

  for (let element of elements) {
    element.classList.remove(className);
  }
}
