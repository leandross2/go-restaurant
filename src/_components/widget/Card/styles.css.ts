import { container as TextStyles } from "@/_components/elements/Text/styles.css";
import { style, styleVariants } from "@vanilla-extract/css";
export const container = style({
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  overflow: "hidden"
})

export const imageDish = style({
  backgroundColor: "#FFB84D"
})

export const cardDescription = style({
  color: "#3D3D4D",
  padding: "1.75rem",
  backgroundColor: "#F0F0F5",
  display: "flex",
  flexDirection: "column",
  height: "12rem",
  marginTop: "auto",
  flex: "1",
  justifyContent: "space-between"
})

export const Text = styleVariants({
  title: [TextStyles.title, { marginBottom: "1rem" }],
  description: [TextStyles.description, { marginBottom: "1rem" }],
  emphasis: [TextStyles.emphasis]
})

export const actionsBar = style({
  backgroundColor: "#E4E4EB",
  padding: "1.25rem",
  display: "flex",
  
  alignItems: "center"
})  

export const actionButtons = style({
  display: "flex",
  justifyContent: "space-between",
  minWidth: "99px",
  marginRight: "auto",
})
