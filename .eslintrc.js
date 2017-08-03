module.exports = {
  "plugins": [
    "react"
  ],
    "extends": [
      "eslint:recommended", "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaFeatures" : {
        "jsx": true
      }
    },
    "rules": {
      "jsx-quotes" : ["warn", "prefer-double"],
      "semi":["error", "never"]
    }
};
