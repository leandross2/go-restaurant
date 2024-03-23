import { Container as InputContainer } from "@/_components/elements/Input/styles.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const overlay = style({
  background: "#0008",
  width: "100%",
  height: "100vh",
  position: "fixed",
  top:0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})
export const modal = style({
  background: "#F0F0F5",
  minWidth: "736px",
  padding: "40px",
  borderRadius: "8px"
})
export const header = style({
  display:"block" ,
  marginBottom: "40px",
})


globalStyle(`${modal} ${InputContainer} + ${InputContainer}`, {
  marginTop: '1rem',
})