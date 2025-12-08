// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Portfolio Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Portfolio item click handler (for video modals or links)
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.getAttribute('data-category');
        // Music videos now handled by music video gallery
    });
});

// Model Shoot Videos - Video data (titles will be fetched from YouTube)
const modelVideos = [
    { id: 'KeIVuWH641g', url: 'https://www.youtube.com/watch?v=KeIVuWH641g', song: 'Loading...', artist: '' },
    { id: 'w4IfLOEQ5ss', url: 'https://www.youtube.com/watch?v=w4IfLOEQ5ss', song: 'Loading...', artist: '' }
];

// Short Film Videos - Video data (titles will be fetched from YouTube)
const shortFilmVideos = [
    { id: 'WOi4zrJ0bCw', url: 'https://youtu.be/WOi4zrJ0bCw?si=weMcI6lCorEt3kLy&t=120', song: 'Loading...', artist: '', customThumbnail: 'short-films/kante-thumbnail.jpg' },
    { id: 'qRZVvGLFkSE', url: 'https://www.youtube.com/watch?v=qRZVvGLFkSE', song: 'Loading...', artist: '' },
    { id: 'biXDw3fpUZE', url: 'https://www.youtube.com/watch?v=biXDw3fpUZE', song: 'Loading...', artist: '' }
];

// Event Videos - Video data (titles will be fetched from YouTube)
const eventVideos = [
    { id: 'CwYaGIrvJSA', url: 'https://www.youtube.com/watch?v=CwYaGIrvJSA', song: 'Loading...', artist: '' },
    { id: 'QOyuU3KC3gM', url: 'https://www.youtube.com/watch?v=QOyuU3KC3gM', song: 'Loading...', artist: '' }
];

// Wedding Videos - Video data (titles will be fetched from YouTube)
const weddingVideos = [
    { id: 'Sv2L7p9YbDE', url: 'https://www.youtube.com/watch?v=Sv2L7p9YbDE&t=32s', song: 'Loading...', artist: '', customThumbnail: 'weddings/wedding-thumbnail.jpg' },
    { id: 'Cb4cLWBf52Y', url: 'https://www.youtube.com/watch?v=Cb4cLWBf52Y&t=448s', song: 'Loading...', artist: '' }
];

// Commercial Videos - Video data (titles will be fetched from YouTube)
const commercialVideos = [
    { id: 's0WSaK1rcbU', url: 'https://www.youtube.com/watch?v=s0WSaK1rcbU', song: 'Loading...', artist: '' },
    { id: 'QvP3L1hHP4I', url: 'https://www.youtube.com/watch?v=QvP3L1hHP4I&t=6s', song: 'Loading...', artist: '' }
];

// Real Estate Videos - Video data (titles will be fetched from YouTube)
const realEstateVideos = [
    { id: 'rZH056NwlH4', url: 'https://www.youtube.com/watch?v=rZH056NwlH4&t=5s', song: 'Loading...', artist: '' },
    { id: 'Xw4RXEQ7PBs', url: 'https://www.youtube.com/watch?v=Xw4RXEQ7PBs', song: 'Loading...', artist: '' }
];

// Music Video Gallery - Video data (titles will be fetched from YouTube)
const musicVideos = [
    { id: 'qQM0r7xCBzI', url: 'https://www.youtube.com/watch?v=qQM0r7xCBzI', song: 'Loading...', artist: '' },
    { id: 'XbxJbqS_0f0', url: 'https://www.youtube.com/watch?v=XbxJbqS_0f0', song: 'Loading...', artist: '' },
    { id: 'wUW9kOgh-i4', url: 'https://www.youtube.com/watch?v=wUW9kOgh-i4', song: 'Loading...', artist: '' },
    { id: 'YyEh1MCTlik', url: 'https://www.youtube.com/watch?v=YyEh1MCTlik', song: 'Loading...', artist: '' },
    { id: 'FVh2GrA1TEs', url: 'https://www.youtube.com/watch?v=FVh2GrA1TEs', song: 'Loading...', artist: '' },
    { id: 'sd0NbOwoH34', url: 'https://www.youtube.com/watch?v=sd0NbOwoH34', song: 'Loading...', artist: '' },
    { id: '1EF8-omQSl4', url: 'https://www.youtube.com/watch?v=1EF8-omQSl4', song: 'Loading...', artist: '' },
    { id: 'B5Jk3_pTnqQ', url: 'https://www.youtube.com/watch?v=B5Jk3_pTnqQ', song: 'Loading...', artist: '' },
    { id: '6_7bt7Fb67M', url: 'https://www.youtube.com/watch?v=6_7bt7Fb67M', song: 'Loading...', artist: '' },
    { id: 'rsqELc75x3o', url: 'https://www.youtube.com/watch?v=rsqELc75x3o', song: 'Loading...', artist: '' },
    { id: 'nl4wDLtyyb8', url: 'https://www.youtube.com/watch?v=nl4wDLtyyb8', song: 'Loading...', artist: '' },
    { id: '90jQUHzYB4g', url: 'https://www.youtube.com/watch?v=90jQUHzYB4g', song: 'Loading...', artist: '' },
    { id: 'Bw0Urs75YjY', url: 'https://www.youtube.com/watch?v=Bw0Urs75YjY', song: 'Loading...', artist: '' }
];

const musicVideoIds = musicVideos.map(v => v.id);

