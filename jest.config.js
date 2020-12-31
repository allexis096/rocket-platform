module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/components/*.tsx', 'src/pages/*.tsx', "!src/pages/_app.tsx", "!src/pages/_document.tsx"],
  coverageReporters: ['lcov', 'text'],
};
