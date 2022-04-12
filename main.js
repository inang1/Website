function toggleTheme(value) {
            var sheets = document.getElementsByTagName('link');
            sheets[0].href = value;
        }

function toggleImage(pic, source) {
  var img = document.getElementById(pic);
  img.src = source;
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function Buttontoggle()
{
  var toggle = document.getElementById("checkbox");
  if(toggle.checked){
      toggleTheme('light.css');
      toggleImage('bioimg','Untitled-1.png');}

  else{
      toggleTheme('style.css');
      toggleImage('bioimg','Untitled-2.png')}
}
