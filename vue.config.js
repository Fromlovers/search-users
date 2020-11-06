require('dotenv').config({ path: './http/etc/.env' });

if (!process.env.URI || !process.env.DATABASE) {
  console.log('\x1b[31m', 'ERROR: Please a check exist of .env file');
  process.exit(1);
}

module.exports = {
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './http',
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
};
