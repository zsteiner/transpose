export default function removeCalsses(className) {
  const elements = document.getElementsByClassName(className);

  /* eslint-disable no-unused-vars */
  for (let [key, name] of Object.entries(elements)) {
    name.classList.remove(className);
  }
}
