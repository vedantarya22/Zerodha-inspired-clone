export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
  moduleFileExtensions: ["js", "jsx"],
  extensionsToTreatAsEsm: [".jsx"],
  transformIgnorePatterns: [
    "node_modules/(?!(.*))"
  ]
};
