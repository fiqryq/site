import { getAllWritings } from '$lib/utils/writings';

export async function load() {
	const allWritings = getAllWritings();
	const featuredWritings = allWritings.slice(0, 3);

	return {
		featuredWritings
	};
}
