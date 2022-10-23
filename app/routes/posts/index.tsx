import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
	return json({
		posts: [
			{
				title: 'My first post',
				slug: 'o-buzio',
			},
			{
				title: 'My second post',
				slug: 'o-buzio-2',
			},
		],
	});
};

export default function Posts() {
	const { posts } = useLoaderData();
	console.log('🚀 ~ file: index.tsx ~ line 22 ~ Posts ~ posts', posts);
	return (
		<main>
			<h1>Posts</h1>
		</main>
	);
}
