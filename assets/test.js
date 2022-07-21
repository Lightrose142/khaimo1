const firstSection = document.getElementById("firstSection");

// console.log(firstSection)
const beforeFirstSection = document.createElement("section");

beforeFirstSection.classList.add("section hello pwepwe");

beforeFirstSection.style.fontSize = "2rem";

beforeFirstSection.textContent = "Hello this is added by javascrip";

firstSection.before(beforeFirstSection);

console.log(beforeFirstSection);

function createElement(element, classList) {
  element = document.createElement(element);

  classList.forEach((className) => {
    element.classList.add(`${className}`);
  });

  const styles = {
    style: "font-size: 50px; color: red; font-weight: 300",
  };

  for (let test in styles) {
    console.log(`${test}: ${styles[test]}`);
    element.setAttribute(test, styles[test]);
  }

  return element;
}

const elementTest = createElement("h1", ["section", "test1", "test2"]);

elementTest.textContent = "Hello this is added by javascrip";

firstSection.before(elementTest);
