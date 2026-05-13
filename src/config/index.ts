export const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 8080;
export const NODE_ENV: string = process.env.NODE_ENV || 'development';

export const DB_NOSQL_NAME: string = process.env.DB_NOSQL_NAME || 'notificaciones_db';
export const DB_NOSQL_USER: string = process.env.DB_NOSQL_USER || 'admin';
export const DB_NOSQL_PASS: string = process.env.DB_NOSQL_PASS || 'Password1234';
export const DB_NOSQL_HOST: string = process.env.DB_NOSQL_HOST || 'localhost';
