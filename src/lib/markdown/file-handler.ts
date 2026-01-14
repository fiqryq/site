import { error } from '@sveltejs/kit';

interface PostMetadata {
	title: string;
	description: string;
	date: string;
}

interface PostModule {
	metadata: PostMetadata;
	default: any;
}

interface Writing {
	slug: string;
	title: string;
	description: string;
	date: string;
}

const eagerModules = import.meta.glob<PostModule>('../content/post/*.svx', {
	eager: true
});

const lazyModules = import.meta.glob<PostModule>('../content/post/*.svx');

export function getAllWritings(): Writing[] {
	const writings = Object.entries(eagerModules).map(([path, module]) => {
		const slug = path.split('/').pop()?.replace('.svx', '') || '';

		return {
			slug,
			...module.metadata
		};
	});

	return writings.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getWritingBySlug(slug: string) {
	const postPath = Object.keys(lazyModules).find((path) => {
		const pathSlug = path.split('/').pop()?.replace('.svx', '') || '';
		return pathSlug === slug;
	});

	if (!postPath) {
		throw error(404, 'Post not found');
	}

	const post = await lazyModules[postPath]();
	const { metadata, default: Content } = post;

	return {
		slug,
		Content,
		title: metadata.title,
		description: metadata.description,
		date: metadata.date
	};
}
