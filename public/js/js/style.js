import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Theme Name: Rapid
  Theme URL: https://bootstrapmade.com/rapid-multipurpose-bootstrap-business-template/
  Author: BootstrapMade.com
  License: https://bootstrapmade.com/license/
  // --------------------------------------------------------------
# General
--------------------------------------------------------------
  'body': {
    'background': '#fff',
    'color': '#444',
    'fontFamily': '"Open Sans", sans-serif'
  },
  'a': {
    'color': '#1bb1dc',
    'transition': '0.5s'
  },
  'a:hover': {
    'color': '#0a98c0',
    'outline': 'none',
    'textDecoration': 'none'
  },
  'a:active': {
    'color': '#0a98c0',
    'outline': 'none',
    'textDecoration': 'none'
  },
  'a:focus': {
    'color': '#0a98c0',
    'outline': 'none',
    'textDecoration': 'none'
  },
  'p': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }]
  },
  'h1': {
    'fontFamily': '"Montserrat", sans-serif',
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'fontFamily': '"Montserrat", sans-serif',
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'fontFamily': '"Montserrat", sans-serif',
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h4': {
    'fontFamily': '"Montserrat", sans-serif',
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h5': {
    'fontFamily': '"Montserrat", sans-serif',
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h6': {
    'fontFamily': '"Montserrat", sans-serif',
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // Back to top button
  'back-to-top': {
    'position': 'fixed',
    'display': 'none',
    'background': '#1bb1dc',
    'color': '#fff',
    'width': [{ 'unit': 'px', 'value': 44 }],
    'height': [{ 'unit': 'px', 'value': 44 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'borderRadius': '50%',
    'right': [{ 'unit': 'px', 'value': 15 }],
    'bottom': [{ 'unit': 'px', 'value': 15 }],
    'transition': 'background 0.5s',
    'zIndex': '11',
    '<w768': {
      'bottom': [{ 'unit': 'px', 'value': 15 }]
    }
  },
  'back-to-top i': {
    'paddingTop': [{ 'unit': 'px', 'value': 12 }],
    'color': '#fff'
  },
  // Prelaoder
  '#preloader': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '9999',
    'overflow': 'hidden',
    'background': '#fff'
  },
  '#preloader:before': {
    'content': '""',
    'position': 'fixed',
    'top': [{ 'unit': '%V', 'value': NaN }],
    'left': [{ 'unit': '%H', 'value': NaN }],
    'border': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f2f2f2' }],
    'borderTop': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#1bb1dc' }],
    'borderRadius': '50%',
    'width': [{ 'unit': 'px', 'value': 60 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'WebkitAnimation': 'animate-preloader 1s linear infinite',
    'animation': 'animate-preloader 1s linear infinite'
  },
  // --------------------------------------------------------------
# Top Bar
--------------------------------------------------------------
  '#topbar': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'transition': 'all 0.5s',
    '<w991': {
      'display': 'none'
    }
  },
  '#topbar social-links': {
    'textAlign': 'right'
  },
  '#topbar social-links a': {
    'color': '#535074',
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 12 }],
    'display': 'inline-block',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }]
  },
  '#topbar social-links a:hover': {
    'color': '#1bb1dc'
  },
  '#topbar social-links a:first-child': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  // --------------------------------------------------------------
# Header
--------------------------------------------------------------
  '#header': {
    'height': [{ 'unit': 'px', 'value': 110 }],
    'transition': 'all 0.5s',
    'zIndex': '997',
    'transition': 'all 0.5s',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'position': 'fixed',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'all 0.5s',
    'zIndex': '997'
  },
  '#headerheader-scrolled': {
    'height': [{ 'unit': 'px', 'value': 70 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'rgba(127, 137, 161, 0.3)' }]
  },
  '#headerheader-pages': {
    'height': [{ 'unit': 'px', 'value': 70 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'rgba(127, 137, 161, 0.3)' }]
  },
  '#headerheader-scrolled #topbar': {
    'display': 'none'
  },
  '#headerheader-pages #topbar': {
    'display': 'none'
  },
  '#header logo h1': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'fontWeight': '400',
    'letterSpacing': [{ 'unit': 'px', 'value': 3 }],
    'textTransform': 'uppercase'
  },
  '#header logo h1 a': {
    'color': '#413e66',
    'textDecoration': 'none'
  },
  '#header logo h1 a:hover': {
    'color': '#413e66',
    'textDecoration': 'none'
  },
  '#header logo img': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }],
    'maxHeight': [{ 'unit': 'px', 'value': 26 }]
  },
  'main-pages': {
    'marginTop': [{ 'unit': 'px', 'value': 60 }]
  },
  // --------------------------------------------------------------
