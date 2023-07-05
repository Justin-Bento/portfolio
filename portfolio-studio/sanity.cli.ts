import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio-studio',
  projectId: 'v30obm3j',
  dataset: 'production',
  schema: {
    types: schemaTypes,
  },
})