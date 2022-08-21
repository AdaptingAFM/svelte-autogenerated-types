<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: console.table(data);
</script>
