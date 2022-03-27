import { Context } from 'vm'

/**
 * Combine the array of slugs to a single string.
 */
export default (context: Context) =>
  Array.isArray(context.params.slug)
    ? context.params.slug.reduce(
        (slug: string, part: string) => `${slug}/${part}`,
        ''
      )
    : context.params.slug
