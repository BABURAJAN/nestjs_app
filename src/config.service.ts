import * as path from 'path';
import * as dotenv from 'dotenv';

const baseDir = path.join(__dirname);
const entitiesPath = `${baseDir}${process.env.TYPEORM_ENTITIES}`;

export const config1 = () => ({
  database:{
    type: "mssql",
    host: "localhost",
    domain: "BABURAJAN",
    username: "BABURAJAN",
    password: "System.exit(0)",
    database: "db",
    entities: ['__dirname/**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities: true
  },
});

export const config = () => ({
  database:{
    type: "mssql",
    host: process.env.TYPEORM_HOST,
    domain: process.env.TYPEORM_DOMAIN,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    //port: Number.parseInt(process.env.TYPEORM_PORT),
   // entities: ['__dirname/**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities: true,
    options:{
      enableArithAbort:true,
     // trustedConnection:true,
      //Trusted_Connection:true
    }
  },
});

