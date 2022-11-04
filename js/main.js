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
  object.entryId = (data.nextEntryId);
  data.nextEntryId++;
  $img.setAttribute('src', $input.value);
  $submit.reset();
  data.entries.unshift(object);
  var $tree = document.querySelector('.no-bullets');
  $tree.prepend(newEntry(data.entries[0]));
  switchView('entries');
}

var $submit = document.getElementById('submitForm');
$submit.addEventListener('submit', formSubmit);

var $title = document.getElementById('title');
var $notes = document.getElementById('notes');

function switchView(dataView) {
  data.view = dataView;

  if (dataView === 'entry-form') {
    $view[1].classList.add('hidden');
    $view[0].classList.remove('hidden');
  } else if (dataView === 'entries') {
    $view[0].classList.add('hidden');
    $view[1].classList.remove('hidden');
  }
  $submit.reset();

}

var $view = document.querySelectorAll('.view');
var $entryTab = document.getElementById('entries-tab');

$entryTab.addEventListener('click', function (event) {
  switchView(event.target.getAttribute('data-view'));
});

var $newButton = document.getElementById('addNewEntry');
$newButton.addEventListener('click', function (event) {
  switchView(event.target.getAttribute('data-view'));
});

$submit.addEventListener('submit', function (event) {
  switchView(event.target.getAttribute('data-view'));
});

function newEntry(entry) {
  var $list = document.createElement('li');

  var $div0 = document.createElement('div');
  $div0.setAttribute('class', 'row');
  $list.appendChild($div0);

  var $div1 = document.createElement('div');
  $div0.appendChild($div1);

  var $div2 = document.createElement('div');
  $div2.setAttribute('class', 'column-half');
  $div1.appendChild($div2);

  var $imgEntry = document.createElement('img');
  $imgEntry.setAttribute('id', 'photoView');
  $imgEntry.setAttribute('src', entry.submitUrl);
  $imgEntry.setAttribute('alt', 'placeholder');
  $div2.appendChild($imgEntry);

  var $div3 = document.createElement('div');
  $div3.setAttribute('class', 'column-half');
  $div0.appendChild($div3);

  var $entryHeader = document.createElement('h1');
  $entryHeader.setAttribute('class', 'entry-title');
  $entryHeader.textContent = entry.submitTitle;
  $div3.appendChild($entryHeader);

  var $entryBody = document.createElement('p');
  $entryBody.setAttribute('class', 'entry-body');
  $entryBody.textContent = entry.submitNotes;
  $div3.appendChild($entryBody);

  return $list;

}

function renderList() {
  var $tree = document.querySelector('.no-bullets');
  for (var i = 0; i < data.entries.length; i++) {
    var addEntry = newEntry(data.entries[i]);
    $tree.appendChild(addEntry);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  renderList();
  var dataView = data.view;
  switchView(dataView);
});
