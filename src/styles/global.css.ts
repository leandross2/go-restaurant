import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: "border-box"
});

globalStyle('body', {
  background: "#FFF",
  backgroundColor: "#FFF"
});

globalStyle('body, input, textarea, button', {
  fontFamily: "'Roboto', sans-serif",
  WebkitFontSmoothing: "antialiased",
});

globalStyle('h1, h2, h3, h4, h5, h6, strong', {
  fontWeight: 600
});

globalStyle('button', {
  cursor: "pointer",
  transition: "opacity .5s",
});

globalStyle('button:hover', {
  opacity: ".9"
});

globalStyle('[disabled]', {
  opacity: ".6",
  cursor: "not-allowed"
});

globalStyle('a', {
  color: "inherit",
  textDecoration: "none"
});
