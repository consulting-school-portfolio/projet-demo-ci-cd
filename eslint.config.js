const { defineConfig } = require("eslint/config");
const { globals} =  require("globals");
const  { js }  =require("@eslint/js");

export default defineConfig([
	{ files: ["**/*.js"], languageOptions: { globals: globals.browser } },
	{ files: ["**/*.js"], plugins: { js }, extends: ["js/recommended"] },
]);