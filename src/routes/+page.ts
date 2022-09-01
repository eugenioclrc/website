import { ghostHeader } from "$lib/store";
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true;

	

ghostHeader.set(true);