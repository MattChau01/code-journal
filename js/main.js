/* Global data */

function newPhoto(event) {
  $img.src = ($input.value);
}

var $input = document.getElementById('url-link');
$input.addEventListener('input', newPhoto);
var $img = document.getElementById('photo');

function formSubmit(event) {
  event.preventDefault();

  var $liParent = document.querySelectorAll('li');

  if (data.editing === null) {
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
  } else {

    for (var j = 0; j < data.entries.length; j++) {
      if (Number(data.editing.entryId) === Number(data.entries[j].entryId)) {
        data.entries[j].submitTitle = $title.value;
        data.entries[j].submitUrl = $input.value;
        data.entries[j].submitNotes = $notes.value;
        $liParent[j].replaceWith(newEntry(data.entries[j]));
      }
    }
    data.editing = null;
    switchView('entries');
  }
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
  $list.setAttribute('class', 'li-class');
  $list.setAttribute('id', entry.entryId);

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

  var $div4 = document.createElement('div');
  $div0.appendChild($div4);

  // Pencil listener

  var $pencil = document.createElement('i');
  $pencil.setAttribute('class', 'fa-solid fa-pencil');
  $pencil.classList.add('pencil-style');
  $div4.appendChild($pencil);
  $pencil.addEventListener('click', function () {
    switchView('entry-form');
  });

  $pencil.addEventListener('click', function () {
    var entryNumber = event.target.closest('.li-class').getAttribute('id');
    var parsedNumber = parseInt(entryNumber);

    // Prepopulate previous entry
    var $prevTitle = document.getElementById('title');
    var $prevLink = document.getElementById('url-link');
    var $updateImg = document.getElementById('photo');

    var $prevNotes = document.getElementById('notes');

    for (var r = 0; r < data.entries.length; r++) {
      if (parsedNumber === data.entries[r].entryId) {
        data.editing = data.entries[r];

        // Pre load entries

        $prevTitle.value = data.entries[r].submitTitle;
        $prevLink.value = data.entries[r].submitUrl;
        $prevNotes.value = data.entries[r].submitNotes;
        $updateImg.src = $prevLink.value;
      }
    }
  });

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

// Feature 3 notes - logs the cloest parent element

var $parentUl = document.querySelector('.no-bullets');
$parentUl.addEventListener('click', function () {
});