# Intro Section
--------------------------------------------------------------
  '#intro': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'position': 'relative',
    'background': '#f5f8fd url("../img/intro-bg.jpg") center top no-repeat',
    'backgroundSize': 'cover',
    '<w767': {
      'height': [{ 'unit': 'string', 'value': 'auto' }],
      'padding': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }]
    }
  },
  '#intro intro-info h2': {
    'color': '#413e66',
    'marginBottom': [{ 'unit': 'px', 'value': 40 }],
    'fontSize': [{ 'unit': 'px', 'value': 48 }],
    'fontWeight': '700'
  },
  '#intro intro-info h2 span': {
    'color': '#1bb1dc'
  },
  '#intro intro-info btn-get-started': {
    'fontFamily': '"Montserrat", sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'fontWeight': '600',
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 32 }],
    'borderRadius': '4px',
    'transition': '0.5s',
    'color': '#fff',
    'background': '#1bb1dc',
    'color': '#fff'
  },
  '#intro intro-info btn-services': {
    'fontFamily': '"Montserrat", sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'fontWeight': '600',
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 32 }],
    'borderRadius': '4px',
    'transition': '0.5s',
    'color': '#fff',
    'background': '#1bb1dc',
    'color': '#fff'
  },
  '#intro intro-info btn-get-started:hover': {
    'background': '#0a98c0'
  },
  '#intro intro-info btn-services:hover': {
    'background': '#0a98c0'
  },
  // --------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------
  // Desktop Navigation
  'main-nav': {
    // Drop Down
    // Deep Drop Down
  },
  'main-nav': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'main-nav *': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'main-nav > ul > li': {
    'position': 'relative',
    'whiteSpace': 'nowrap',
    'float': 'left'
  },
  'main-nav a': {
    'display': 'block',
    'position': 'relative',
    'color': '#413e66',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'transition': '0.3s',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontFamily': '"Open Sans", sans-serif',
    'textTransform': 'uppercase',
    'fontWeight': '600'
  },
  'main-nav a:hover': {
    'color': '#1bb1dc',
    'textDecoration': 'none'
  },
  'main-nav active > a': {
    'color': '#1bb1dc',
    'textDecoration': 'none'
  },
  'main-nav li:hover > a': {
    'color': '#1bb1dc',
    'textDecoration': 'none'
  },
  'main-nav drop-down ul': {
    'display': 'block',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': NaN }],
    'zIndex': '99',
    'opacity': '0',
    'visibility': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'background': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'rgba(127, 137, 161, 0.25)' }],
    'transition': 'ease all 0.3s'
  },
  'main-nav drop-down:hover > ul': {
    'opacity': '1',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'visibility': 'visible'
  },
  'main-nav drop-down li': {
    'minWidth': [{ 'unit': 'px', 'value': 180 }],
    'position': 'relative'
  },
  'main-nav drop-down ul a': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': '500',
    'textTransform': 'none',
    'color': '#065e77'
  },
  'main-nav drop-down ul a:hover': {
    'color': '#1bb1dc'
  },
  'main-nav drop-down ul active > a': {
    'color': '#1bb1dc'
  },
  'main-nav drop-down ul li:hover > a': {
    'color': '#1bb1dc'
  },
  'main-nav drop-down > a:after': {
    'content': '"\f107"',
    'fontFamily': 'FontAwesome',
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'main-nav drop-down drop-down ul': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'main-nav drop-down drop-down:hover > ul': {
    'opacity': '1',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 1 }]
  },
  'main-nav drop-down drop-down > a': {
    'paddingRight': [{ 'unit': 'px', 'value': 35 }]
  },
  'main-nav drop-down drop-down > a:after': {
    'content': '"\f105"',
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 15 }]
  },
  // Mobile Navigation
  'mobile-nav': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '9999',
    'overflowY': 'auto',
    'left': [{ 'unit': 'px', 'value': -260 }],
    'width': [{ 'unit': 'px', 'value': 260 }],
    'paddingTop': [{ 'unit': 'px', 'value': 18 }],
    'background': 'rgba(40, 38, 70, 0.8)',
    'transition': '0.4s'
  },
  'mobile-nav *': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'mobile-nav a': {
    'display': 'block',
    'position': 'relative',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'fontWeight': '500'
  },
  'mobile-nav a:hover': {
    'color': '#8dc2fa',
    'textDecoration': 'none'
  },
  'mobile-nav active > a': {
    'color': '#8dc2fa',
    'textDecoration': 'none'
  },
  'mobile-nav li:hover > a': {
    'color': '#8dc2fa',
    'textDecoration': 'none'
  },
  'mobile-nav drop-down > a:after': {
    'content': '"\f078"',
    'fontFamily': 'FontAwesome',
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 15 }]
  },
  'mobile-nav activedrop-down > a:after': {
    'content': '"\f077"'
  },
  'mobile-nav drop-down > a': {
    'paddingRight': [{ 'unit': 'px', 'value': 35 }]
  },
  'mobile-nav drop-down ul': {
    'display': 'none',
    'overflow': 'hidden'
  },
  'mobile-nav drop-down li': {
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'mobile-nav-toggle': {
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '9998',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'background': 'none',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'transition': 'all 0.4s',
    'outline': 'none !important',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'cursor': 'pointer',
    'textAlign': 'right'
  },
  'mobile-nav-toggle i': {
    'margin': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': '#065e77'
  },
  'mobile-nav-overly': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'zIndex': '9997',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'fixed',
    'background': 'rgba(40, 38, 70, 0.8)',
    'overflow': 'hidden',
    'display': 'none'
  },
  'mobile-nav-active': {
    'overflow': 'hidden'
  },
  'mobile-nav-active mobile-nav': {
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'mobile-nav-active mobile-nav-toggle i': {
    'color': '#fff'
  },
  // --------------------------------------------------------------
# Sections
--------------------------------------------------------------
  // Sections Header
--------------------------------
  'section-header h3': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }],
    'color': '#413e66',
    'textAlign': 'center',
    'fontWeight': '700',
    'position': 'relative',
    'fontFamily': '"Montserrat", sans-serif'
  },
  'section-header p': {
    'textAlign': 'center',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 60 }],
    'color': '#535074',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  // Section with background
