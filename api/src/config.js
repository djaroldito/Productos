import { config } from 'dotenv'
config()

//console.log(process.env.NICKNAME)

export default{
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    database: process.env.DATABASE || ''
}