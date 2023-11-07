let toggleElements = document.querySelectorAll('.toggle');
let contentElements = document.querySelectorAll('.content');

for (let i = 0; i < toggleElements.length; i++) {
  toggleElements[i].addEventListener('click', function () {
    contentElements.forEach((contentElement) => {
      contentElement.style.display = 'none';
    });

    contentElements[i].style.display = 'block';
  });
}
