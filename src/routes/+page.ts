import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const p_props = await parent();

	return { ...p_props, foo: 'bar' } as const;
};