--------------------------------
  'section-bg': {
    'background': '#f5f8fd'
  },
  // About Us Section
--------------------------------
  '#about': {
    'padding': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 0 }]
  },
  '#about about-content': {
    'paddingTop': [{ 'unit': 'px', 'value': 40 }]
  },
  '#about about-content h2': {
    'color': '#413e66',
    'fontFamily': '"Montserrat", sans-serif',
    'fontWeight': '700'
  },
  '#about about-content h3': {
    'color': '#696592',
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'fontStyle': 'italic'
  },
  '#about about-content ul': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#about about-content ul li': {
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  '#about about-content ul li i': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'paddingRight': [{ 'unit': 'px', 'value': 4 }],
    'color': '#1bb1dc'
  },
  '#about about-img': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }]
  },
  '#about about-img img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'transition': '.5s'
  },
  '#about about-img img:hover': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'WebkitTransform': 'scale(1.03)',
    'transform': 'scale(1.03)'
  },
  '#about about-img::before': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': -31 }],
    'top': [{ 'unit': 'px', 'value': -30 }],
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'height': [{ 'unit': '%V', 'value': 0.92 }],
    'zIndex': '-1',
    'content': '''',
    'backgroundColor': '#ebf1fa',
    'transition': '.5s'
  },
  '#about about-img::after': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': -31 }],
    'bottom': [{ 'unit': 'px', 'value': -30 }],
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'height': [{ 'unit': '%V', 'value': 0.92 }],
    'zIndex': '-1',
    'content': '''',
    'backgroundColor': '#ebf1fa',
    'transition': '.5s'
  },
  // Services Section
--------------------------------
  '#services': {
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }]
  },
  '#services box': {
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }],
    'position': 'relative',
    'overflow': 'hidden',
    'borderRadius': '10px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 10 }],
    'background': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 29 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(68, 88, 144, 0.1)' }],
    'transition': 'all 0.3s ease-in-out',
    'textAlign': 'center'
  },
  '#services box:hover': {
    'WebkitTransform': 'scale(1.1)',
    'transform': 'scale(1.1)'
  },
  '#services icon': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'auto' }],
    'paddingTop': [{ 'unit': 'px', 'value': 12 }],
    'display': 'inline-block',
    'textAlign': 'center',
    'borderRadius': '50%',
    'width': [{ 'unit': 'px', 'value': 60 }],
    'height': [{ 'unit': 'px', 'value': 60 }]
  },
  '#services icon i': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }]
  },
  '#services title': {
    'fontWeight': '700',
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  '#services title a': {
    'color': '#111'
  },
  '#services box:hover title a': {
    'color': '#1bb1dc'
  },
  '#services description': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'left'
  },
  // Why Us Section
