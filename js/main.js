const sideBar = document.querySelector('sidebar')

const showSideBar = () => {
  let top  = window.pageYOffset || document.documentElement.scrollTop
  if(top >= 100) {
    sideBar.style.display = 'flex'
    sideBar.style.animation = 'fadeIn 1.2s forwards'
  } else if ( top < 100) {
    sideBar.style.animation = 'fadeOut 1.2s forwards'
  }
}

window.addEventListener('scroll', showSideBar)
