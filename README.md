<div align="center">
    <img src="https://res.cloudinary.com/diwkfbsgv/image/upload/h_160/v1778657434/logo-light_pgwo14.png" alt="banner_img">
    <h1>ShopEase</h1>
</div>

<br />

ShopEase is a modern, lightweight e-commerce platform designed to make online shopping effortless.
Built with simplicity at its core, ShopEase connects everyday shoppers with a curated catalog of products .From clothing to electronics, all in one clean, intuitive interface.

## Tech stack

- Vite
- React
- CSS
- External APIs

## Features

- **Product display**
- **Search and filter functionality**
- **Cart managment**
    - Add products to and remove from cart
    - Product quantity adjustment
    - View total cart price
- **Responsive UI**

## Getting Started

### Installation

```bash
# Clone the repo
git clone https://github.com/sydomori/ShopEase.git

# Setup frontend
npm install
npm run dev
```

### Build

```bash
cd frontend
npm run build
```

## Project Structure

```
.
├── .git/                               # Git metadata
├── .gitignore                          # Git ignore rules
├── README.md                           # Project documentation
├── eslint.config.js                    # ESLint configuration
├── index.html                          # HTML entry point
├── package.json                        # Project config and scripts
├── package-lock.json                   # Locked dependency versions
├── vite.config.js                      # Vite configuration
├── public/                             # Static public assets
│   ├── favicon.svg                     # Site favicon
│   ├── icons.svg                       # Icon sprites
│   ├── logo-dark.png                   # Dark mode logo
│   ├── logo-light.png                  # Light mode logo
│   └── logo-org.png                    # Organisation logo
└── src/                                # Source code
    ├── App.css                         # App-level styles
    ├── App.jsx                         # Root React component
    ├── index.css                       # Global CSS entry
    ├── main.jsx                        # Application entry point
    ├── assets/                         # Static source assets
    │   ├── hero.png                    # Hero image
    │   ├── react.svg                   # React logo
    │   └── vite.svg                    # Vite logo
    ├── components/                     # React components
    │   ├── AddProductForm.jsx          # Form for adding products
    │   ├── Dashboard.jsx               # Dashboard view
    │   ├── ItemCard.jsx                # Individual item card
    │   └── NavBar.jsx                  # Navigation bar
    └── styles/                         # CSS Modules
        ├── AddProductForm.module.css   # Styles for AddProductForm
        ├── Global.modules.css          # Global shared styles
        ├── ItemCard.modules.css        # Styles for ItemCard
        └── NavBar.modules.css          # Styles for NavBar
```

## Notes

- 
