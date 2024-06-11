module.exports = {
     preset: "ts-jest",
     testEnvironment: "jest-environment-jsdom",
     moduleNameMapper: {
          "^@/(.*)$": "<rootDir>/src/$1",
     },
     moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
     testMatch: ["**/__tests__/**/*.test.{ts,tsx,js,jsx}"],
     setupFilesAfterEnv: ["./src/setupTests.ts"],
};
