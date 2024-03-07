document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    const addUserButton = document.getElementById('add-user-button')
    addUserButton.addEventListener('click', ()=>{
      document.querySelector('.add-user-modal').classList.add('show')
      document.querySelector('.add-user-modal-back').classList.remove('dis-none')
    })


    document.querySelector('add-user-modal-back').addEventListener('click' , (e)=>{
      document.querySelector('.add-user-modal').classList.remove('show')
      e.target.classList.add('dis-none')
    })
  });