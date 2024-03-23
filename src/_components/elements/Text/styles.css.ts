import { styleVariants } from '@vanilla-extract/css';

export const container = styleVariants({
  regular: { fontSize: '1rem' },
  emphasis: { fontSize: '1.5rem', fontWeight: 600, color: "#39B100", '&.disabled': { color: "#3D3D4D", opacity: 1 } },
  title: { fontSize: '1.75rem', fontWeight: 600 },
  description: { fontSize: '1rem', fontWeight: 400 },
});


export const emphasis = styleVariants({
  regular: { fontWeight: '400' },
  bold: { fontWeight: '600' },
});