--------------------------------
  '#why-us': {
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }]
  },
  '#why-us why-us-content features': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'transition': '0.3s ease-in-out'
  },
  '#why-us why-us-content features i': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }],
    'float': 'left'
  },
  '#why-us why-us-content features h4': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'fontWeight': '600',
    'marginLeft': [{ 'unit': 'px', 'value': 56 }],
    'color': '#413e66',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  '#why-us why-us-content features p': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginLeft': [{ 'unit': 'px', 'value': 56 }],
    'color': '#555186'
  },
  '#why-us counters': {
    'paddingTop': [{ 'unit': 'px', 'value': 40 }]
  },
  '#why-us counters span': {
    'fontFamily': '"Montserrat", sans-serif',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 48 }],
    'display': 'block',
    'color': '#555186'
  },
  '#why-us counters p': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': '"Montserrat", sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#8a87b6'
  },
  // Call To Action Section
--------------------------------
  '#call-to-action': {
    'background': '#2d2b46',
    'backgroundSize': 'cover',
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }]
  },
  '#call-to-action cta-title': {
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'fontWeight': '700'
  },
  '#call-to-action cta-text': {
    'color': '#fff'
  },
  '#call-to-action cta-btn': {
    'fontFamily': '"Montserrat", sans-serif',
    'fontWeight': '700',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 26 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 26 }],
    'borderRadius': '3px',
    'transition': '0.5s',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'color': '#fff'
  },
  '#call-to-action cta-btn:hover': {
    'background': '#1bb1dc',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#1bb1dc' }]
  },
  // Features Section
--------------------------------
  '#features': {
    'padding': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 0 }]
  },
  '#features h4': {
    'fontWeight': '600',
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  // Portfolio Section
--------------------------------
  '#portfolio': {
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }]
  },
  '#portfolio #portfolio-flters': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none',
    'textAlign': 'center'
  },
  '#portfolio #portfolio-flters li': {
    'cursor': 'pointer',
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'color': '#413e66',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'transition': 'all 0.3s ease-in-out'
  },
  '#portfolio #portfolio-flters li:hover': {
    'color': '#1bb1dc'
  },
  '#portfolio #portfolio-flters lifilter-active': {
    'color': '#1bb1dc'
  },
  '#portfolio #portfolio-flters li:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  '#portfolio portfolio-item': {
    'position': 'relative',
    'overflow': 'hidden',
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  '#portfolio portfolio-item portfolio-wrap': {
    'overflow': 'hidden',
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#portfolio portfolio-item portfolio-wrap:hover img': {
    'opacity': '0.4',
    'transition': '0.3s'
  },
  '#portfolio portfolio-item portfolio-wrap portfolio-info': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': '-webkit-box',
    'display': '-webkit-flex',
    'display': '-ms-flexbox',
    'display': 'flex',
    'WebkitBoxPack': 'center',
    'WebkitJustifyContent': 'center',
    'MsFlexPack': 'center',
    'justifyContent': 'center',
    'WebkitBoxAlign': 'center',
    'WebkitAlignItems': 'center',
    'MsFlexAlign': 'center',
    'alignItems': 'center',
    'WebkitBoxOrient': 'vertical',
    'WebkitBoxDirection': 'normal',
    'WebkitFlexDirection': 'column',
    'MsFlexDirection': 'column',
    'flexDirection': 'column',
    'textAlign': 'center',
    'opacity': '0',
    'transition': '0.2s linear'
  },
  '#portfolio portfolio-item portfolio-wrap portfolio-info h4': {
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'fontWeight': '700',
    'marginBottom': [{ 'unit': 'px', 'value': 14 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  '#portfolio portfolio-item portfolio-wrap portfolio-info h4 a': {
    'color': '#fff'
  },
  '#portfolio portfolio-item portfolio-wrap portfolio-info h4 a:hover': {
    'color': '#1bb1dc'
  },
  '#portfolio portfolio-item portfolio-wrap portfolio-info p': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': '#f8fcff',
    'fontWeight': '500',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'textTransform': 'uppercase'
  },
  '#portfolio portfolio-item portfolio-wrap portfolio-info link-preview': {
    'display': 'inline-block',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'textAlign': 'center',
    'width': [{ 'unit': 'px', 'value': 36 }],
    'height': [{ 'unit': 'px', 'value': 36 }],
    'background': '#1bb1dc',
    'borderRadius': '50%',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }]
  },
  '#portfolio portfolio-item portfolio-wrap portfolio-info link-details': {
    'display': 'inline-block',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'textAlign': 'center',
    'width': [{ 'unit': 'px', 'value': 36 }],
    'height': [{ 'unit': 'px', 'value': 36 }],
    'background': '#1bb1dc',
    'borderRadius': '50%',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }]
  },
  '#portfolio portfolio-item portfolio-wrap portfolio-info link-preview i': {
    'paddingTop': [{ 'unit': 'px', 'value': 6 }],
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'color': '#fff'
  },
  '#portfolio portfolio-item portfolio-wrap portfolio-info link-details i': {
    'paddingTop': [{ 'unit': 'px', 'value': 6 }],
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'color': '#fff'
  },
  '#portfolio portfolio-item portfolio-wrap portfolio-info link-preview:hover': {
    'background': '#42c3e8'
  },
  '#portfolio portfolio-item portfolio-wrap portfolio-info link-details:hover': {
    'background': '#42c3e8'
  },
  '#portfolio portfolio-item portfolio-wrap portfolio-info link-preview:hover i': {
    'color': '#fff'
  },
  '#portfolio portfolio-item portfolio-wrap portfolio-info link-details:hover i': {
    'color': '#fff'
  },
  '#portfolio portfolio-item portfolio-wrap:hover': {
    'background': '#282646'
  },
  '#portfolio portfolio-item portfolio-wrap:hover portfolio-info': {
    'opacity': '1'
  },
  // Testimonials Section
