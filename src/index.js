import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assests/css/style.css'
import './assests/lib/bootstrap/css/bootstrap.min.css'
import './assests/lib/animate/animate.min.css'
import './assests/lib/lightbox/css/lightbox.min.css'
import './assests/lib/owlcarousel/assets/owl.carousel.min.css'
import './assests/lib/font-awesome/css/font-awesome.min.css'
import './assests/lib/ionicons/css/ionicons.min.css'



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
