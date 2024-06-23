import Head from 'next/head';
import SiteHeader from '../components/SiteHeader';
import Link from 'next/link';
import HeaderVideo from '../components/HeaderVideo';

export default function Home() {
	return (
		<>
			<Head>
				<title key="pagetitle">Bilgi Evde</title>
				<meta
					name="description"
					content="coolnomad travel blog - read our travel stories"
					key="metadescription"
				/>
			</Head>
			<div className="max-h-screen overflow-hidden relative">
				<HeaderVideo />
				{/* <div className="absolute bg-slate-900 inset-0 z-0 opacity-40"></div> */}
				{/* <SiteHeader className="z-10 fixed top-0 mx-auto max-w-full" /> */}
				{/*<main>
					 <div className="min-h-[50vh] flex flex-col items-center justify-center z-10 relative">
						 <h1 className="text-6xl text-center text-slate-100">
							Welcome to{' '}
							<span className="text-yellow-400">CoolNomad</span>{' '}
							Travel Blog
						</h1> 
						 <div className="mt-20">
							<Link
								href="/blog"
								className="text-2xl text-slate-100 border-slate-100 border-2 rounded-md py-3 px-4 hover:bg-yellow-300 hover:text-slate-800 hover:border-yellow-300 transition"
							>
								Blog Yazıları
							</Link>
						</div> 
					</div> 
				</main>*/}
			</div>
		</>
	);
}