--------------------------------
  '#testimonials': {
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }]
  },
  '#testimonials section-header': {
    'marginBottom': [{ 'unit': 'px', 'value': 40 }]
  },
  '#testimonials testimonial-item testimonial-img': {
    'width': [{ 'unit': 'px', 'value': 120 }],
    'borderRadius': '50%',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'float': 'left'
  },
  '#testimonials testimonial-item h3': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': 'bold',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'color': '#111',
    'marginLeft': [{ 'unit': 'px', 'value': 140 }]
  },
  '#testimonials testimonial-item h4': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#999',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 140 }]
  },
  '#testimonials testimonial-item p': {
    'fontStyle': 'italic',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 140 }],
    '>w992': {
      'width': [{ 'unit': '%H', 'value': 0.8 }]
    }
  },
  '#testimonials owl-nav': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'textAlign': 'center'
  },
  '#testimonials owl-dots': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'textAlign': 'center'
  },
  '#testimonials owl-dot': {
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'borderRadius': '50%',
    'backgroundColor': '#ddd'
  },
  '#testimonials owl-dotactive': {
    'backgroundColor': '#1bb1dc'
  },
  // Team Section
--------------------------------
  '#team': {
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }]
  },
  '#team member': {
    'textAlign': 'center',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'position': 'relative',
    'overflow': 'hidden'
  },
  '#team member member-info': {
    'display': '-webkit-box',
    'display': '-webkit-flex',
    'display': '-ms-flexbox',
    'display': 'flex',
    'WebkitBoxPack': 'center',
    'WebkitJustifyContent': 'center',
    'MsFlexPack': 'center',
    'justifyContent': 'center',
    'WebkitBoxAlign': 'center',
    'WebkitAlignItems': 'center',
    'MsFlexAlign': 'center',
    'alignItems': 'center',
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'transition': '0.2s',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'background': 'rgba(29, 28, 41, 0.6)'
  },
  '#team member member-info-content': {
    'transition': 'margin 0.2s',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'transition': 'height 0.4s'
  },
  '#team member:hover member-info': {
    'transition': '0.4s'
  },
  '#team member:hover member-info-content': {
    'height': [{ 'unit': 'px', 'value': 80 }]
  },
  '#team member h4': {
    'fontWeight': '700',
    'marginBottom': [{ 'unit': 'px', 'value': 2 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#fff'
  },
  '#team member span': {
    'fontStyle': 'italic',
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'color': '#fff'
  },
  '#team member social': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  '#team member social a': {
    'transition': 'none',
    'color': '#fff'
  },
  '#team member social a:hover': {
    'color': '#1bb1dc'
  },
  '#team member social i': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }]
  },
  // Clients Section
