# E-Commerce Website

A modern, responsive e-commerce website built with HTML, CSS, and JavaScript.

![E-Commerce Website Preview](images/logo3.png)
[live demo ](https://ecommerce-three-murex.vercel.app/)

## Features

- **Responsive Design**: Works on all devices 
- **Product Showcase**: Beautiful product displays with image carousels and quick view options
- **Shopping Cart**: Add/remove items and manage quantities 
- **Product Categories**: Easy navigation through different product categories with mega menu
- **Product Details**: Detailed product pages with multiple images and specifications
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3 (with CSS Variables for theming)
  - Vanilla JavaScript
  - [Swiper.js](https://swiperjs.com/) - For touch-enabled sliders
  - [Font Awesome](https://fontawesome.com/) - For icons
  - [Google Fonts](https://fonts.google.com/) - For typography

## Project Structure

```
E-Commerce/
├── images/            # All image assets
├── product/           # Product-related pages
├── product card/      # Product card components
├── error/             # Error pages
├── index.html         # Main HTML file
├── script.js          # Main JavaScript file
├── slide.js           # Slider functionality
└── styel.css          # Main stylesheet (note: typo in filename)
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) A local web server for development (like Live Server in VS Code)

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd E-Commerce
   ```

3. Open `index.html` in your preferred web browser.

## Usage

1. Browse products on the homepage
2. Click on a product to view details
3. Add products to cart or wishlist
4. Proceed to checkout (Note: Checkout functionality needs to be implemented)

## Customization

### Changing Colors

Edit the CSS variables in `styel.css` to change the color scheme:

```css
:root {
    --primary: rgb(121, 91, 220);
    --white: #fff;
    --black: #222;
    --grey1: #3a3b3c;
    --grey2: #828282;
}
```

### Adding Products

Edit the `index.html` file to add or modify products in the product grid.



## Future Enhancements

- Implement user authentication
- Add product search functionality
- Create a proper checkout process
- Implement a backend with a database
- Add product reviews and ratings

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.




