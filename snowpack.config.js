module.exports = {
  plugins: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none',
    output: 'stream',
  },
  buildOptions: {
    /* ... */
  },
  mount: {
    src: '/dist',
    public: '/',
  },
  alias: {
    /* ... */
  },
};
