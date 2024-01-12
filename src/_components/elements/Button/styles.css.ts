import { style, styleVariants } from '@vanilla-extract/css';

export const baseButton = style({
  backgroundColor: "#FFF",
  color: "#3D3D4D",
  border: "none",
  padding: "0.625rem",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center"
}) 

export const container = styleVariants({
  default: [baseButton],
  create: [baseButton, { backgroundColor: "#39B100", color: "#FFF", padding: "0 0 0 1rem" }]
});

export const icon = style({
  backgroundColor: "#41C900",
  padding: "0.91rem 1rem",
  borderRadius: "0 8px 8px 0",
  marginLeft: "1.5rem"
});