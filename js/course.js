const coursesRef = database.ref('courses');

coursesRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        // Get course details
        const courseName = childSnapshot.key;
        const { description, image } = childSnapshot.val();

        // Create card HTML
        const cardHtml = `
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <img src="${image}" class="card-img-top" alt="${courseName} Image">
                        <div class="card-body">
                            <h5 class="card-title">${courseName}</h5>
                            <p class="card-text">${description}</p>
                            <a href="#" class="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                </div>
            `;

        // Append card to the container
        document.getElementById('courseContainer').innerHTML += cardHtml;
    });
});