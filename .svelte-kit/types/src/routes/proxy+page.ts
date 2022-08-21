import type { PageLoad } from './$types';

export const load = async ({ parent }: Parameters<PageLoad>[0]) => {
	const p_props = await parent();

	return { ...p_props, foo: 'bar' } as const;
};