// Fetch video titles from YouTube oEmbed API
async function fetchVideoTitles() {
    const promises = musicVideos.map(async (video, index) => {
        try {
            // Use YouTube oEmbed API to get video title
            // Try direct fetch first
            let oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`;
            let response;
            
            try {
                response = await fetch(oembedUrl);
            } catch (e) {
                // If CORS blocks, try with a proxy
                oembedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`)}`;
                response = await fetch(oembedUrl);
            }
            
            const data = await response.json();
            
            if (data && data.title) {
                // Parse title - usually format is "Song Name - Artist Name" or "Artist Name - Song Name"
                const title = data.title;
                video.song = title;
                
                // Try to extract artist if title contains " - " or " – "
                const separators = [' - ', ' – ', ' | ', ' — '];
                for (const sep of separators) {
                    if (title.includes(sep)) {
                        const parts = title.split(sep);
                        video.song = parts[1] || parts[0];
                        video.artist = parts[0] || '';
                        break;
                    }
                }
                
                // Update the UI if already rendered
                updateVideoTitle(index, video.song, video.artist);
            }
        } catch (error) {
            console.error(`Error fetching title for video ${video.id}:`, error);
            video.song = `Video ${index + 1}`;
        }
    });
    
    await Promise.all(promises);
    // Regenerate thumbnails with updated titles
    if (typeof generateVideoThumbnails === 'function') {
        generateVideoThumbnails();
    }
}

// Update video title in the UI
function updateVideoTitle(index, song, artist) {
    const thumbnail = document.querySelector(`.video-thumbnail[data-index="${index}"]`);
    if (thumbnail) {
        const songNameEl = thumbnail.querySelector('.video-song-name');
        const artistNameEl = thumbnail.querySelector('.video-artist-name-small');
        if (songNameEl) songNameEl.textContent = song;
        if (artistNameEl) artistNameEl.textContent = artist || '';
    }
}

// Fetch titles when page loads
fetchVideoTitles();

const musicVideoTrigger = document.querySelector('.music-video-gallery-trigger');
const musicVideoModal = document.getElementById('musicVideoModal');
const musicVideoThumbnails = document.getElementById('musicVideoThumbnails');
const musicVideoThumbnailGrid = document.getElementById('musicVideoThumbnailGrid');
const musicVideoGalleryView = document.getElementById('musicVideoGalleryView');
const musicVideoPrev = document.getElementById('musicVideoPrev');
const musicVideoNext = document.getElementById('musicVideoNext');
const musicVideoCurrent = document.getElementById('musicVideoCurrent');
const musicVideoTotal = document.getElementById('musicVideoTotal');
const backToVideoThumbnailsBtn = document.getElementById('backToVideoThumbnails');
const videoSongTitle = document.getElementById('videoSongTitle');
const videoArtistName = document.getElementById('videoArtistName');
const largeVideoThumbnail = document.getElementById('largeVideoThumbnail');
const playButtonLarge = document.getElementById('playButtonLarge');

// Generate thumbnail grid dynamically
function generateVideoThumbnails() {
    if (musicVideoThumbnailGrid) {
        musicVideoThumbnailGrid.innerHTML = '';
        musicVideos.forEach((video, index) => {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = 'thumbnail-item video-thumbnail';
            thumbnailDiv.setAttribute('data-index', index);
            const displaySong = video.song || 'Loading...';
            const displayArtist = video.artist || '';
            thumbnailDiv.innerHTML = `
                <div class="video-info-overlay">
                    <h4 class="video-song-name">${displaySong}</h4>
                    ${displayArtist ? `<p class="video-artist-name-small">${displayArtist}</p>` : ''}
                </div>
                <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="${displaySong}" onerror="this.src='https://img.youtube.com/vi/${video.id}/hqdefault.jpg'">
                <div class="play-icon">▶</div>
            `;
            musicVideoThumbnailGrid.appendChild(thumbnailDiv);
        });
        
        // Add click handlers to new thumbnails
        const newThumbnails = musicVideoThumbnailGrid.querySelectorAll('.video-thumbnail');
        newThumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener('click', () => {
                const index = parseInt(thumbnail.getAttribute('data-index'));
                showLargeVideoView(index);
            });
        });
    }
}

// Generate thumbnails on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateVideoThumbnails);
} else {
    generateVideoThumbnails();
}

let currentVideoIndex = 0;
let isVideoLargeView = false;

if (musicVideoTotal) {
    musicVideoTotal.textContent = musicVideos.length;
}

// Open modal when clicking music video cover
if (musicVideoTrigger && musicVideoModal) {
    musicVideoTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        musicVideoModal.classList.add('active');
        showVideoThumbnailView();
        document.body.style.overflow = 'hidden';
    });
}

// Close modal
const musicVideoModalClose = musicVideoModal?.querySelector('.modal-close');
if (musicVideoModalClose) {
    musicVideoModalClose.addEventListener('click', () => {
        closeMusicVideoModal();
    });
}

// Close modal when clicking outside (only in thumbnail view)
if (musicVideoModal) {
    musicVideoModal.addEventListener('click', (e) => {
        if (e.target === musicVideoModal && !isVideoLargeView) {
            closeMusicVideoModal();
        }
    });
}

// Show thumbnail view
function showVideoThumbnailView() {
    isVideoLargeView = false;
    if (musicVideoThumbnails) musicVideoThumbnails.style.display = 'block';
    if (musicVideoGalleryView) musicVideoGalleryView.style.display = 'none';
}

// Show large video view
function showLargeVideoView(index) {
    isVideoLargeView = true;
    currentVideoIndex = index;
    const video = musicVideos[index];
    
    if (musicVideoThumbnails) musicVideoThumbnails.style.display = 'none';
    if (musicVideoGalleryView) musicVideoGalleryView.style.display = 'block';
    
    // Update video info
    if (videoSongTitle) videoSongTitle.textContent = video.song;
    if (videoArtistName) videoArtistName.textContent = video.artist;
    if (largeVideoThumbnail) {
        largeVideoThumbnail.src = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
        largeVideoThumbnail.onerror = function() {
            this.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
        };
    }
    
    // Update play button to open YouTube
    if (playButtonLarge) {
        playButtonLarge.onclick = () => {
            window.open(video.url, '_blank');
        };
    }
    
    if (musicVideoCurrent) {
        musicVideoCurrent.textContent = index + 1;
    }
}

function nextVideo() {
    if (!isVideoLargeView) return;
    currentVideoIndex = (currentVideoIndex + 1) % musicVideos.length;
    showLargeVideoView(currentVideoIndex);
}

function prevVideo() {
    if (!isVideoLargeView) return;
    currentVideoIndex = (currentVideoIndex - 1 + musicVideos.length) % musicVideos.length;
    showLargeVideoView(currentVideoIndex);
}

function closeMusicVideoModal() {
    if (musicVideoModal) {
        musicVideoModal.classList.remove('active');
        showVideoThumbnailView(); // Reset to thumbnail view
        document.body.style.overflow = '';
    }
}

// Thumbnail click handlers are now set in generateVideoThumbnails()

// Back to thumbnails button
if (backToVideoThumbnailsBtn) {
    backToVideoThumbnailsBtn.addEventListener('click', () => {
        showVideoThumbnailView();
    });
}

// Navigation buttons
if (musicVideoNext) {
    musicVideoNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextVideo();
    });
}

if (musicVideoPrev) {
    musicVideoPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevVideo();
    });
}

// Keyboard navigation (arrow keys) - only in large view
document.addEventListener('keydown', (e) => {
    if (musicVideoModal && musicVideoModal.classList.contains('active') && isVideoLargeView) {
        if (e.key === 'ArrowRight') {
            nextVideo();
        } else if (e.key === 'ArrowLeft') {
            prevVideo();
        } else if (e.key === 'Escape') {
            showVideoThumbnailView();
        }
    } else if (musicVideoModal && musicVideoModal.classList.contains('active') && !isVideoLargeView && e.key === 'Escape') {
        closeMusicVideoModal();
    }
});

// Photoshoot Gallery Modal
const photoshootTrigger = document.querySelector('.photoshoot-gallery-trigger');
const photoshootModal = document.getElementById('photoshootModal');
const photoshootModalClose = document.querySelector('.photoshoot-modal-close');
const modalThumbnails = document.getElementById('modalThumbnails');
const modalGalleryView = document.getElementById('modalGalleryView');
const modalImages = document.querySelectorAll('#photoshootModal .modal-image');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');
const currentImageSpan = document.getElementById('currentImage');
const totalImagesSpan = document.getElementById('totalImages');
const backToThumbnailsBtn = document.getElementById('backToThumbnails');
const thumbnailItems = document.querySelectorAll('#photoshootModal .thumbnail-item');

let currentImageIndex = 0;
const totalImages = modalImages.length;
let isLargeView = false;

if (totalImagesSpan) {
    totalImagesSpan.textContent = totalImages;
}

// Open modal when clicking photoshoot cover
if (photoshootTrigger && photoshootModal) {
    photoshootTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        photoshootModal.classList.add('active');
        showThumbnailView();
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
}

// Close modal
if (photoshootModalClose) {
    photoshootModalClose.addEventListener('click', () => {
        closeModal();
    });
}

// Close modal when clicking outside (only in thumbnail view)
if (photoshootModal) {
    photoshootModal.addEventListener('click', (e) => {
        if (e.target === photoshootModal && !isLargeView) {
            closeModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && photoshootModal && photoshootModal.classList.contains('active')) {
        if (isLargeView) {
            showThumbnailView();
        } else {
            closeModal();
        }
    }
});

// Show thumbnail view
function showThumbnailView() {
    isLargeView = false;
    if (modalThumbnails) modalThumbnails.style.display = 'block';
    if (modalGalleryView) modalGalleryView.style.display = 'none';
}

// Show large image view
function showLargeImageView(index) {
    isLargeView = true;
    currentImageIndex = index;
    if (modalThumbnails) modalThumbnails.style.display = 'none';
    if (modalGalleryView) modalGalleryView.style.display = 'block';
    showImage(currentImageIndex);
}

// Navigation functions
function showImage(index) {
    modalImages.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
    if (currentImageSpan) {
        currentImageSpan.textContent = index + 1;
    }
}

function nextImage() {
    if (!isLargeView) return;
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
}

function prevImage() {
    if (!isLargeView) return;
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
}

function closeModal() {
    if (photoshootModal) {
        photoshootModal.classList.remove('active');
        showThumbnailView(); // Reset to thumbnail view
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Thumbnail click handlers for photoshoot gallery
if (thumbnailItems && thumbnailItems.length > 0) {
    thumbnailItems.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            const dataIndex = thumbnail.getAttribute('data-index');
            const thumbIndex = dataIndex !== null ? parseInt(dataIndex) : index;
            if (!isNaN(thumbIndex)) {
                showLargeImageView(thumbIndex);
            }
        });
    });
}

// Back to thumbnails button
if (backToThumbnailsBtn) {
    backToThumbnailsBtn.addEventListener('click', () => {
        showThumbnailView();
    });
}

// Navigation buttons
if (modalNext) {
    modalNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextImage();
    });
}

if (modalPrev) {
    modalPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevImage();
    });
}

// Keyboard navigation (arrow keys) - only in large view
document.addEventListener('keydown', (e) => {
    if (photoshootModal && photoshootModal.classList.contains('active') && isLargeView) {
        if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    }
});

// Contact Form Handling with EmailJS
(function() {
    'use strict';
    
    function setupContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) {
            console.error('Contact form not found');
            return;
        }
        
        // Remove any existing submit handlers
        const newForm = form.cloneNode(true);
        form.parentNode.replaceChild(newForm, form);
        
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            
            console.log('=== FORM SUBMISSION STARTED ===');
            
            if (typeof emailjs === 'undefined') {
                console.error('EmailJS is not loaded!');
                alert('Email service not available. Please refresh the page.');
                return false;
            }
            
            if (typeof emailjs.send !== 'function') {
                console.error('EmailJS.send is not a function!');
                alert('Email service error. Please refresh the page.');
                return false;
            }
            
            const templateParams = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: (document.getElementById('phone').value || 'Not provided').trim(),
                service: (document.getElementById('service').value || 'Not specified').trim(),
                message: document.getElementById('message').value.trim()
            };
            
            console.log('Template params:', templateParams);
            
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.disabled = true;
            btn.textContent = 'Sending...';
            
            // Remove old messages
            const oldMsg = contactForm.querySelector('.form-success, .form-error');
            if (oldMsg) oldMsg.remove();
            
            console.log('Calling emailjs.send...');
            console.log('Service ID: service_h5il5h7');
            console.log('Template ID: template_9tgd17r');
            
            emailjs.send('service_h5il5h7', 'template_9tgd17r', templateParams)
                .then(function(response) {
                    console.log('=== EMAILJS SUCCESS ===');
                    console.log('Response:', response);
                    console.log('Status:', response.status);
                    console.log('Text:', response.text);
                    
                    if (response.status === 200) {
                        const msg = document.createElement('div');
                        msg.className = 'form-success';
                        msg.style.cssText = 'background: #4ecdc4; color: white; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-weight: 500;';
                        msg.textContent = 'Thank you! Your message has been sent. We\'ll get back to you soon!';
                        contactForm.appendChild(msg);
                        contactForm.reset();
                        btn.disabled = false;
                        btn.textContent = originalText;
                        setTimeout(function() { msg.remove(); }, 5000);
                    } else {
                        throw new Error('Unexpected status: ' + response.status);
                    }
                })
                .catch(function(error) {
                    console.error('=== EMAILJS ERROR ===');
                    console.error('Full error:', error);
                    console.error('Status:', error.status);
                    console.error('Text:', error.text);
                    console.error('Message:', error.message);
                    
                    const msg = document.createElement('div');
                    msg.className = 'form-error';
                    msg.style.cssText = 'background: #e74c3c; color: white; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-weight: 500;';
                    msg.textContent = 'Error: ' + (error.text || error.message || 'Unknown error');
                    contactForm.appendChild(msg);
                    btn.disabled = false;
                    btn.textContent = originalText;
                    setTimeout(function() { msg.remove(); }, 8000);
                });
            
            return false;
        });
        
        console.log('Contact form handler attached successfully');
    }
    
    // Wait for page to fully load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupContactForm);
    } else {
        // Wait a bit for EmailJS to initialize
        setTimeout(setupContactForm, 500);
    }
})();

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .portfolio-item, .about-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add video embed functionality (placeholder)
// You can replace portfolio placeholders with actual video embeds
function addVideoToPortfolio(category, videoUrl, thumbnailUrl) {
    const items = document.querySelectorAll(`.portfolio-item[data-category="${category}"]`);
    items.forEach(item => {
        if (thumbnailUrl) {
            item.style.backgroundImage = `url(${thumbnailUrl})`;
            item.style.backgroundSize = 'cover';
            item.style.backgroundPosition = 'center';
        }
        
        item.addEventListener('click', () => {
            // Open video in modal or new tab
            window.open(videoUrl, '_blank');
        });
    });
}

// Example usage (uncomment and add your video URLs):
// addVideoToPortfolio('music-videos', 'https://youtube.com/watch?v=...', 'thumbnail.jpg');
// addVideoToPortfolio('weddings', 'https://vimeo.com/...', 'wedding-thumb.jpg');

// Performance: Lazy load images when they come into view
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Background Music - Handle autoplay restrictions
const backgroundMusic = document.getElementById('backgroundMusic');
let musicStarted = false;

// Try to play music on page load
if (backgroundMusic) {
    backgroundMusic.volume = 0.3; // Set volume to 30% so it's not too loud
    
    // Try to play immediately
    backgroundMusic.play().catch(error => {
        console.log('Autoplay prevented, waiting for user interaction');
    });
    
    // Start music on first user interaction (click, scroll, etc.)
    const startMusic = () => {
        if (!musicStarted) {
            backgroundMusic.play().then(() => {
                musicStarted = true;
                console.log('Background music started');
            }).catch(error => {
                console.log('Could not start music:', error);
            });
        }
    };
    
    // Listen for user interactions
    document.addEventListener('click', startMusic, { once: true });
    document.addEventListener('scroll', startMusic, { once: true });
    document.addEventListener('touchstart', startMusic, { once: true });
    document.addEventListener('keydown', startMusic, { once: true });
}


// Model Video Gallery Setup
const modelVideoTrigger = document.querySelector('.model-video-gallery-trigger');
const modelVideoModal = document.getElementById('modelVideoModal');
const modelVideoThumbnails = document.getElementById('modelVideoThumbnails');
const modelVideoThumbnailGrid = document.getElementById('modelVideoThumbnailGrid');
const modelVideoGalleryView = document.getElementById('modelVideoGalleryView');
const modelVideoPrev = document.getElementById('modelVideoPrev');
const modelVideoNext = document.getElementById('modelVideoNext');
const modelVideoCurrent = document.getElementById('modelVideoCurrent');
const modelVideoTotal = document.getElementById('modelVideoTotal');
const backToModelVideoThumbnailsBtn = document.getElementById('backToModelVideoThumbnails');
const modelVideoSongTitle = document.getElementById('modelVideoSongTitle');
const modelLargeVideoThumbnail = document.getElementById('modelLargeVideoThumbnail');
const modelPlayButtonLarge = document.getElementById('modelPlayButtonLarge');

let currentModelVideoIndex = 0;
let isModelVideoLargeView = false;

if (modelVideoTotal) {
    modelVideoTotal.textContent = modelVideos.length;
}

// Generate model video thumbnail grid dynamically
function generateModelVideoThumbnails() {
    if (modelVideoThumbnailGrid) {
        modelVideoThumbnailGrid.innerHTML = '';
        modelVideos.forEach((video, index) => {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = 'thumbnail-item video-thumbnail';
            thumbnailDiv.setAttribute('data-index', index);
            const displayTitle = video.song || 'Loading...';
            thumbnailDiv.innerHTML = `
                <div class="video-info-overlay">
                    <h4 class="video-song-name">${displayTitle}</h4>
                </div>
                <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="${displayTitle}" onerror="this.src='https://img.youtube.com/vi/${video.id}/hqdefault.jpg'">
                <div class="play-icon">▶</div>
            `;
            modelVideoThumbnailGrid.appendChild(thumbnailDiv);
        });
        
        // Add click handlers to new thumbnails
        const newThumbnails = modelVideoThumbnailGrid.querySelectorAll('.video-thumbnail');
        newThumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener('click', () => {
                const index = parseInt(thumbnail.getAttribute('data-index'));
                showLargeModelVideoView(index);
            });
        });
    }
}

// Fetch model video titles from YouTube oEmbed API
async function fetchModelVideoTitles() {
    const promises = modelVideos.map(async (video, index) => {
        try {
            let oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`;
            let response;
            
            try {
                response = await fetch(oembedUrl);
            } catch (e) {
                oembedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`)}`;
                response = await fetch(oembedUrl);
            }
            
            const data = await response.json();
            
            if (data && data.title) {
                video.song = data.title;
                updateModelVideoTitle(index, video.song);
            }
        } catch (error) {
            console.error(`Error fetching title for model video ${video.id}:`, error);
            video.song = `Model Shoot ${index + 1}`;
        }
    });
    
    await Promise.all(promises);
    if (typeof generateModelVideoThumbnails === 'function') {
        generateModelVideoThumbnails();
    }
}

