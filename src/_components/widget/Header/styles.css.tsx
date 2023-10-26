import { style } from "@vanilla-extract/css";

export const header = style({
  backgroundColor: "#C72828",
  paddingBottom: "8rem"
})

export const content = style({
  maxWidth: "70rem",
  margin: "0 auto" ,
  padding: "2.75rem 0",
  display: "flex", 
  justifyContent: "space-between",
  alignItems: "center"
})