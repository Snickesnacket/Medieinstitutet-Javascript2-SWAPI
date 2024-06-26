import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/App.scss'

import PeoplePage from './pages/PeoplePage'
import StarshipsPage from './pages/StarshipsPage'
import VehiclesPage from './pages/VehiclesPage'
import PlanetsPage from './pages/PlanetsPage'
import SpeciesPage from './pages/SpeciesPage'
import PersonPage from './pages/PersonPage'
import VehiclePage from './pages/VehiclePage'
import SpeciePage from './pages/SpeciePage'
import StarshipPage from './pages/StarshipPage'
import PlanetPage from './pages/PlanetPage'
import FilmPage from './pages/filmPage'
import { FilmsPage } from './pages/FilmsPage'


const App = () => {
	return (
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people/" element={<PeoplePage />} /> 
		<Route path="/people/:id" element={<PersonPage />} /> 
        <Route path="/starships/" element={<StarshipsPage />} /> 
		<Route path="/starships/:id" element={<StarshipPage />} />
        <Route path="/vehicles/" element={<VehiclesPage />} /> 
		<Route path="/Vehicles/:id" element={<VehiclePage />} /> 
        <Route path="/planets/" element={<PlanetsPage />} />  
		<Route path="/planets/:id" element={<PlanetPage />} />  
        <Route path="/species/" element={<SpeciesPage />} /> 
		<Route path="/species/:id" element={<SpeciePage />} /> 
        <Route path="/films/" element={<FilmsPage />} /> 
		<Route path="/films/:id" element={<FilmPage />} /> 
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App