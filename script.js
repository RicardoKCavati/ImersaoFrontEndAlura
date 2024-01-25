const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

//document.addEventListener('input', () => { })

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

function getArtists(searchText) {
    console.log(searchText);
    const url = `http://localhost:3000/artists?name=${searchText}`;
    //this didn't return anything
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

async function getArtists2(searchText) {
    const url = 'http://localhost:3000/artists';
    const artistsJson = await (await fetch(url)).json(); //this is bad for memory and performance
    const artist = artistsJson.filter(
        (inArtist) => inArtist.name.toLowerCase().includes(searchText.toLowerCase())
    );
    //console.log(artist);

    displayResults(artist);
}

document.addEventListener('input', function () {
    const searchText = searchInput.value;
    if (searchText === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }

    getArtists2(searchText);
})