// -----------------------------------------------
//  Service to get studio ghibli data via API
// -----------------------------------------------

export default class studioGhibliService {
  loadFilms() {
    let promise = new Promise((resolve, reject) => {
      // fetch film data from API
      fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          // success
          resolve({ films: myJson });
        });
    }).catch(error => {
      return { error: error };
    });

    return promise;
  }

  loadPeople() {
    let promise = new Promise((resolve, reject) => {
      // fetch film data from API
      fetch("https://ghibliapi.herokuapp.com/people")
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          // success
          resolve({ people: myJson });
        });
    }).catch(error => {
      return { error: error };
    });

    return promise;
  }

  loadLocations() {
    let promise = new Promise((resolve, reject) => {
      // fetch film data from API
      fetch("https://ghibliapi.herokuapp.com/locations")
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          // success
          resolve({ locations: myJson });
        });
    }).catch(error => {
      return { error: error };
    });

    return promise;
  }
}