--------------------------------
  '#clients': {
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }]
  },
  '#clients img': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.8 }],
    'opacity': '0.5',
    'transition': '0.3s',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  '#clients img:hover': {
    'opacity': '1'
  },
  '#clients owl-nav': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'textAlign': 'center'
  },
  '#clients owl-dots': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'textAlign': 'center'
  },
  '#clients owl-dot': {
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'borderRadius': '50%',
    'backgroundColor': '#ddd'
  },
  '#clients owl-dotactive': {
    'backgroundColor': '#1bb1dc'
  },
  // Pricing Section
--------------------------------
  '#pricing': {
    'padding': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 0 }]
  },
  '#pricing card': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '0px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(65, 62, 102, 0.08)' }],
    'transition': 'all .3s ease-in-out',
    'padding': [{ 'unit': 'px', 'value': 36 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 36 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative'
  },
  '#pricing card:after': {
    'content': '''',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 5 }],
    'backgroundColor': '#1bb1dc',
    'transition': '0.5s'
  },
  '#pricing card:hover': {
    'WebkitTransform': 'scale(1.05)',
    'transform': 'scale(1.05)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.08)' }]
  },
  '#pricing card:hover:after': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  '#pricing card card-header': {
    'backgroundColor': 'white',
    'borderBottom': [{ 'unit': 'px', 'value': 0 }],
    'MozTextAlignLast': 'center',
    'textAlignLast': 'center'
  },
  '#pricing card card-title': {
    'marginBottom': [{ 'unit': 'px', 'value': 16 }],
    'color': '#535074'
  },
  '#pricing card card-block': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  '#pricing card list-group-item': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }],
    'color': '#413e66',
    'fontWeight': '300'
  },
  '#pricing card h3': {
    'fontSize': [{ 'unit': 'px', 'value': 64 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'color': '#535074'
  },
  '#pricing card h3 currency': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'position': 'relative',
    'fontWeight': '400',
    'top': [{ 'unit': 'px', 'value': -30 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  '#pricing card h3 period': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#6c67a3',
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }]
  },
  '#pricing card list-group': {
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  '#pricing card btn': {
    'textTransform': 'uppercase',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'fontWeight': '500',
    'color': '#5f5b96',
    'borderRadius': '0',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 24 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'borderRadius': '3px',
    'display': 'inline-block',
    'background': '#1bb1dc',
    'color': '#fff'
  },
  '#pricing card btn:hover': {
    'background': '#0a98c0'
  },
  // Frequently Asked Questions Section
--------------------------------
  '#faq': {
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden'
  },
  '#faq #faq-list': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  '#faq #faq-list li': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ebebeb' }]
  },
  '#faq #faq-list a': {
    'padding': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 22 }, { 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'position': 'relative',
    'fontFamily': '"Montserrat", sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'fontWeight': '400',
    'paddingRight': [{ 'unit': 'px', 'value': 20 }]
  },
  '#faq #faq-list i': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 20 }]
  },
  '#faq #faq-list p': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  '#faq #faq-list acollapse': {
    'color': '#1bb1dc'
  },
  '#faq #faq-list acollapsed': {
    'color': '#000'
  },
  '#faq #faq-list acollapsed i::before': {
    'content': '"\f2c7" !important'
  },
  // --------------------------------------------------------------
# Footer
--------------------------------------------------------------
  '#footer': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'background': '#fff'
  },
  '#footer footer-top': {
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }],
    'background': '#f5f8fd'
  },
  '#footer footer-top footer-info': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  '#footer footer-top footer-info h3': {
    'fontSize': [{ 'unit': 'px', 'value': 34 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'fontFamily': '"Montserrat", sans-serif',
    'color': '#413e66',
    'fontWeight': '400',
    'letterSpacing': [{ 'unit': 'px', 'value': 3 }],
    'textTransform': 'uppercase'
  },
  '#footer footer-top footer-info p': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontFamily': '"Montserrat", sans-serif',
    'color': '#535074'
  },
  '#footer footer-top social-links a': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'display': 'inline-block',
    'background': '#1bb1dc',
    'color': '#fff',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 4 }],
    'borderRadius': '50%',
    'textAlign': 'center',
    'width': [{ 'unit': 'px', 'value': 36 }],
    'height': [{ 'unit': 'px', 'value': 36 }],
    'transition': '0.3s',
    '<w574': {
      'marginBottom': [{ 'unit': 'px', 'value': 25 }]
    }
  },
  '#footer footer-top social-links a:hover': {
    'background': '#0a98c0',
    'color': '#fff'
  },
  '#footer footer-top h4': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'bold',
    'color': '#413e66',
    'textTransform': 'uppercase',
    'position': 'relative',
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  '#footer footer-top footer-links': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  '#footer footer-top footer-links ul': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#footer footer-top footer-links ul li': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }]
  },
  '#footer footer-top footer-links ul li:first-child': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  '#footer footer-top footer-links ul a': {
    'color': '#696592'
  },
  '#footer footer-top footer-links ul a:hover': {
    'color': '#1bb1dc'
  },
  '#footer footer-top footer-contact': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  '#footer footer-top footer-contact p': {
    'lineHeight': [{ 'unit': 'px', 'value': 26 }]
  },
  '#footer footer-top footer-newsletter': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  '#footer footer-top footer-newsletter input[type="email"]': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 8 }],
    'width': [{ 'unit': '%H', 'value': 0.65 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d9dde6' }]
  },
  '#footer footer-top footer-newsletter input[type="submit"]': {
    'background': '#1bb1dc',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#1bb1dc' }],
    'width': [{ 'unit': '%H', 'value': 0.35 }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'color': '#fff',
    'transition': '0.3s',
    'cursor': 'pointer'
  },
  '#footer footer-top footer-newsletter input[type="submit"]:hover': {
    'background': '#0a98c0'
  },
  '#footer footer-top form form-group': {
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  '#footer footer-top form #sendmessage': {
    'color': '#fff',
    'background': '#1bb1dc',
    'display': 'none',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'fontWeight': '600',
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  '#footer footer-top form #errormessage': {
    'color': '#fff',
    'display': 'none',
    'background': 'red',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'fontWeight': '600',
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  '#footer footer-top form #sendmessageshow': {
    'display': 'block'
  },
  '#footer footer-top form #errormessageshow': {
    'display': 'block'
  },
  '#footer footer-top form show': {
    'display': 'block'
  },
  '#footer footer-top form validation': {
    'color': 'red',
    'display': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  '#footer footer-top form label': {
    'color': '#413e66',
    'fontWeight': '500'
  },
  '#footer footer-top form input': {
    'borderRadius': '0',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dce1ec' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  '#footer footer-top form textarea': {
    'borderRadius': '0',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dce1ec' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  '#footer footer-top form input::-webkit-input-placeholder': {
    'color': '#a2a0bd'
  },
  '#footer footer-top form textarea::-webkit-input-placeholder': {
    'color': '#a2a0bd'
  },
  '#footer footer-top form input::-moz-placeholder': {
    'color': '#a2a0bd'
  },
  '#footer footer-top form textarea::-moz-placeholder': {
    'color': '#a2a0bd'
  },
  '#footer footer-top form input:-ms-input-placeholder': {
    'color': '#a2a0bd'
  },
  '#footer footer-top form textarea:-ms-input-placeholder': {
    'color': '#a2a0bd'
  },
  '#footer footer-top form input::placeholder': {
    'color': '#a2a0bd'
  },
  '#footer footer-top form textarea::placeholder': {
    'color': '#a2a0bd'
  },
  '#footer footer-top form button[type="submit"]': {
    'background': '#1bb1dc',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '3px',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 30 }],
    'color': '#fff',
    'transition': '0.3s'
  },
  '#footer footer-top form button[type="submit"]:hover': {
    'background': '#0a98c0',
    'cursor': 'pointer'
  },
  '#footer copyright': {
    'textAlign': 'center',
    'paddingTop': [{ 'unit': 'px', 'value': 30 }],
    'color': '#535074',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  '#footer credits': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'paddingTop': [{ 'unit': 'px', 'value': 4 }],
    'color': '#8582a8'
  },
  '#footer credits a': {
    'color': '#1bb1dc'
  },
  '#footer credits a:hover': {
    'color': '#0a98c0'
  },
  // --------------------------------------------------------------
# Responsive Media Queries
--------------------------------------------------------------
});