// Update model video title in the UI
function updateModelVideoTitle(index, title) {
    const thumbnail = document.querySelector(`#modelVideoThumbnailGrid .video-thumbnail[data-index="${index}"]`);
    if (thumbnail) {
        const songNameEl = thumbnail.querySelector('.video-song-name');
        if (songNameEl) songNameEl.textContent = title;
    }
}

// Open modal when clicking model video cover
if (modelVideoTrigger && modelVideoModal) {
    modelVideoTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        modelVideoModal.classList.add('active');
        showModelVideoThumbnailView();
        document.body.style.overflow = 'hidden';
    });
}

// Close modal
const modelVideoModalClose = document.querySelector('.model-modal-close');
if (modelVideoModalClose) {
    modelVideoModalClose.addEventListener('click', () => {
        closeModelVideoModal();
    });
}

// Close modal when clicking outside (only in thumbnail view)
if (modelVideoModal) {
    modelVideoModal.addEventListener('click', (e) => {
        if (e.target === modelVideoModal && !isModelVideoLargeView) {
            closeModelVideoModal();
        }
    });
}

// Show thumbnail view
function showModelVideoThumbnailView() {
    isModelVideoLargeView = false;
    if (modelVideoThumbnails) modelVideoThumbnails.style.display = 'block';
    if (modelVideoGalleryView) modelVideoGalleryView.style.display = 'none';
}

