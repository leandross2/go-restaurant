import { Container as InputContainer } from "@/_components/elements/Input/styles.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const modal = style({
  background: "#F0F0F5",
  maxWidth: "736px",
  padding: "40px",
  
})

globalStyle(`${modal} ${InputContainer} + ${InputContainer}`, {
  marginTop: '1rem',
})