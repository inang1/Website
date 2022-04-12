function toggleTheme(value) {

            // Obtain the name of stylesheet
            // as a parameter and set it
            // using href attribute.
            var sheets = document
                .getElementsByTagName('link');

            sheets[0].href = value;
        }

function toggleImage(pic, source) {
  var img = document.getElementById(pic);
  img.src = source;
}

function Buttontoggle()
{
  var toggle = document.getElementById("checkbox");
  if(toggle.checked){
      toggleTheme('light.css');
      toggleImage('bioimg','theme2.jpg');}

  else{
      toggleTheme('style.css');
      toggleImage('bioimg','theme1.jpg')}
}
