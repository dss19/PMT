// scripts/sitemap-generator.ts
import fs from 'fs';

async function generateSitemap() {
    const baseUrl = 'https://pnevmo-torg.ru';

    try {
        const staticPages = [
            { path: '/', priority: 1.0 },
            { path: '/about', priority: 0.8 },
            { path: '/payment', priority: 0.8 },
            { path: '/news', priority: 0.8 },
            { path: '/contacts', priority: 0.8 },
            { path: '/catalog', priority: 0.9 }
        ];

        // Получаем категории через RTK Query
        const categoriesResponse = await fetch('https://api.pnevmo-torg.ru/categories');
        const categories = await categoriesResponse.json();

        let allRoutes = [...staticPages];

        // Добавляем категории
        if (categories) {
            for (const category of categories) {
                allRoutes.push({
                    path: `/catalog/${category.slug}`,
                    priority: 0.8
                });
            }
        }

        // Костыль: перебираем товары по ID пока не получим ошибку
        console.log('🔍 Searching for products...');
        let productId = 1;
        let foundProducts = 0;
        const maxProducts = 1000; // Защита от бесконечного цикла

        while (productId <= maxProducts) {
            try {
                const productResponse = await fetch(`https://api.pnevmo-torg.ru/products/id/${productId}`);

                if (!productResponse.ok) {
                    // Если товара нет, прерываем цикл
                    console.log(`✅ Found ${foundProducts} products total`);
                    break;
                }

                const product = await productResponse.json() as { slug: string; category?: { slug: string } };

                // Добавляем товар с его категорией
                if (product.category?.slug) {
                    allRoutes.push({
                        path: `/catalog/${product.category.slug}/${product.slug}`,
                        priority: 0.6
                    });
                    foundProducts++;
                }

                productId++;

                // Прогресс каждые 50 товаров
                if (productId % 50 === 0) {
                    console.log(`📦 Found ${foundProducts} products so far...`);
                }

            } catch (error) {
                console.log(`✅ Reached end at product ID ${productId - 1}`);
                break;
            }
        }

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')}
</urlset>`;

        fs.writeFileSync('./public/sitemap.xml', sitemap);
        console.log(`✅ Sitemap created! ${allRoutes.length} URLs`);

    } catch (error) {
        console.error('❌ Error:', error);
    }
}

generateSitemap();