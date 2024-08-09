import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    const req = await fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`)
    const res = await req.json()
    return res;
}) satisfies PageServerLoad;