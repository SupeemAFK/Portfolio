import type { Load } from "@sveltejs/kit"

export const prerender = true;
export const load: Load = ({ url }) => {
    return {
        url: url.pathname
    }
}