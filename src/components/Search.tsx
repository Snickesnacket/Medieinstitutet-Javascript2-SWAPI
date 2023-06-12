import React from 'react'

interface IProps{
    error: string 
    loading: boolean
    searchresult
}



const Search: React.FC<IProps> = ({}) => {

    setError(null)
		setLoading(true)
		setSearchResult(null)

		try {
			const res = await search(searchQuery)
			setSearchResult(res)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			setError(err.message)
		}

		setLoading(false)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		// haxx0r
		if (!searchInput.trim().length) {
			return
		}

		setSearchParams({ query: searchInput })  

	}

	// react to changes in our page state
	useEffect(() => {
		if (!query) {
			return
		}

		Searchfunc(query)
	}, [query])

    return (
		<>
			<h1>🔎🔦👀</h1>

			<Form className="mb-4" onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="searchQuery">
					<Form.Label>Search Query</Form.Label>
					<Form.Control
						onChange={e => setSearchInput(e.target.value)}
						placeholder="Enter your search query"
						required
						type="text"
						value={searchInput}
					/>
				</Form.Group>

				<div className="d-flex justify-content-end">
					<Button
						variant="success"
						type="submit"
						disabled={!searchInput.trim().length}
					>Search</Button>
				</div>
			</Form>

			{error && <Alert variant='warning'>{error}</Alert>}

			{loading && <p>🤔 Loading...</p>}

			{searchResult && (
				<div id="search-result">
				<p>Showing search results for "{query}"...</p>
					<ListGroup className="mb-3">
						{searchResult.data.map(data => (
							<ListGroup.Item
								action
								href={''}
								key={data.id}
							>
								<h2 className="h3">{data.name}</h2>
								<p className="text-muted small mb-0">
									{data.height} points by {data.birth_year} at {data.created}
								</p>
							</ListGroup.Item>
						))}
					</ListGroup>
				</div>
			)}
		</>
	)
}

export default Search