function toggleTheme(value) {

            // Obtain the name of stylesheet
            // as a parameter and set it
            // using href attribute.
            var sheets = document
                .getElementsByTagName('link');

            sheets[0].href = value;
        }

function Buttontoggle()
{
  var toggle = document.getElementById("checkbox");
  if(toggle.checked){
      toggleTheme('light.css');}
  else{
      toggleTheme('style.css');}
}
