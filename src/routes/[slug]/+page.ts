import { getWritingBySlug } from '$lib/markdown/file-handler';
import type { RouteParams } from '../writings/[slug]/$types';

export async function load({ params }: { params: RouteParams }) {
	const slug = params.slug;

	const writing = await getWritingBySlug(slug);

	return writing;
}
