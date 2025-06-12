import rss from '@astrojs/rss'
import siteConfig from '@/site-config'

interface Context {
  site: string
}

export async function GET(context: Context) {
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: [],
  })
}
