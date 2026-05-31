window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

window.gtag = window.gtag || gtag;

if (!document.querySelector('script[data-ga4-loader="tanegasima"]')) {
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-6YH4PCCE0R';
  gaScript.dataset.ga4Loader = 'tanegasima';
  document.head.appendChild(gaScript);
}

gtag('js', new Date());
gtag('config', 'G-6YH4PCCE0R');
