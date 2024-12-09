
import { type SchemaTypeDefinition } from 'sanity'

import { About } from './About'
import { Header } from './Header'
import { SkillCard } from './skillCards'
import { Skills } from './Skills'
import { Blog } from './Blog'
import { Review } from './Review'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Header, About, SkillCard, Skills, Blog, Review,],
}
