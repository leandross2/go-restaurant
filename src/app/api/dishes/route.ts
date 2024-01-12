import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile } from 'fs/promises'
import { IDishe } from '@/core/types/IDishe'

export async function GET() {
 
  const dishesList = await readFile("public/DISHES_MOCK.json", 'utf8')
 
  return NextResponse.json(
    JSON.parse(dishesList)
  )
}

export async function POST(request:NextRequest) {
  
  const dishesListFile = await readFile("public/DISHES_MOCK.json", 'utf8')
  
  const dishesJson = JSON.parse(dishesListFile) as IDishe[]
  
  const newDishe = await request.json()
  
  dishesJson.push(newDishe)
  
  await writeFile("public/DISHES_MOCK.json", JSON.stringify(dishesJson))

  return NextResponse.json(
    newDishe
  )
}

