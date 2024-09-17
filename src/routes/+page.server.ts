import type { PageServerLoad } from './$types';

export const load = (async ({ setHeaders }) => {
    const req = await fetch('https://api.jikan.moe/v4/top/anime');
    const res = await req.json();

    // Set cache-control headers to cache for 24 hours
    setHeaders({
        'cache-control': 'public, max-age=86400' // 86400 seconds = 24 hours
    });

    return res;
}) satisfies PageServerLoad;
