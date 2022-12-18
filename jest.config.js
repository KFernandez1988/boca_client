module.exports = {
    preset: 'ts-jest',
    // transform: {
    //     "^.+\\.tsx?$": "ts-jest",
    //  },
     "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "json"
     ],
     transformIgnorePatterns: ['/node_modules/(?!react-dnd|dnd-core|@react-dnd)']
  };