// Show large video view
function showLargeModelVideoView(index) {
    isModelVideoLargeView = true;
    currentModelVideoIndex = index;
    const video = modelVideos[index];
    
    if (modelVideoThumbnails) modelVideoThumbnails.style.display = 'none';
    if (modelVideoGalleryView) modelVideoGalleryView.style.display = 'block';
    
    // Update video info
    if (modelVideoSongTitle) modelVideoSongTitle.textContent = video.song;
    if (modelLargeVideoThumbnail) {
        modelLargeVideoThumbnail.src = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
        modelLargeVideoThumbnail.onerror = function() {
            this.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
        };
    }
    
    // Update play button to open YouTube
    if (modelPlayButtonLarge) {
        modelPlayButtonLarge.onclick = () => {
            window.open(video.url, '_blank');
        };
    }
    
    if (modelVideoCurrent) {
        modelVideoCurrent.textContent = index + 1;
    }
}

function nextModelVideo() {
    if (!isModelVideoLargeView) return;
    currentModelVideoIndex = (currentModelVideoIndex + 1) % modelVideos.length;
    showLargeModelVideoView(currentModelVideoIndex);
}

function prevModelVideo() {
    if (!isModelVideoLargeView) return;
    currentModelVideoIndex = (currentModelVideoIndex - 1 + modelVideos.length) % modelVideos.length;
    showLargeModelVideoView(currentModelVideoIndex);
}

function closeModelVideoModal() {
    if (modelVideoModal) {
        modelVideoModal.classList.remove('active');
        showModelVideoThumbnailView();
        document.body.style.overflow = '';
    }
}

// Back to thumbnails button
if (backToModelVideoThumbnailsBtn) {
    backToModelVideoThumbnailsBtn.addEventListener('click', () => {
        showModelVideoThumbnailView();
    });
}

// Navigation buttons
if (modelVideoNext) {
    modelVideoNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextModelVideo();
    });
}

if (modelVideoPrev) {
    modelVideoPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevModelVideo();
    });
}

// Keyboard navigation (arrow keys) - only in large view
document.addEventListener('keydown', (e) => {
    if (modelVideoModal && modelVideoModal.classList.contains('active') && isModelVideoLargeView) {
        if (e.key === 'ArrowRight') {
            nextModelVideo();
        } else if (e.key === 'ArrowLeft') {
            prevModelVideo();
        } else if (e.key === 'Escape') {
            showModelVideoThumbnailView();
        }
    } else if (modelVideoModal && modelVideoModal.classList.contains('active') && !isModelVideoLargeView && e.key === 'Escape') {
        closeModelVideoModal();
    }
});

// Initialize model video thumbnails and fetch titles
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        generateModelVideoThumbnails();
        fetchModelVideoTitles();
    });
} else {
    generateModelVideoThumbnails();
    fetchModelVideoTitles();
}

// Short Film Video Gallery Setup
const shortFilmTrigger = document.querySelector('.short-film-gallery-trigger');
const shortFilmModal = document.getElementById('shortFilmModal');
const shortFilmThumbnails = document.getElementById('shortFilmThumbnails');
const shortFilmThumbnailGrid = document.getElementById('shortFilmThumbnailGrid');
const shortFilmGalleryView = document.getElementById('shortFilmGalleryView');
const shortFilmPrev = document.getElementById('shortFilmPrev');
const shortFilmNext = document.getElementById('shortFilmNext');
const shortFilmCurrent = document.getElementById('shortFilmCurrent');
const shortFilmTotal = document.getElementById('shortFilmTotal');
const backToShortFilmThumbnailsBtn = document.getElementById('backToShortFilmThumbnails');
const shortFilmVideoTitle = document.getElementById('shortFilmVideoTitle');
const shortFilmLargeThumbnail = document.getElementById('shortFilmLargeThumbnail');
const shortFilmPlayButtonLarge = document.getElementById('shortFilmPlayButtonLarge');

let currentShortFilmIndex = 0;
let isShortFilmLargeView = false;

if (shortFilmTotal) {
    shortFilmTotal.textContent = shortFilmVideos.length;
}

// Generate short film thumbnail grid dynamically
function generateShortFilmThumbnails() {
    if (shortFilmThumbnailGrid) {
        shortFilmThumbnailGrid.innerHTML = '';
        shortFilmVideos.forEach((video, index) => {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = 'thumbnail-item video-thumbnail';
            thumbnailDiv.setAttribute('data-index', index);
            const displayTitle = video.song || 'Loading...';
            // Use custom thumbnail if available, otherwise use YouTube thumbnail
            const thumbnailSrc = video.customThumbnail || `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
            const fallbackSrc = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
            thumbnailDiv.innerHTML = `
                <div class="video-info-overlay">
                    <h4 class="video-song-name">${displayTitle}</h4>
                </div>
                <img src="${thumbnailSrc}" alt="${displayTitle}" onerror="this.src='${fallbackSrc}'">
                <div class="play-icon">▶</div>
            `;
            shortFilmThumbnailGrid.appendChild(thumbnailDiv);
        });
        
        // Add click handlers to new thumbnails
        const newThumbnails = shortFilmThumbnailGrid.querySelectorAll('.video-thumbnail');
        newThumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener('click', () => {
                const index = parseInt(thumbnail.getAttribute('data-index'));
                showLargeShortFilmView(index);
            });
        });
    }
}

// Fetch short film titles from YouTube oEmbed API
async function fetchShortFilmTitles() {
    const promises = shortFilmVideos.map(async (video, index) => {
        try {
            let oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`;
            let response;
            
            try {
                response = await fetch(oembedUrl);
            } catch (e) {
                oembedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`)}`;
                response = await fetch(oembedUrl);
            }
            
            const data = await response.json();
            
            if (data && data.title) {
                video.song = data.title;
                updateShortFilmTitle(index, video.song);
            }
        } catch (error) {
            console.error(`Error fetching title for short film ${video.id}:`, error);
            video.song = `Short Film ${index + 1}`;
        }
    });
    
    await Promise.all(promises);
    if (typeof generateShortFilmThumbnails === 'function') {
        generateShortFilmThumbnails();
    }
}

