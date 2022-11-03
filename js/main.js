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
}

var $submit = document.getElementById('submitForm');
$submit.addEventListener('submit', formSubmit);
$submit.addEventListener('submit', switchToEntries);

var $title = document.getElementById('title');
var $notes = document.getElementById('notes');

//
//
// View Swap
//
//

function switchToEntries(event) {

  for (var j = 0; j < $tab.length; j++) {
    if ($tab[j].getAttribute('data-view') === 'entry-form') {
      $tab[j].classList.add('hidden');
    } else if ($tab[j].getAttribute('data-view') === 'entries') {
      $tab[j].classList.remove('hidden');
    }
  }
}

var $entries = document.querySelector('.button1');
$entries.addEventListener('click', switchToEntries);

var $tab = document.querySelectorAll('.view');

// DOM TREE

document.addEventListener('DOMContentLoaded', function () {

  function newEntry(entries) {
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
    $imgEntry.setAttribute('src', data.entries[i].submitUrl);
    $imgEntry.setAttribute('alt', 'placeholder');
    $div2.appendChild($imgEntry);

    var $div3 = document.createElement('div');
    $div3.setAttribute('class', 'column-half');
    $div0.appendChild($div3);

    var $entryHeader = document.createElement('h1');
    $entryHeader.setAttribute('class', 'entry-title');
    $entryHeader.textContent = data.entries[i].submitTitle;
    $div3.appendChild($entryHeader);

    var $entryBody = document.createElement('p');
    $entryBody.setAttribute('class', 'entry-body');
    $entryBody.textContent = data.entries[i].submitNotes;
    $div3.appendChild($entryBody);

    return $list;

  }

  var $tree = document.querySelector('.no-bullets');
  for (var i = 0; i < data.entries.length; i++) {
    var addEntry = newEntry(data.entries[i]);
    $tree.appendChild(addEntry);
  }

});
