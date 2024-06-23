import Head from 'next/head';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { getPostList } from '../../lib/posts';
import FeaturedImage from '../../components/FeaturedImage';
import Date from '../../components/Date';
import LoadMore from '../../components/LoadMore';
import { useState } from 'react';

export async function getStaticProps() {
	const allPosts = await getPostList();

	return {
		props: {
			allPosts: allPosts,
		},
	};
}

export default function BlogHome({ allPosts }) {
	const [posts, setPosts] = useState(allPosts);

	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>
			<div className="h-[50vh] min-h-[20rem] bg-[url('/8720926.jpg')] bg-top relative">
				<div className="absolute bg-slate-900 inset-0 z-0 opacity-40"></div>

				<div className="container max-w-full mx-auto">
					<SiteHeader className="header-blog-home z-10 relative max-w-3/4" />
				</div>

				<h1 className="text-6xl text-center text-slate-100 relative z-10 py-8">
					BLOG
				</h1>

				<p className="relative z-10 text-center text-slate-200 text-2xl">
					Read our latest articles
				</p>
			</div>
			<main>
				<section className="container mx-auto lg:max-w-3/4  mt-4">
					<ul className="grid grid-cols-4 gap-8">
						{posts.nodes.map((post) => (
							<li
								key={post.slug}
								className="h-full flex flex-col border rounded-2xl"
							>
								<div className="overflow-hidden rounded-t-2xl relative">
									<FeaturedImage post={post} />
								</div>
								<div className="p-3 flex-1 flex flex-col">
									<h2 className="space-x-2 mb-1">
										<Link
											href={`/blog/${post.slug}`}
											className="text-lg font-bold hover:text-primary-500"
										>
											{post.title}
										</Link>
									</h2>
									<div className="space-x-2 mb-1">
										<Date dateString={post.date} />{' '}
										tarihinde yayınlandı.
									</div>
									<div
										className="line-clamp-2 mb-3"
										dangerouslySetInnerHTML={{
											__html: post.excerpt,
										}}
									></div>
									<div className="space-x-2 mb-1">
										{post.categories.nodes.map(
											(category) => (
												<Link
													className="text-blue-400 hover:text-blue-500"
													href={`/category/${category.slug}`}
													key={category.slug}
												>
													{category.name}
												</Link>
											)
										)}{' '}
										kategorisi altında paylaşıldı.
									</div>
								</div>
							</li>
						))}
					</ul>
					<div className="py-4 text-center">
						<LoadMore posts={posts} setPosts={setPosts} />
					</div>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
