
// Get the full URL
const fullURL = window.location.href;

// Extract the file name without the extension
const path = fullURL.substring(fullURL.lastIndexOf('/') + 1).split('.')[0];

// Check if there's a file extension
if (fullURL.includes('.html')) {
  // Rewrite the URL without reloading the page
  const newURL = `${window.location.origin}${window.location.pathname.replace('.html', '')}`;
  window.history.replaceState(null, '', newURL);
}

