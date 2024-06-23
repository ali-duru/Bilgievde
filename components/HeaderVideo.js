import Link from 'next/link';
import React from 'react';
import SiteHeader from './SiteHeader';

function HeaderVideo() {
	return (
		<header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden ">
			<div className="absolute bg-slate-900 inset-0 z-20 opacity-40"></div>
			<SiteHeader className="z-50 fixed top-0 mx-auto max-w-3/4 " />
			{/* <div class="relative z-30 p-5 text-2xl text-white bg-slate-900 bg-opacity-70 rounded-xl">
				Bilgi Evde Sitesine Hoşgeldiniz
			</div> */}
			<video
				autoPlay
				loop
				muted
				class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
			>
				<source src="/anime-typing.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="min-h-[50vh]  flex flex-col items-center justify-center z-50 ">
				{/* <h1 className="text-6xl text-center text-slate-100">
							Welcome to{' '}
							<span className="text-yellow-400">CoolNomad</span>{' '}
							Travel Blog
						</h1> */}
				<div className="mt-20">
					<Link
						href="/blog"
						className="text-4xl text-slate-100 border-slate-100 border-2 rounded-md py-6 px-8 hover:bg-yellow-300 hover:text-slate-800 hover:border-yellow-300 transition"
					>
						Blog Yazıları
					</Link>
				</div>
			</div>
		</header>
	);
}

export default HeaderVideo;
