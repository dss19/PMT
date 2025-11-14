// src/utils/seo.tsx
interface SeoOptions {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    robots: string;
}

export const getSeo = ({
    title,
    description = '',
    keywords = '',
    robots = 'index, follow',
    image = '',
    url = '',
}: SeoOptions) => ({
    title: `${title} | Пневмоторг`,
    meta: [
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { name: 'robots', content: robots },
        { property: 'og:title', content: `${title} | Пневмоторг` },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `${title} | Пневмоторг` },
        { name: 'twitter:description', content: description },
        { rel: 'canonical', content: url }
    ],
});

