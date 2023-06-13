import sql from 'mssql'
import datosConexion from '../config'

const dbsettings = {
    user: datosConexion.dbUser,
    password: datosConexion.dbPassword,
    server: datosConexion.dbServer,
    database: datosConexion.database,
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConection ()  {
   try {
        const pool = await sql.connect(dbsettings)
        return pool
   } catch (error) {
        console.log(error)
   }
   }

   export {sql}

