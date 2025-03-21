// Photo gallery data
const photos = [
    {
        url: "/project/public/images/roadwv.jpg",
        caption: "The Open Road - A Journey Through America's Highways"
    },
    {
        url: "/project/public/images/newriverbridgewv.jpg",
        caption: "West Heaven Bridge - A Marvel of Engineering in Autumn Colors"
    },
    {
        url: "/project/public/images/grandfather.jpg",
        caption: "Sunset at Grandfather Mountain - Golden Hour Silhouette"
    },
    {
        url: "/project/public/images/skybridgemi.jpg",
        caption: "Sentinels of Freedom - Dayton Air Force Museum's Missile Display"
    },
    {
        url: "/project/public/images/airforce.jpg",
        caption: "Sentinels of Freedom - Dayton Air Force Museum's Missile Display"
    },
    {
        url: "/project/public/images/pitsburgoverlook.jpg",
        caption: "Pittsburgh Downtown - Urban Exploration from Duquesne Incline"
    }
];

// Initialize gallery
function initializeGallery() {
    const gallery = document.getElementById('gallery');
    
    photos.forEach(photo => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${photo.url}" alt="${photo.caption}">
            <div class="gallery-caption">
                <p>${photo.caption}</p>
            </div>
        `;
        
        gallery.appendChild(galleryItem);
    });
}

// Handle connect button click
function handleConnect() {
    window.open('https://www.instagram.com/rev__captures?igsh=MTBmdnd3aXc4bXBq', '_blank');
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    setCurrentYear();
});