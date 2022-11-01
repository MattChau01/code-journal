/* Global data */

function newPhoto(event) {
  $img.src = ($input.value);

}

var $input = document.getElementById('url-link');
$input.addEventListener('input', newPhoto);
var $img = document.getElementById('photo');
