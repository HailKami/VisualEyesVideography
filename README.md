# Visual Eyes Videography Website

A modern, professional website for Visual Eyes Videography - Your Vision Becomes Reality.

## Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎬 Video portfolio showcase with filtering
- 📧 Contact form
- ⚡ Fast loading and SEO-friendly
- 🎨 Beautiful gradient hero section
- 🔍 Smooth scrolling navigation

## Getting Started

### Viewing the Website

1. Simply open `index.html` in your web browser
2. Or use a local server for better performance:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## File Structure

```
Jordan Site/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization

### Adding Your Videos

To add your actual videos to the portfolio:

1. **Option 1: YouTube/Vimeo Embeds**
   - Replace portfolio placeholders with iframe embeds
   - Update the portfolio items in `index.html`

2. **Option 2: Using JavaScript**
   - Edit `script.js` and use the `addVideoToPortfolio()` function:
   ```javascript
   addVideoToPortfolio('music-videos', 'https://youtube.com/watch?v=...', 'thumbnail.jpg');
   ```

### Adding Images

1. Create an `images` folder
2. Add your images there
3. Update image paths in `index.html`

### Updating Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #1a1a1a;      /* Main dark color */
    --secondary-color: #ff6b6b;    /* Accent/CTA color */
    --accent-color: #4ecdc4;       /* Secondary accent */
}
```

### Updating Contact Form

The contact form currently logs to console. To make it functional:

1. Set up a backend service (e.g., Formspree, Netlify Forms, or your own server)
2. Update the form submission handler in `script.js`
3. Replace the fetch URL with your endpoint

Example with Formspree:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
```

### Social Media Links

Update the social media links in the contact section of `index.html`:

```html
<a href="YOUR_FACEBOOK_URL" class="social-link">Facebook</a>
<a href="YOUR_INSTAGRAM_URL" class="social-link">Instagram</a>
```

## Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Push your files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `username.github.io/repository-name`

### Option 2: Netlify
1. Drag and drop your folder to [Netlify](https://netlify.com)
2. Your site is live instantly!

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Follow the prompts

### Option 4: Traditional Hosting
Upload all files via FTP to your web hosting provider.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Use WebP Format**: Better compression than JPEG/PNG
3. **Lazy Load Videos**: Only load videos when needed
4. **Minify CSS/JS**: Use tools like UglifyJS or CSSNano for production

## Credits

- Fonts: Google Fonts (Inter & Playfair Display)
- Design: Custom design for Visual Eyes Videography

## License

© 2024 Visual Eyes Videography. All rights reserved.

## Support

For questions or issues, contact:
- Email: jordandp1993@gmail.com
- Phone: 340-998-1720

