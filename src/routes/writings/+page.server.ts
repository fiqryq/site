import { getAllWritings } from '$lib/utils/writings';

export async function load() {
	const writings = getAllWritings();

	return {
		writings
	};
}
