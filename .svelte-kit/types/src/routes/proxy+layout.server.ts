import type { LayoutServerLoad } from './$types';

export const load = async () => ({ bar: 'foo' } as const);
