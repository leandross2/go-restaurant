import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile } from 'fs/promises'
import { IDishe } from '@/core/types/IDishe'

interface getParams{
  params: {id: string}
}
export async function GET(request:NextRequest, { params }:getParams) {
  try{
    const dishesListFile = await readFile("public/DISHES_MOCK.json", 'utf8')

    const dishesListParsed = JSON.parse(dishesListFile)
 
    if(params.id){
      const dish = dishesListParsed.find((dish:any) => dish.id === Number(params.id))

      if(!dish){
        return NextResponse.json({
          message: "Nenhum prato encontrado"
        },
        { status: 404 }
        )
      }

      return NextResponse.json(
        dish
      )
    }

    return NextResponse.json(dishesListParsed)
    
  }catch(err){
    console.error(err)
    return NextResponse.json({
      message: "Internal server error"
    },
    { status: 500 }
    )
 
  }
}

interface DeleteMethodParms{
  params: {
    id: number
  }
}

export async function DELETE(request:NextRequest, { params }:DeleteMethodParms) {
  const { id } = params
  const dishesListFile = await readFile("public/DISHES_MOCK.json", 'utf8')
  const dishesJson = JSON.parse(dishesListFile) as IDishe[]
  const dishesUpdated = dishesJson.filter(dishe => dishe.id !== Number(id))
  
  await writeFile("public/DISHES_MOCK.json", JSON.stringify(dishesUpdated), 'utf-8')

  return NextResponse.json({}, { status:201 })
}

export async function PUT(request:NextRequest, { params }:getParams) {
  try{
    if(params.id){
      const dishesListFile = await readFile("public/DISHES_MOCK.json", 'utf8')

      const dishesListParsed = JSON.parse(dishesListFile) as IDishe[]

      const dishIndex = dishesListParsed.findIndex((dish:any) => dish.id === Number(params.id))

      if(dishIndex < 0){
        return NextResponse.json({
          message: "Nenhum prato encontrado"
        },
        { status: 404 }
        )
      }

      const body = await request.json() as IDishe

      dishesListParsed[dishIndex].name = body.name
      dishesListParsed[dishIndex].description = body.description
      dishesListParsed[dishIndex].price = body.price
      dishesListParsed[dishIndex].available = body.available

      await writeFile("public/DISHES_MOCK.json", JSON.stringify(dishesListParsed), 'utf-8')

      return NextResponse.json(
        dishesListParsed[dishIndex]
      )
    }
    
  }catch(err){
    console.error(err)
    return NextResponse.json({
      message: "Internal server error"
    },
    { status: 500 }
    )
 
  }
}
