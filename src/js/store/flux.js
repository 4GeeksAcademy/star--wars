const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {},
		actions: {
			loadSomeData: () => {
				async function fetchPlanets()  
				{
					let next = 'https://swapi.dev/api/planets'
					let planets = []
					let count = 0;

					try
					{
						while(next && count < 10)
						{
							const response = await fetch(next);
							const data = await response.json();
							planets.push(...data.results);
							next = data.next;
							count ++;
						}
					}
					catch(error)
					{
						console.error(error);
					}
					finally{
						return planets;
					}
				}

				async function fetchVehicles()  
				{
					let next = 'https://swapi.dev/api/vehicles'
					let vehicles = []
					let count = 0;

					try
					{
						while(next && count < 10)
						{
							const response = await fetch(next);
							const data = await response.json();
							vehicles.push(...data.results);
							next = data.next;
							count ++;
						}
					}
					catch(error)
					{
						console.error(error);
					}
					finally{
						return vehicles;
					}
				}

				async function fetchPeople()  
				{
					let next = 'https://swapi.dev/api/people'
					let people = []
					let count = 0;

					try
					{
						while(next && count < 10)
						{
							const response = await fetch(next);
							const data = await response.json();
							people.push(...data.results);
							next = data.next;
							count ++;
						}
					}
					catch(error)
					{
						console.error(error);
					}
					finally{
						return people;
					}
				}


				fetchPlanets()
				.then(planets => {
					setStore({planets: planets});
					console.log("All fetched planets:", planets);
				})

				fetchPeople()
				.then(people => {
					setStore({people: people});
					console.log("All fetched people:", people);
				})

				fetchVehicles()
				.then(vehicles => {
					setStore({vehicles: vehicles});
					console.log("All fetched vehicles:", vehicles);
				})
			}
		}
	};
};

export default getState;
