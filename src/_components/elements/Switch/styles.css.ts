import { style } from "@vanilla-extract/css";


export const container = style({
  // width: "88px"
})

export const switchContainer = style({
  display: "flex",
  alignItems: "center",
  color: "#3D3D4D"
})

export const checkbox = style({
  display: "none",
})

export const areaSwitch = style({
  display: "flex",
  backgroundColor: "#39B100",
  padding: "6px",
  borderRadius: "16px",
  transition: ".5s backgroundColor",
  width: "88px",
  marginLeft: "6px",
  selectors:{
    [`input:checked + &`]: {
      backgroundColor: "#F00",
    },
  
  }
})

// input:checked + .styles_areaSwitch__1adiaxy2
export const switcher = style({
  backgroundColor: "#FFF",
  height: "20px",
  width: "40px",
  borderRadius: "10px",
  transition: ".5s transform",
  selectors:{
    [`input:checked + div &`]: {
      transform: "translate(33px, 0)" 
    }
  }
})
