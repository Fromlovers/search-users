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
