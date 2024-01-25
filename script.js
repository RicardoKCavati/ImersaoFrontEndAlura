const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

//document.addEventListener('input', () => { })

function displayResults(result) {
    
}

function getArtists(searchText) {
    const url = 'http://localhost:3000/artists?name_like=${searchText}';
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

document.addEventListener('input', function () {
    const searchText = searchInput.value.toLowerCase();
    if (searchText === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
})