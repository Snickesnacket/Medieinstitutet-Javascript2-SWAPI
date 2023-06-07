import React from 'react'
import {  useRef, useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'


export const StarshipsPage = () => {
  return (
    <>
			<h1>Search result</h1>

		{/* 	{searchResult && (
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
			)} */}
		</>
  )
}

export default StarshipsPage