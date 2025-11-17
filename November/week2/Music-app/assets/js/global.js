// Returns all element descendants of node that match selectors ([data-import]).
// this returns an array like element that can be looped through
const componentElements = document.querySelectorAll("[data-import]");

//Use a function to organize your process and make things reusable
const renderComponent = (elements) => {
  // loop through this array list elements
  for (let element of elements) {
    // get the specific attributes that we stored the path to the component/module in
    const importElement = element.getAttribute("data-import");

    fetch(importElement)
      .then((res) => {
        if (!res.ok) {
          throw "Not found";
        }
        return res.text();
      })
      .then((component) => {
        element.innerHTML = component;
        //
        loadComponentScripts(element);
        const compElements = element.querySelectorAll("[data-import]");
        renderComponent(compElements);
      })
      .catch(() => {
        element.innerHTML = `<h4>Component not found</h4>`;
      });
  }
};

renderComponent(componentElements);


function loadComponentScripts(element) {
  const scripts = element.querySelectorAll("script");
  for (let script of scripts) {
    const newScript = document.createElement("script");
    if (script.src) {
      newScript.src = script.src;
    }
    if (script.textContent) {
      newScript.textContent = script.textContent;
    }
    script.remove();

    document.body.appendChild(newScript);
  }
}















const fibonacci = (number) => {
  console.log(number);

  if (number < 0) {
    return `${number} must be more than 0`;
  }
  if (number == 0 || number == 1) {
    return number;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
};

console.log(fibonacci(9));