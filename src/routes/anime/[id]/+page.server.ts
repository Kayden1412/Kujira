import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    const req = await fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`)
    const res = await req.json()
    const req2 = await fetch(`https://api.jikan.moe/v4/anime/${params.id}/statistics`)
    const res2  = await req2.json()
    return {info: res, stats: res2};
}) satisfies PageServerLoad;