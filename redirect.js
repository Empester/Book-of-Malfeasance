
const fullURL = window.location.href;

const path = fullURL.substring(fullURL.lastIndexOf('/') + 1).split('.')[0];

if (fullURL.includes('.html')) {
  const newURL = `${window.location.origin}${window.location.pathname.replace('.html', '')}`;
  window.history.replaceState(null, '', newURL);
}