// Update short film title in the UI
function updateShortFilmTitle(index, title) {
    const thumbnail = document.querySelector(`#shortFilmThumbnailGrid .video-thumbnail[data-index="${index}"]`);
    if (thumbnail) {
        const songNameEl = thumbnail.querySelector('.video-song-name');
        if (songNameEl) songNameEl.textContent = title;
    }
}

// Open modal when clicking short film cover
if (shortFilmTrigger && shortFilmModal) {
    shortFilmTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        shortFilmModal.classList.add('active');
        showShortFilmThumbnailView();
        document.body.style.overflow = 'hidden';
    });
}

// Close modal
const shortFilmModalClose = document.querySelector('.short-film-modal-close');
if (shortFilmModalClose) {
    shortFilmModalClose.addEventListener('click', () => {
        closeShortFilmModal();
    });
}

// Close modal when clicking outside (only in thumbnail view)
if (shortFilmModal) {
    shortFilmModal.addEventListener('click', (e) => {
        if (e.target === shortFilmModal && !isShortFilmLargeView) {
            closeShortFilmModal();
        }
    });
}

// Show thumbnail view
function showShortFilmThumbnailView() {
    isShortFilmLargeView = false;
    if (shortFilmThumbnails) shortFilmThumbnails.style.display = 'block';
    if (shortFilmGalleryView) shortFilmGalleryView.style.display = 'none';
}

// Show large video view
function showLargeShortFilmView(index) {
    isShortFilmLargeView = true;
    currentShortFilmIndex = index;
    const video = shortFilmVideos[index];
    
    if (shortFilmThumbnails) shortFilmThumbnails.style.display = 'none';
    if (shortFilmGalleryView) shortFilmGalleryView.style.display = 'block';
    
    // Update video info
    if (shortFilmVideoTitle) shortFilmVideoTitle.textContent = video.song;
    if (shortFilmLargeThumbnail) {
        // Use custom thumbnail if available, otherwise use YouTube thumbnail
        const thumbnailSrc = video.customThumbnail || `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
        const fallbackSrc = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
        shortFilmLargeThumbnail.src = thumbnailSrc;
        shortFilmLargeThumbnail.onerror = function() {
            this.src = fallbackSrc;
        };
    }
    
    // Update play button to open YouTube
    if (shortFilmPlayButtonLarge) {
        shortFilmPlayButtonLarge.onclick = () => {
            window.open(video.url, '_blank');
        };
    }
    
    if (shortFilmCurrent) {
        shortFilmCurrent.textContent = index + 1;
    }
}

function nextShortFilm() {
    if (!isShortFilmLargeView) return;
    currentShortFilmIndex = (currentShortFilmIndex + 1) % shortFilmVideos.length;
    showLargeShortFilmView(currentShortFilmIndex);
}

function prevShortFilm() {
    if (!isShortFilmLargeView) return;
    currentShortFilmIndex = (currentShortFilmIndex - 1 + shortFilmVideos.length) % shortFilmVideos.length;
    showLargeShortFilmView(currentShortFilmIndex);
}

function closeShortFilmModal() {
    if (shortFilmModal) {
        shortFilmModal.classList.remove('active');
        showShortFilmThumbnailView();
        document.body.style.overflow = '';
    }
}

// Back to thumbnails button
if (backToShortFilmThumbnailsBtn) {
    backToShortFilmThumbnailsBtn.addEventListener('click', () => {
        showShortFilmThumbnailView();
    });
}

// Navigation buttons
if (shortFilmNext) {
    shortFilmNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextShortFilm();
    });
}

if (shortFilmPrev) {
    shortFilmPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevShortFilm();
    });
}

// Keyboard navigation (arrow keys) - only in large view
document.addEventListener('keydown', (e) => {
    if (shortFilmModal && shortFilmModal.classList.contains('active') && isShortFilmLargeView) {
        if (e.key === 'ArrowRight') {
            nextShortFilm();
        } else if (e.key === 'ArrowLeft') {
            prevShortFilm();
        } else if (e.key === 'Escape') {
            showShortFilmThumbnailView();
        }
    } else if (shortFilmModal && shortFilmModal.classList.contains('active') && !isShortFilmLargeView && e.key === 'Escape') {
        closeShortFilmModal();
    }
});

// Initialize short film thumbnails and fetch titles
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        generateShortFilmThumbnails();
        fetchShortFilmTitles();
    });
} else {
    generateShortFilmThumbnails();
    fetchShortFilmTitles();
}

// Event Video Gallery Setup
const eventTrigger = document.querySelector('.event-gallery-trigger');
const eventModal = document.getElementById('eventModal');
const eventThumbnails = document.getElementById('eventThumbnails');
const eventThumbnailGrid = document.getElementById('eventThumbnailGrid');
const eventGalleryView = document.getElementById('eventGalleryView');
const eventPrev = document.getElementById('eventPrev');
const eventNext = document.getElementById('eventNext');
const eventCurrent = document.getElementById('eventCurrent');
const eventTotal = document.getElementById('eventTotal');
const backToEventThumbnailsBtn = document.getElementById('backToEventThumbnails');
const eventVideoTitle = document.getElementById('eventVideoTitle');
const eventLargeThumbnail = document.getElementById('eventLargeThumbnail');
const eventPlayButtonLarge = document.getElementById('eventPlayButtonLarge');

let currentEventIndex = 0;
let isEventLargeView = false;

if (eventTotal) {
    eventTotal.textContent = eventVideos.length;
}

// Generate event thumbnail grid dynamically
function generateEventThumbnails() {
    if (eventThumbnailGrid) {
        eventThumbnailGrid.innerHTML = '';
        eventVideos.forEach((video, index) => {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = 'thumbnail-item video-thumbnail';
            thumbnailDiv.setAttribute('data-index', index);
            const displayTitle = video.song || 'Loading...';
            thumbnailDiv.innerHTML = `
                <div class="video-info-overlay">
                    <h4 class="video-song-name">${displayTitle}</h4>
                </div>
                <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="${displayTitle}" onerror="this.src='https://img.youtube.com/vi/${video.id}/hqdefault.jpg'">
                <div class="play-icon">▶</div>
            `;
            eventThumbnailGrid.appendChild(thumbnailDiv);
        });
        
        // Add click handlers to new thumbnails
        const newThumbnails = eventThumbnailGrid.querySelectorAll('.video-thumbnail');
        newThumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener('click', () => {
                const index = parseInt(thumbnail.getAttribute('data-index'));
                showLargeEventView(index);
            });
        });
    }
}

// Fetch event video titles from YouTube oEmbed API
async function fetchEventTitles() {
    const promises = eventVideos.map(async (video, index) => {
        try {
            let oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`;
            let response;
            
            try {
                response = await fetch(oembedUrl);
            } catch (e) {
                oembedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`)}`;
                response = await fetch(oembedUrl);
            }
            
            const data = await response.json();
            
            if (data && data.title) {
                video.song = data.title;
                updateEventTitle(index, video.song);
            }
        } catch (error) {
            console.error(`Error fetching title for event video ${video.id}:`, error);
            video.song = `Event ${index + 1}`;
        }
    });
    
    await Promise.all(promises);
    if (typeof generateEventThumbnails === 'function') {
        generateEventThumbnails();
    }
}

// Update event video title in the UI
function updateEventTitle(index, title) {
    const thumbnail = document.querySelector(`#eventThumbnailGrid .video-thumbnail[data-index="${index}"]`);
    if (thumbnail) {
        const songNameEl = thumbnail.querySelector('.video-song-name');
        if (songNameEl) songNameEl.textContent = title;
    }
}

// Open modal when clicking event cover
if (eventTrigger && eventModal) {
    eventTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        eventModal.classList.add('active');
        showEventThumbnailView();
        document.body.style.overflow = 'hidden';
    });
}

// Close modal
const eventModalClose = document.querySelector('.event-modal-close');
if (eventModalClose) {
    eventModalClose.addEventListener('click', () => {
        closeEventModal();
    });
}

