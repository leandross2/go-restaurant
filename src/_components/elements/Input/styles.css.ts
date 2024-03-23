import { style } from "@vanilla-extract/css";

export const Container = style({
  marginBottom: "1rem"
})
export const Label = style({
  fontSize: '0.875rem',
  color: "#6C6C80",
  fontWeight: 400,
  marginBottom: "8px",
  display: "block"
})

export const InputArea = style({
  background: "#FFF",
  display: "flex",
  borderRadius: "8px",
})

export const Input = style({
  borderRadius: "8px",
  border: "0 none",
  flex: 1,
  padding: "1.2rem",
  fontSize:"1rem"
})

export const ErrorMessage = style({
  color: "#c72828",
  lineHeight: "2rem"
})
