const jsEmail = document.querySelector('#js-email')


jsEmail.textContent = window.location.search.replace('%40', '@').split('=')[1]
