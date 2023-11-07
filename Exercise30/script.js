let toggleElements = document.querySelectorAll('.toggle');
let contentElements = document.querySelectorAll('.content');

for (let i = 0; i < toggleElements.length; i++) {
  toggleElements[i].addEventListener('click', function () {
    let contentElement = contentElements[i];
    if (contentElement.style.display === 'block') {
      contentElement.style.display = 'none';
    } else {
      contentElement.style.display = 'block';
    }
  });
}
