var r = document.querySelector(':root');

// Create a function for getting a variable value
function modeChange() {
  // Get the styles (properties and values) for the root
    var rs = getComputedStyle(r);
  // GET the value of the --dark variable
    var dark = rs.getPropertyValue('--dark');
    //get the style of the button 
    var btnStyle = document.getElementById("dark-mode-button")
   //check for if its dark mode
    if(dark == "#303030"){
       // Set the value of variable --dark to white
        r.style.setProperty('--dark', '#ddd');
        r.style.setProperty('--white', '#303030');
        r.style.setProperty('--black', '#fff');
        btnStyle.style.backgroundColor = "#fff"
        btnStyle.style.color = "#1B1C1E"
        btnStyle.style.border = "1px solid #1B1C1E"
        document.getElementById("dark-mode-button").innerHTML = "Dark Mode"
        localStorage.setItem("theme", "light")
   }
   else{
       // Set the value of variable --dark to dark
        r.style.setProperty('--dark', '#303030');
        r.style.setProperty('--white', '#fff');
        r.style.setProperty('--black', '#1B1C1E')
        btnStyle.style.backgroundColor = "#1B1C1E"
        btnStyle.style.color = "#FFF"
        btnStyle.style.border = "1px solid #FFF"
        document.getElementById("dark-mode-button").innerHTML = "Light Mode"
        localStorage.setItem("theme", "dark")
   }

}
//loads when a new page loads and retains the existing theme
function themify(){
  if(localStorage.getItem("theme") == "dark"){
    r.style.setProperty('--dark', '#303030');
    r.style.setProperty('--white', '#fff');
    r.style.setProperty('--black', '#1B1C1E')
  }
  else if(localStorage.getItem("theme") == "light"){
    r.style.setProperty('--dark', '#ddd');
    r.style.setProperty('--white', '#303030');
    r.style.setProperty('--black', '#fff');
  }
  else{
    null;
  }
}


