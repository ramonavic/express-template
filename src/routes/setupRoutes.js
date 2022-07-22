import fs from 'fs/promises'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const routes = []

async function importRoutes() {

    try {
        const __dirname = dirname(fileURLToPath(import.meta.url))
        const routesDir = await fs.readdir(__dirname)
    
        for (const file of routesDir) {

            // Import all .js files except for the setupRoutes.js file inside this folders
            if (!/.*\.js$/.test(file) || /^setupRoutes.js$/.test(file)) {
    
                continue
            }
    
            const route = await import(`./${file}`)

            console.log(`Importing route: ${file}`)
    
            routes.push(route)
    
        }
    } catch (e) {
        throw new Error(e)
    }
  
}

await importRoutes()

export default routes



