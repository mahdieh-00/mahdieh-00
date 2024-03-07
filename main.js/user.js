document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems,{});
  });





  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => console.log(json));
