/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntry = localStorage.getItem('journal-local-storage');
if (previousEntry !== null) {
  data = JSON.parse(previousEntry);
}

window.addEventListener('beforeunload', string);

function string(event) {
  var $ipnutJSON = JSON.stringify(data);
  localStorage.setItem('journal-local-storage', $ipnutJSON);
}
