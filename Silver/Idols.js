// Function to generate image containers dynamically
function generateImageContainers() {
    var imageContainer = document.getElementById('imageContainer');

    // An array of image sources
    var imageSources = [
        // Add more image sources here
       
        'Thumbs/Anklets.jpg',
       
    ];

    // Loop through the image sources and create image containers
    imageSources.forEach(function (src) {
        var galleryDiv = document.createElement('div');
        galleryDiv.classList.add('gallery');

        var imageDiv = document.createElement('div');
        imageDiv.classList.add('image-container');

        var image = document.createElement('img');
        image.src = src;
        image.alt = 'Image';
        image.width = 600;
        image.height = 400;
        image.onclick = function () {
            openModal(src);
        };

        imageDiv.appendChild(image);
        galleryDiv.appendChild(imageDiv);

        // Append the galleryDiv to the imageContainer
        imageContainer.appendChild(galleryDiv);
    });
}

// Call the function to generate image containers
generateImageContainers();