import Image from "next/image";


import Link from "next/link";

export default async function Home() {
	const url = await fetch("https://simple-books-api.glitch.me/books");
	const response = await url.json();
	return (
		<main>
			{response.map((book: any) => (
				<div>
					<Link href={`${book.id}`}>
						<h1 className="text-5xl m-2 ">{book.name}</h1>
					</Link>
				</div>
			))}
		</main>
	);
}