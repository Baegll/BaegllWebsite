var pageSuggestions = [
    { title: 'Main Page', url: 'index.html', content: null},
    { title: 'Lorem', url: 'lorem.html', content: null},
    { title: 'Ipsum', url: 'ipsum.html', content: null},
    { title: 'Dolor', url: 'dolor.html', content: null},
    { title: 'Sit', url: 'sit.html', content: null},
    { title: 'World Map', url: 'interactive-map.html', content: null},
];

function showSuggestions() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var suggestionContainer = document.getElementById('suggestionContainer');
    suggestionContainer.innerHTML = '';

    if (searchInput.trim() === '') {
        suggestionContainer.style.display = 'block'
        return;
    }

    var matchingPages = pageSuggestions.filter(function (page) {
        return (
            page.title.toLowerCase().includes(searchInput) ||
            (page.content && page.content.toLowerCase().includes(searchInput))
        );
    });

    if (matchingPages.length > 0) {
        matchingPages.forEach(function (page) {
            var suggestionItem = document.createElement('div');
            suggestionItem.innerHTML = `<a href="#" onclick="loadContent('${page.url}')" class="suggestion">${page.title}</a>`;
            suggestionContainer.appendChild(suggestionItem);
        });
        suggestionContainer.style.display = 'block'; 
    } else {
        suggestionContainer.style.display = 'none'; 
    }
}


function updateContentByTitle(title, newContent) {
    var index = pageSuggestions.findIndex(page => page.title === title);
  
    if (index !== -1) {
      pageSuggestions[index].content = newContent;
      console.log(`Content updated for ${title}`);
    } else {
      console.log(`Title not found: ${title}`);
    }
}

function fetchLocalText(title, page) {
    fetch(page)
        .then((res) => res.text())
        .then((text) => {
            updateContentByTitle(title, text);
        })
        .catch((e) => console.error(e));
}

fetchLocalText('Main Page', 'index.html');
fetchLocalText('Lorem', 'lorem.html');