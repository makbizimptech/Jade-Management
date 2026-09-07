import next from "eslint-config-next";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "out/**", "next-env.d.ts"] },
  ...next,
  ...nextTypescript,
];

export default eslintConfig;
