
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',  
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/__tests__/**/*.test.ts'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
};
  