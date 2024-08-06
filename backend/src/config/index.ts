import "dotenv/config";

const config = {
  PORT: process.env.PORT,
  DATABASENAME: process.env.DATABASENAME,
  DATABASEPASSWORD: process.env.DATABASEPASSWORD,
  DATABASEUSERNAME: process.env.DATABASEUSERNAME,
};

export default config;