// Close modal when clicking outside (only in thumbnail view)
if (eventModal) {
    eventModal.addEventListener('click', (e) => {
        if (e.target === eventModal && !isEventLargeView) {
            closeEventModal();
        }
    });
}

// Show thumbnail view
function showEventThumbnailView() {
    isEventLargeView = false;
    if (eventThumbnails) eventThumbnails.style.display = 'block';
    if (eventGalleryView) eventGalleryView.style.display = 'none';
}

// Show large video view
function showLargeEventView(index) {
    isEventLargeView = true;
    currentEventIndex = index;
    const video = eventVideos[index];
    
    if (eventThumbnails) eventThumbnails.style.display = 'none';
    if (eventGalleryView) eventGalleryView.style.display = 'block';
    
    // Update video info
    if (eventVideoTitle) eventVideoTitle.textContent = video.song;
    if (eventLargeThumbnail) {
        eventLargeThumbnail.src = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
        eventLargeThumbnail.onerror = function() {
            this.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
        };
    }
    
    // Update play button to open YouTube
    if (eventPlayButtonLarge) {
        eventPlayButtonLarge.onclick = () => {
            window.open(video.url, '_blank');
        };
    }
    
    if (eventCurrent) {
        eventCurrent.textContent = index + 1;
    }
}

function nextEvent() {
    if (!isEventLargeView) return;
    currentEventIndex = (currentEventIndex + 1) % eventVideos.length;
    showLargeEventView(currentEventIndex);
}

function prevEvent() {
    if (!isEventLargeView) return;
    currentEventIndex = (currentEventIndex - 1 + eventVideos.length) % eventVideos.length;
    showLargeEventView(currentEventIndex);
}

function closeEventModal() {
    if (eventModal) {
        eventModal.classList.remove('active');
        showEventThumbnailView();
        document.body.style.overflow = '';
    }
}

// Back to thumbnails button
if (backToEventThumbnailsBtn) {
    backToEventThumbnailsBtn.addEventListener('click', () => {
        showEventThumbnailView();
    });
}

// Navigation buttons
if (eventNext) {
    eventNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextEvent();
    });
}

if (eventPrev) {
    eventPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevEvent();
    });
}

// Keyboard navigation (arrow keys) - only in large view
document.addEventListener('keydown', (e) => {
    if (eventModal && eventModal.classList.contains('active') && isEventLargeView) {
        if (e.key === 'ArrowRight') {
            nextEvent();
        } else if (e.key === 'ArrowLeft') {
            prevEvent();
        } else if (e.key === 'Escape') {
            showEventThumbnailView();
        }
    } else if (eventModal && eventModal.classList.contains('active') && !isEventLargeView && e.key === 'Escape') {
        closeEventModal();
    }
});

// Initialize event thumbnails and fetch titles
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        generateEventThumbnails();
        fetchEventTitles();
    });
} else {
    generateEventThumbnails();
    fetchEventTitles();
}

// Wedding Video Gallery Setup
const weddingTrigger = document.querySelector('.wedding-gallery-trigger');
const weddingModal = document.getElementById('weddingModal');
const weddingThumbnails = document.getElementById('weddingThumbnails');
const weddingThumbnailGrid = document.getElementById('weddingThumbnailGrid');
const weddingGalleryView = document.getElementById('weddingGalleryView');
const weddingPrev = document.getElementById('weddingPrev');
const weddingNext = document.getElementById('weddingNext');
const weddingCurrent = document.getElementById('weddingCurrent');
const weddingTotal = document.getElementById('weddingTotal');
const backToWeddingThumbnailsBtn = document.getElementById('backToWeddingThumbnails');
const weddingVideoTitle = document.getElementById('weddingVideoTitle');
const weddingLargeThumbnail = document.getElementById('weddingLargeThumbnail');
const weddingPlayButtonLarge = document.getElementById('weddingPlayButtonLarge');

let currentWeddingIndex = 0;
let isWeddingLargeView = false;

if (weddingTotal) {
    weddingTotal.textContent = weddingVideos.length;
}

// Generate wedding thumbnail grid dynamically
function generateWeddingThumbnails() {
    if (weddingThumbnailGrid) {
        weddingThumbnailGrid.innerHTML = '';
        weddingVideos.forEach((video, index) => {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = 'thumbnail-item video-thumbnail';
            thumbnailDiv.setAttribute('data-index', index);
            const displayTitle = video.song || 'Loading...';
            // Use custom thumbnail if available, otherwise use YouTube thumbnail
            const thumbnailSrc = video.customThumbnail || `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
            const fallbackSrc = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
            thumbnailDiv.innerHTML = `
                <div class="video-info-overlay">
                    <h4 class="video-song-name">${displayTitle}</h4>
                </div>
                <img src="${thumbnailSrc}" alt="${displayTitle}" onerror="this.src='${fallbackSrc}'">
                <div class="play-icon">▶</div>
            `;
            weddingThumbnailGrid.appendChild(thumbnailDiv);
        });
        
        // Add click handlers to new thumbnails
        const newThumbnails = weddingThumbnailGrid.querySelectorAll('.video-thumbnail');
        newThumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener('click', () => {
                const index = parseInt(thumbnail.getAttribute('data-index'));
                showLargeWeddingView(index);
            });
        });
    }
}

// Fetch wedding video titles from YouTube oEmbed API
async function fetchWeddingTitles() {
    const promises = weddingVideos.map(async (video, index) => {
        try {
            let oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`;
            let response;
            
            try {
                response = await fetch(oembedUrl);
            } catch (e) {
                oembedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`)}`;
                response = await fetch(oembedUrl);
            }
            
            const data = await response.json();
            
            if (data && data.title) {
                video.song = data.title;
                updateWeddingTitle(index, video.song);
            }
        } catch (error) {
            console.error(`Error fetching title for wedding video ${video.id}:`, error);
            video.song = `Wedding ${index + 1}`;
        }
    });
    
    await Promise.all(promises);
    if (typeof generateWeddingThumbnails === 'function') {
        generateWeddingThumbnails();
    }
}

// Update wedding video title in the UI
function updateWeddingTitle(index, title) {
    const thumbnail = document.querySelector(`#weddingThumbnailGrid .video-thumbnail[data-index="${index}"]`);
    if (thumbnail) {
        const songNameEl = thumbnail.querySelector('.video-song-name');
        if (songNameEl) songNameEl.textContent = title;
    }
}

// Open modal when clicking wedding cover
if (weddingTrigger && weddingModal) {
    weddingTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        weddingModal.classList.add('active');
        showWeddingThumbnailView();
        document.body.style.overflow = 'hidden';
    });
}

// Close modal
const weddingModalClose = document.querySelector('.wedding-modal-close');
if (weddingModalClose) {
    weddingModalClose.addEventListener('click', () => {
        closeWeddingModal();
    });
}

// Close modal when clicking outside (only in thumbnail view)
if (weddingModal) {
    weddingModal.addEventListener('click', (e) => {
        if (e.target === weddingModal && !isWeddingLargeView) {
            closeWeddingModal();
        }
    });
}

// Show thumbnail view
function showWeddingThumbnailView() {
    isWeddingLargeView = false;
    if (weddingThumbnails) weddingThumbnails.style.display = 'block';
    if (weddingGalleryView) weddingGalleryView.style.display = 'none';
}

