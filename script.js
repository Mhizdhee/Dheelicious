const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted!');
});

// for 

let menuVisible = false;

function toggleMenu() {
  const menu = document.getElementById("menu");
  if (!menuVisible) {
    menu.style.display = "block";
    menuVisible = true;
  } else {
    menu.style.display = "none";
    menuVisible = false;
  }
}






 
  