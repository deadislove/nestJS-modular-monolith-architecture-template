import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from 'path';
import { readdirSync, statSync } from 'fs';

export class MySQLDatabase {
    constructor(private readonly configService: ConfigService) {}

    getConnection(): TypeOrmModuleOptions  {
        const entities = MySQLDatabase.loadEntities()
        return {
            type: 'mysql',
            host: this.configService.get<string>('DB_HOST', 'localhost'),
            port: this.configService.get<number>('DB_PORT', 3306),
            username: this.configService.get<string>('DB_USERNAME', 'root'),
            password: this.configService.get<string>('DB_PASSWORD', 'password'),
            database: this.configService.get<string>('DB_NAME', 'database'),
            entities,
            synchronize: false, // Set to false in production
            logging: false, // Disable logging in production
        }
    }

    private static loadEntitiesFromDirectory(directoryPath: string): any[] {
            let entities: any[] = []
    
            try {
                const files = readdirSync(directoryPath)
                files.forEach((file) => {
                    const fullPath = join(directoryPath, file)
                    const fileStat = statSync(fullPath)
    
                    // If it's a directory, recursively look for entities
                    if (fileStat.isDirectory()) {
                        entities = [...entities, ...this.loadEntitiesFromDirectory(fullPath)]
                    } else if (file.endsWith('.typeorm.entity.ts') || file.endsWith('.typeorm.entity.js')) {
                        // If it matches the entity file format, load it
                        entities.push(require(fullPath).default)
                    }
                })
            } catch (error) {
                console.error(`Error reading directory ${directoryPath}: `, error)
            }
    
            return entities
        }
    
        private static loadEntities(): any[] {
            const rootPath = join(__dirname, '../../')
    
            console.log('Root path: ', rootPath)
            const entities: any[] = []
    
            // Traverse the entire directory, looking for all entities folders
            const traverseDir = (dir: string) => {
                const files = readdirSync(dir)
    
                files.forEach((file) => {
                    const fullPath = join(dir, file)
                    const fileStat = statSync(fullPath)
    
                    if (fileStat.isDirectory()) {
    
                        if (file.toLowerCase() === 'entities') {
                            // If it's an entities folder, load the entities inside
                            const entityFiles = this.loadEntitiesFromDirectory(fullPath)
    
                            entities.push(...entityFiles)
                        } else {
                            traverseDir(fullPath) // If it's not an entities folder, continue recursion
                        }
                    }
                })
            }
    
            // Start traversing the src or dist folder
            traverseDir(rootPath)
    
            console.log('Loaded Entities: ', entities)
            return entities
        }
}