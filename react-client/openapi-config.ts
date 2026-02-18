import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'http://localhost:3000/docs-json',
  apiFile: './src/shared/api/base-api.ts',
  apiImport: 'baseApi',
  outputFile: './generated/api.ts',
  hooks: true,
};

export default config;
