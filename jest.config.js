module.exports = {
  transform: {
    '^.+\\.(js|ts|tsx)?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
        },
      },
    ],
  },
};
