# Flag Icons
Flag Icons is a CSS framework to use flag icons in web projects.

## Quick Start
Follow these simple steps and you are ready to go in less than one minute!

### 1. Include needed files into your project
Inlcude the flags folder and the CSS file into your project. If you want to customize the CSS or are using SCSS in the project, you can import flag-icons.scss and compile into your main CSS file instead.

### 2. Include the CSS in your HTML files

```html
<link rel="stylesheet" href="/PATH/flag-icons.min.css">
```

### 3. Add icons to your project
To add a flag to an element, add class `fi` followed by `fi-[COUNTRYCODE]`. Example:

```html
<i class="fi fi-se"></i>
```

## Configuration
If you are using flag-icons in a scss-project you can make some modifications.

### Image Path
Change `$image_path` to the path where the images ar located.

### Image Size
Change `$image_size` to the size of the images.

## Flags
Included flag images are created by Jonathan Allen and can also be downloaded from: http://365icon.com/icon-styles/ethnic/classic2/. These are free to use for personal and commercial projects.

You can use any images you want as long as they are named after the ISO 3166-1 alpha-2 standard (two-letter country code).



