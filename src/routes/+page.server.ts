import type { PageServerLoad } from './$types';

export const load = (async () => {
    const req  = await fetch('https://api.jikan.moe/v4/top/anime')
    const res = await req.json()
    return res;
}) satisfies PageServerLoad;