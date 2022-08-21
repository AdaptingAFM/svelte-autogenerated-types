import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> {}
interface LayoutParams extends RouteParams {}

export type Errors = undefined;
export type PageData = Omit<LayoutData.front, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+page.js').load>>>> & Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+page.js').load>>>;
export type PageLoad<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Load<RouteParams, null, LayoutData.front, OutputData>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageServerData = null;
export type LayoutData = Omit<Record<never, never>, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.server.js').load>>>> & Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.server.js').load>>>;
export type LayoutServerData = Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.server.js').load>>>;
export type LayoutServerLoad<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.ServerLoad<LayoutParams, Record<never, never>, OutputData>;
export type LayoutServerLoadEvent = Parameters<LayoutServerLoad>[0];

export namespace LayoutData {
	export type front = Record<never, never>;
}

export namespace LayoutLoad {
	
}

export namespace LayoutLoadEvent {
	
}

export namespace LayoutServerData {
	export type front = null;
}

export namespace LayoutServerLoad {
	
}

export namespace LayoutServerLoadEvent {
	
}