// Show large video view
function showLargeWeddingView(index) {
    isWeddingLargeView = true;
    currentWeddingIndex = index;
    const video = weddingVideos[index];
    
    if (weddingThumbnails) weddingThumbnails.style.display = 'none';
    if (weddingGalleryView) weddingGalleryView.style.display = 'block';
    
    // Update video info
    if (weddingVideoTitle) weddingVideoTitle.textContent = video.song;
    if (weddingLargeThumbnail) {
        // Use custom thumbnail if available, otherwise use YouTube thumbnail
        const thumbnailSrc = video.customThumbnail || `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
        const fallbackSrc = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
        weddingLargeThumbnail.src = thumbnailSrc;
        weddingLargeThumbnail.onerror = function() {
            this.src = fallbackSrc;
        };
    }
    
    // Update play button to open YouTube
    if (weddingPlayButtonLarge) {
        weddingPlayButtonLarge.onclick = () => {
            window.open(video.url, '_blank');
        };
    }
    
    if (weddingCurrent) {
        weddingCurrent.textContent = index + 1;
    }
}

function nextWedding() {
    if (!isWeddingLargeView) return;
    currentWeddingIndex = (currentWeddingIndex + 1) % weddingVideos.length;
    showLargeWeddingView(currentWeddingIndex);
}

function prevWedding() {
    if (!isWeddingLargeView) return;
    currentWeddingIndex = (currentWeddingIndex - 1 + weddingVideos.length) % weddingVideos.length;
    showLargeWeddingView(currentWeddingIndex);
}

function closeWeddingModal() {
    if (weddingModal) {
        weddingModal.classList.remove('active');
        showWeddingThumbnailView();
        document.body.style.overflow = '';
    }
}

// Back to thumbnails button
if (backToWeddingThumbnailsBtn) {
    backToWeddingThumbnailsBtn.addEventListener('click', () => {
        showWeddingThumbnailView();
    });
}

// Navigation buttons
if (weddingNext) {
    weddingNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextWedding();
    });
}

if (weddingPrev) {
    weddingPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevWedding();
    });
}

// Keyboard navigation (arrow keys) - only in large view
document.addEventListener('keydown', (e) => {
    if (weddingModal && weddingModal.classList.contains('active') && isWeddingLargeView) {
        if (e.key === 'ArrowRight') {
            nextWedding();
        } else if (e.key === 'ArrowLeft') {
            prevWedding();
        } else if (e.key === 'Escape') {
            showWeddingThumbnailView();
        }
    } else if (weddingModal && weddingModal.classList.contains('active') && !isWeddingLargeView && e.key === 'Escape') {
        closeWeddingModal();
    }
});

// Initialize wedding thumbnails and fetch titles
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        generateWeddingThumbnails();
        fetchWeddingTitles();
    });
} else {
    generateWeddingThumbnails();
    fetchWeddingTitles();
}

// Commercial Video Gallery Setup
const commercialTrigger = document.querySelector('.commercial-gallery-trigger');
const commercialModal = document.getElementById('commercialModal');
const commercialThumbnails = document.getElementById('commercialThumbnails');
const commercialThumbnailGrid = document.getElementById('commercialThumbnailGrid');
const commercialGalleryView = document.getElementById('commercialGalleryView');
const commercialPrev = document.getElementById('commercialPrev');
const commercialNext = document.getElementById('commercialNext');
const commercialCurrent = document.getElementById('commercialCurrent');
const commercialTotal = document.getElementById('commercialTotal');
const backToCommercialThumbnailsBtn = document.getElementById('backToCommercialThumbnails');
const commercialVideoTitle = document.getElementById('commercialVideoTitle');
const commercialLargeThumbnail = document.getElementById('commercialLargeThumbnail');
const commercialPlayButtonLarge = document.getElementById('commercialPlayButtonLarge');

let currentCommercialIndex = 0;
let isCommercialLargeView = false;

if (commercialTotal) {
    commercialTotal.textContent = commercialVideos.length;
}

// Generate commercial thumbnail grid dynamically
function generateCommercialThumbnails() {
    if (commercialThumbnailGrid) {
        commercialThumbnailGrid.innerHTML = '';
        commercialVideos.forEach((video, index) => {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = 'thumbnail-item video-thumbnail';
            thumbnailDiv.setAttribute('data-index', index);
            const displayTitle = video.song || 'Loading...';
            thumbnailDiv.innerHTML = `
                <div class="video-info-overlay">
                    <h4 class="video-song-name">${displayTitle}</h4>
                </div>
                <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="${displayTitle}" onerror="this.src='https://img.youtube.com/vi/${video.id}/hqdefault.jpg'">
                <div class="play-icon">▶</div>
            `;
            commercialThumbnailGrid.appendChild(thumbnailDiv);
        });
        
        // Add click handlers to new thumbnails
        const newThumbnails = commercialThumbnailGrid.querySelectorAll('.video-thumbnail');
        newThumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener('click', () => {
                const index = parseInt(thumbnail.getAttribute('data-index'));
                showLargeCommercialView(index);
            });
        });
    }
}

// Fetch commercial video titles from YouTube oEmbed API
async function fetchCommercialTitles() {
    const promises = commercialVideos.map(async (video, index) => {
        try {
            let oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`;
            let response;
            
            try {
                response = await fetch(oembedUrl);
            } catch (e) {
                oembedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`)}`;
                response = await fetch(oembedUrl);
            }
            
            const data = await response.json();
            
            if (data && data.title) {
                video.song = data.title;
                updateCommercialTitle(index, video.song);
            }
        } catch (error) {
            console.error(`Error fetching title for commercial video ${video.id}:`, error);
            video.song = `Commercial ${index + 1}`;
        }
    });
    
    await Promise.all(promises);
    if (typeof generateCommercialThumbnails === 'function') {
        generateCommercialThumbnails();
    }
}

// Update commercial video title in the UI
function updateCommercialTitle(index, title) {
    const thumbnail = document.querySelector(`#commercialThumbnailGrid .video-thumbnail[data-index="${index}"]`);
    if (thumbnail) {
        const songNameEl = thumbnail.querySelector('.video-song-name');
        if (songNameEl) songNameEl.textContent = title;
    }
}

// Open modal when clicking commercial cover
if (commercialTrigger && commercialModal) {
    commercialTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        commercialModal.classList.add('active');
        showCommercialThumbnailView();
        document.body.style.overflow = 'hidden';
    });
}

// Close modal
const commercialModalClose = document.querySelector('.commercial-modal-close');
if (commercialModalClose) {
    commercialModalClose.addEventListener('click', () => {
        closeCommercialModal();
    });
}

// Close modal when clicking outside (only in thumbnail view)
if (commercialModal) {
    commercialModal.addEventListener('click', (e) => {
        if (e.target === commercialModal && !isCommercialLargeView) {
            closeCommercialModal();
        }
    });
}

// Show thumbnail view
function showCommercialThumbnailView() {
    isCommercialLargeView = false;
    if (commercialThumbnails) commercialThumbnails.style.display = 'block';
    if (commercialGalleryView) commercialGalleryView.style.display = 'none';
}

// Show large video view
function showLargeCommercialView(index) {
    isCommercialLargeView = true;
    currentCommercialIndex = index;
    const video = commercialVideos[index];
    
    if (commercialThumbnails) commercialThumbnails.style.display = 'none';
    if (commercialGalleryView) commercialGalleryView.style.display = 'block';
    
    // Update video info
    if (commercialVideoTitle) commercialVideoTitle.textContent = video.song;
    if (commercialLargeThumbnail) {
        commercialLargeThumbnail.src = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
        commercialLargeThumbnail.onerror = function() {
            this.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
        };
    }
    
    // Update play button to open YouTube
    if (commercialPlayButtonLarge) {
        commercialPlayButtonLarge.onclick = () => {
            window.open(video.url, '_blank');
        };
    }
    
    if (commercialCurrent) {
        commercialCurrent.textContent = index + 1;
    }
}

function nextCommercial() {
    if (!isCommercialLargeView) return;
    currentCommercialIndex = (currentCommercialIndex + 1) % commercialVideos.length;
    showLargeCommercialView(currentCommercialIndex);
}

function prevCommercial() {
    if (!isCommercialLargeView) return;
    currentCommercialIndex = (currentCommercialIndex - 1 + commercialVideos.length) % commercialVideos.length;
    showLargeCommercialView(currentCommercialIndex);
}

function closeCommercialModal() {
    if (commercialModal) {
        commercialModal.classList.remove('active');
        showCommercialThumbnailView();
        document.body.style.overflow = '';
    }
}

// Back to thumbnails button
if (backToCommercialThumbnailsBtn) {
    backToCommercialThumbnailsBtn.addEventListener('click', () => {
        showCommercialThumbnailView();
    });
}

// Navigation buttons
if (commercialNext) {
    commercialNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextCommercial();
    });
}

