import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {schemaTypes} from './schemas';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'portfolio-studio',
  projectId: 'v30obm3j',
  dataset: 'production',
  // ...
  plugins: [
    deskTool(),
    visionTool(),
    // ...
  ],
  // ...
  schema: {
    types: schemaTypes,
  },
})
