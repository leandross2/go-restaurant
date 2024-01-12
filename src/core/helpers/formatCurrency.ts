export const formatCurrency = (value: number)=>{
  return new Intl.NumberFormat("pt-BR",{ style:"currency", currency:"BRL" }).format(value)
}

export const unFormatCurrency = (value: string): number =>{

  if (value === 'R$ ') {
    return 0;
  }

  const valueUnformated = value.replace('R$ ', '').replace(/\./g, '').replace(',', '.');

  return parseFloat(valueUnformated);
}
