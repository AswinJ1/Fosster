/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fosster.amfoss.in',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  
  // Include all routes by default
  exclude: [
    '/api/*', // Exclude API routes
    '/admin/*', // Exclude admin routes if any
  ],
  
  // Generate sitemap for static and dynamic routes
  generateIndexSitemap: true,
  
  // Custom transformation for specific routes
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = config.priority;
    let changefreq = config.changefreq;
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/events/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/workshop')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/venue/') || path.startsWith('/sponsor')) {
      priority = 0.6;
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  
  // Additional paths that might not be automatically discovered
  additionalPaths: async (config) => {
    const result = [];
    
    // Add any additional static paths here
    const additionalStaticPaths = [
      '/about',
      '/attend',
      '/contact-us',
      '/sponsor',
      '/workshop',
    ];
    
    for (const path of additionalStaticPaths) {
      result.push(
        await config.transform(config, path)
      );
    }
    
    return result;
  },
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}