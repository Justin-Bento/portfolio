import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio-studio',

  projectId: 'v30obm3j',
  dataset: 'production',

  plugins: [ deskTool(), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})