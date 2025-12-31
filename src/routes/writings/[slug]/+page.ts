import { getWritingBySlug } from '$lib/utils/writings';
import type { RouteParams } from './$types';

export async function load({ params }: { params: RouteParams }) {
	const slug = params.slug;

	const writing = await getWritingBySlug(slug);

	return writing;
}
