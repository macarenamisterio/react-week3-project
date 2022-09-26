export default function Search() {
	return (
		<form>
			<input
				type="Search"
				id="header-search"
				placeholder="Search city"
				name="search"
			/>
			<button type="submit">Search</button>
			<p>
				Open source{" "}
				<a
					href="https://github.com/macarenamisterio/react-week3-project"
					target={a_blank}>
					code
				</a>{" "}
				created by Macarena Misterio.
			</p>
		</form>
	);
}
