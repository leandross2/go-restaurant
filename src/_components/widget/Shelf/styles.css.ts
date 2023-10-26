import { style } from "@vanilla-extract/css";

export const container = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  maxWidth: "70rem",
  margin: "0 auto",
  gap: "2rem"
})