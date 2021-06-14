import '@fortawesome/fontawesome-svg-core/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './src/styles/main.scss';

// Because we need fontAwesome on ALL pages and not only on the index.js page
// Without this.. it won't work on the /pages/ like /404.js
require('./src/libraries/fontAwesome');
