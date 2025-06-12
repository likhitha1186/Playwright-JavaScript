import dotenv from 'dotenv';

dotenv.config();

export function getParaBankCredentials(env = 'dev') {
  const upperEnv = env.toUpperCase();

  return {
    url: process.env.PARABANK_URL,
    username: process.env[`${upperEnv}_USERNAME1`] || '',
    password: process.env[`${upperEnv}_PASSWORD1`] || '',
    env: upperEnv,
  };
}

