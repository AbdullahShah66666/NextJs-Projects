{
  "extends": ["next", "next/core-web-vitals", "eslint:recommended", "prettier"],
  "rules": {
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "warn",
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
  module.exports = {
    extends: ["next", "next/core-web-vitals", "prettier"]
  };
  
  module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended"],
    settings: {
      react: {
        version: "19" // Replace with your React version
      }
    }
  };
  }
