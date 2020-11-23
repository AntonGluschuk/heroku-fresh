export const roots = ["<rootDir>/src"];
export const testMatch = [
  "**/__tests__/**/*.+(ts|tsx|js)",
  "**/?(*.)+(spec|test).+(ts|tsx|js)",
];
export const transform = {
  "^.+\\.(ts|tsx)$": "ts-jest",
  ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    "<rootDir>/jest-config/file-mock.js",
  ".(css|less)$": "<rootDir>/jest-config/style-mock.js",
};
