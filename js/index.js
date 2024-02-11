

const advertisementRef = database.ref('advertisement');

advertisementRef.once('value', function(snapshot) {
    const advertisementData = snapshot.val();

    // Update advertisement content
    document.getElementById('adimage').src = advertisementData.image;
    document.getElementById('addescription').textContent = advertisementData.description;
    document.getElementById('adbutton').href = advertisementData.buttonLink;

})

function closeAdvertisement() {
    document.getElementById('advertisementPanel').style.display = 'none';
}