import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import process from 'node:process'

export default defineEventHandler(() => {
  const filePath = resolve(process.cwd(), 'server', 'data.json')
  const fileContent = readFileSync(filePath, 'utf-8')
  return JSON.parse(fileContent)
})
