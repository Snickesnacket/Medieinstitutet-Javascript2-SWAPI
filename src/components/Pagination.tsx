import React from 'react'
import Button from 'react-bootstrap/Button'

interface IPaginationProps {
	totalPages: number
	hasPreviousPage: boolean
	hasNextPage: boolean
	onPreviousPage: () => void
	onNextPage: () => void
}

const Pagination: React.FC<IPaginationProps> = ({
	hasPreviousPage,
	hasNextPage,
	onPreviousPage,
	onNextPage,
}) => {
	return (
		<div className="d-flex justify-content-between align-items-center">
			<div className="prev">
				<Button
					disabled={!hasPreviousPage}
					onClick={onPreviousPage}
					variant="primary"
				>Previous Page</Button>
			</div>


			<div className="next">
				<Button
					disabled={!hasNextPage}
					onClick={onNextPage}
					variant="primary"
				>Next Page</Button>
			</div>
		</div>
	)
}

export default Pagination