if (commercialPrev) {
    commercialPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevCommercial();
    });
}

// Keyboard navigation (arrow keys) - only in large view
document.addEventListener('keydown', (e) => {
    if (commercialModal && commercialModal.classList.contains('active') && isCommercialLargeView) {
        if (e.key === 'ArrowRight') {
            nextCommercial();
        } else if (e.key === 'ArrowLeft') {
            prevCommercial();
        } else if (e.key === 'Escape') {
            showCommercialThumbnailView();
        }
    } else if (commercialModal && commercialModal.classList.contains('active') && !isCommercialLargeView && e.key === 'Escape') {
        closeCommercialModal();
    }
});

// Initialize commercial thumbnails and fetch titles
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        generateCommercialThumbnails();
        fetchCommercialTitles();
    });
} else {
    generateCommercialThumbnails();
    fetchCommercialTitles();
}

// Real Estate Video Gallery Setup
const realEstateTrigger = document.querySelector('.real-estate-gallery-trigger');
const realEstateModal = document.getElementById('realEstateModal');
const realEstateThumbnails = document.getElementById('realEstateThumbnails');
const realEstateThumbnailGrid = document.getElementById('realEstateThumbnailGrid');
const realEstateGalleryView = document.getElementById('realEstateGalleryView');
const realEstatePrev = document.getElementById('realEstatePrev');
const realEstateNext = document.getElementById('realEstateNext');
const realEstateCurrent = document.getElementById('realEstateCurrent');
const realEstateTotal = document.getElementById('realEstateTotal');
const backToRealEstateThumbnailsBtn = document.getElementById('backToRealEstateThumbnails');
const realEstateVideoTitle = document.getElementById('realEstateVideoTitle');
const realEstateLargeThumbnail = document.getElementById('realEstateLargeThumbnail');
const realEstatePlayButtonLarge = document.getElementById('realEstatePlayButtonLarge');

let currentRealEstateIndex = 0;
let isRealEstateLargeView = false;

if (realEstateTotal) {
    realEstateTotal.textContent = realEstateVideos.length;
}

// Generate real estate thumbnail grid dynamically
function generateRealEstateThumbnails() {
    if (realEstateThumbnailGrid) {
        realEstateThumbnailGrid.innerHTML = '';
        realEstateVideos.forEach((video, index) => {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = 'thumbnail-item video-thumbnail';
            thumbnailDiv.setAttribute('data-index', index);
            const displayTitle = video.song || 'Loading...';
            thumbnailDiv.innerHTML = `
                <div class="video-info-overlay">
                    <h4 class="video-song-name">${displayTitle}</h4>
                </div>
                <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="${displayTitle}" onerror="this.src='https://img.youtube.com/vi/${video.id}/hqdefault.jpg'">
                <div class="play-icon">▶</div>
            `;
            realEstateThumbnailGrid.appendChild(thumbnailDiv);
        });
        
        // Add click handlers to new thumbnails
        const newThumbnails = realEstateThumbnailGrid.querySelectorAll('.video-thumbnail');
        newThumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener('click', () => {
                const index = parseInt(thumbnail.getAttribute('data-index'));
                showLargeRealEstateView(index);
            });
        });
    }
}

// Fetch real estate video titles from YouTube oEmbed API
async function fetchRealEstateTitles() {
    const promises = realEstateVideos.map(async (video, index) => {
        try {
            let oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`;
            let response;
            
            try {
                response = await fetch(oembedUrl);
            } catch (e) {
                oembedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`)}`;
                response = await fetch(oembedUrl);
            }
            
            const data = await response.json();
            
            if (data && data.title) {
                video.song = data.title;
                updateRealEstateTitle(index, video.song);
            }
        } catch (error) {
            console.error(`Error fetching title for real estate video ${video.id}:`, error);
            video.song = `Property ${index + 1}`;
        }
    });
    
    await Promise.all(promises);
    if (typeof generateRealEstateThumbnails === 'function') {
        generateRealEstateThumbnails();
    }
}

// Update real estate video title in the UI
function updateRealEstateTitle(index, title) {
    const thumbnail = document.querySelector(`#realEstateThumbnailGrid .video-thumbnail[data-index="${index}"]`);
    if (thumbnail) {
        const songNameEl = thumbnail.querySelector('.video-song-name');
        if (songNameEl) songNameEl.textContent = title;
    }
}

// Open modal when clicking real estate cover
if (realEstateTrigger && realEstateModal) {
    realEstateTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        realEstateModal.classList.add('active');
        showRealEstateThumbnailView();
        document.body.style.overflow = 'hidden';
    });
}

// Close modal
const realEstateModalClose = document.querySelector('.real-estate-modal-close');
if (realEstateModalClose) {
    realEstateModalClose.addEventListener('click', () => {
        closeRealEstateModal();
    });
}

// Close modal when clicking outside (only in thumbnail view)
if (realEstateModal) {
    realEstateModal.addEventListener('click', (e) => {
        if (e.target === realEstateModal && !isRealEstateLargeView) {
            closeRealEstateModal();
        }
    });
}

// Show thumbnail view
function showRealEstateThumbnailView() {
    isRealEstateLargeView = false;
    if (realEstateThumbnails) realEstateThumbnails.style.display = 'block';
    if (realEstateGalleryView) realEstateGalleryView.style.display = 'none';
}

// Show large video view
function showLargeRealEstateView(index) {
    isRealEstateLargeView = true;
    currentRealEstateIndex = index;
    const video = realEstateVideos[index];
    
    if (realEstateThumbnails) realEstateThumbnails.style.display = 'none';
    if (realEstateGalleryView) realEstateGalleryView.style.display = 'block';
    
    // Update video info
    if (realEstateVideoTitle) realEstateVideoTitle.textContent = video.song;
    if (realEstateLargeThumbnail) {
        realEstateLargeThumbnail.src = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
        realEstateLargeThumbnail.onerror = function() {
            this.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
        };
    }
    
    // Update play button to open YouTube
    if (realEstatePlayButtonLarge) {
        realEstatePlayButtonLarge.onclick = () => {
            window.open(video.url, '_blank');
        };
    }
    
    if (realEstateCurrent) {
        realEstateCurrent.textContent = index + 1;
    }
}

function nextRealEstate() {
    if (!isRealEstateLargeView) return;
    currentRealEstateIndex = (currentRealEstateIndex + 1) % realEstateVideos.length;
    showLargeRealEstateView(currentRealEstateIndex);
}

function prevRealEstate() {
    if (!isRealEstateLargeView) return;
    currentRealEstateIndex = (currentRealEstateIndex - 1 + realEstateVideos.length) % realEstateVideos.length;
    showLargeRealEstateView(currentRealEstateIndex);
}

function closeRealEstateModal() {
    if (realEstateModal) {
        realEstateModal.classList.remove('active');
        showRealEstateThumbnailView();
        document.body.style.overflow = '';
    }
}

// Back to thumbnails button
if (backToRealEstateThumbnailsBtn) {
    backToRealEstateThumbnailsBtn.addEventListener('click', () => {
        showRealEstateThumbnailView();
    });
}

// Navigation buttons
if (realEstateNext) {
    realEstateNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextRealEstate();
    });
}

if (realEstatePrev) {
    realEstatePrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevRealEstate();
    });
}

// Keyboard navigation (arrow keys) - only in large view
document.addEventListener('keydown', (e) => {
    if (realEstateModal && realEstateModal.classList.contains('active') && isRealEstateLargeView) {
        if (e.key === 'ArrowRight') {
            nextRealEstate();
        } else if (e.key === 'ArrowLeft') {
            prevRealEstate();
        } else if (e.key === 'Escape') {
            showRealEstateThumbnailView();
        }
    } else if (realEstateModal && realEstateModal.classList.contains('active') && !isRealEstateLargeView && e.key === 'Escape') {
        closeRealEstateModal();
    }
});

// Initialize real estate thumbnails and fetch titles
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        generateRealEstateThumbnails();
        fetchRealEstateTitles();
    });
} else {
    generateRealEstateThumbnails();
    fetchRealEstateTitles();
}
