import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Replace with the actual URL once deployed
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://touch-golf.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
