import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/App.scss'

import SearchPage from './pages/SearchPage'
import PeoplePage from './pages/PeoplePage'
import StarshipsPage from './pages/StarshipsPage'
import VehiclesPage from './pages/VehiclesPage'
import PlanetsPage from './pages/PlanetsPage'
import SpeciesPage from './pages/SpeciesPage'
import FilmsPage from './pages/FilmsPage'

const App = () => {
	return (
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<Routes>
          <Route path="/" element={<HomePage />} />
					<Route path="/search/" element={<SearchPage />} /> 
          <Route path="/people/" element={<PeoplePage />} /> 
          <Route path="/starships/" element={<StarshipsPage />} /> 
          <Route path="/vehicles/" element={<VehiclesPage />} /> 
          <Route path="/planets/" element={<PlanetsPage />} /> 
          <Route path="/species/" element={<SpeciesPage />} /> 
          <Route path="/films/" element={<FilmsPage />} /> 
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App