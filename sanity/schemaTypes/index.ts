
import { type SchemaTypeDefinition } from 'sanity'
import { Header } from './Header'
import { About } from './About'
import { Skills } from './Skills'
import { SkillCard } from './skillCards'
import { Blog } from './Blog'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Header, About, Skills, SkillCard, Blog],
}
