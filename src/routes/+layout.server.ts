import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => ({ bar: 'foo' } as const);
