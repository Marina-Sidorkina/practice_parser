window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  let headersTextNodes = [];

  function recursy(element) {
    element.childNodes.forEach((node) => {

      if(node.nodeName.match(/^H\d/)) {
        const obj = {
          header: node.nodeName,
          content: node.textContent
        };

        headersTextNodes.push(obj);

      } else {
        recursy(node);
      }

    });
  };

  recursy(body);
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(headersTextNodes)
  })
  .then(response => response.json())
  .then(json => console.log(json))
});
