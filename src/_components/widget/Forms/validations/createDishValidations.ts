
type CreateDishValidationsProps = HTMLInputElement | null
type InputErrors = {[key in  'name' | 'description' | 'price']: string}

export const createDishValidations = (inputs:CreateDishValidationsProps[])=>{
  const inputErrors: InputErrors = {} as InputErrors

  inputs.forEach((input)=>{
    if(input && input.value === ''){
      // @ts-ignore FIXME::arrumar tipagens tipagem
      inputErrors[input.name] = `Campo ${input.title} obrigatório`
      return
    }
    // @ts-ignore FIXME::arrumar tipagens tipagem
    inputErrors[input.name] = null

  })

  return !!Object.keys(inputErrors).length ? inputErrors : false
}