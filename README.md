# DevOps Engineer Portfolio

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript, specifically designed for DevOps Engineers to showcase their skills and projects.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌓 Dark theme
- ⚡ Smooth animations
- 🎯 Interactive elements
- 💨 Fast loading
- 📝 Easy to customize

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/devops-portfolio.git
cd devops-portfolio
```

2. Open `index.html` in your browser to view the website.

## Customization

1. Update your personal information:
   - Edit the content in `index.html`
   - Replace profile and project images in the root directory
   - Update social media links in the contact section

2. Modify the color scheme:
   - Edit the CSS variables in `style.css`
   - Update animations and transitions as needed

3. Customize JavaScript functionality:
   - Modify typing animation text in `script.js`
   - Adjust animation timings and effects
   - Add or remove interactive features

## Project Structure

```
devops-portfolio/
├── index.html      # Main HTML file
├── style.css       # Styles and animations
├── script.js       # Interactive features
├── favicon.svg     # Site favicon
├── profile.jpg     # Your profile picture
└── project1.jpg    # Project screenshots
```

## Features in Detail

### 1. Responsive Navigation
- Smooth scrolling to sections
- Mobile-friendly menu
- Hide on scroll down, show on scroll up

### 2. Interactive Sections
- Animated typing effect in hero section
- Skill bars with animation
- Tab-based experience section
- Project cards with hover effects

### 3. Contact Form
- Responsive design
- Form validation
- Custom styling
- Success message display

### 4. Animations
- Fade-in animations
- Smooth transitions
- Hover effects
- Scroll-triggered animations

## Customizing Content

### Profile Section
Edit the following in `index.html`:
```html
<h1 class="name">Your Name</h1>
<h2 class="title" id="typing-text">DevOps Engineer</h2>
```

### Experience
Add new experiences in the experience section:
```html
<button class="tab-btn" data-company="company4">New Company</button>
<div class="tab-content" id="company4">
    <h3>Position <span>@ Company</span></h3>
    <p class="duration">Time Period</p>
    <ul class="job-description">
        <li>Achievement 1</li>
        <li>Achievement 2</li>
    </ul>
</div>
```

### Projects
Add new projects in the projects grid:
```html
<div class="project-card">
    <div class="project-image">
        <img src="project-image.jpg" alt="Project">
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project Description</p>
        <ul class="project-tech">
            <li>Technology 1</li>
            <li>Technology 2</li>
        </ul>
    </div>
</div>
```

## Browser Support

The website is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 