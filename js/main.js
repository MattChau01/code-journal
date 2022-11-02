/* Global data */

function newPhoto(event) {
  $img.src = ($input.value);
}

var $input = document.getElementById('url-link');
$input.addEventListener('input', newPhoto);
var $img = document.getElementById('photo');

function formSubmit(event) {
  event.preventDefault();

  var title = $title.value;
  var urlLink = $input.value;
  var textNotes = $notes.value;
  var object = {
    submitTitle: title,
    submitUrl: urlLink,
    submitNotes: textNotes
  };
  return object;
}

var $submit = document.getElementById('submitForm');
$submit.addEventListener('submit', formSubmit);

var $title = document.getElementById('title');
var $notes = document.getElementById('notes');
