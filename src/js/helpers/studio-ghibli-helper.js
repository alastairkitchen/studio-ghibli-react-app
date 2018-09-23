export function createFilmPanelData(filmData, peopleState) {
  let filmDataCopy = Object.assign({}, filmData[0]);
  let infoPanelData = {};
  infoPanelData.title = filmDataCopy.title;
  infoPanelData.image_src = "https://via.placeholder.com/1200x400";
  infoPanelData.description = filmDataCopy.description;
  infoPanelData.release_date = filmDataCopy.release_date;
  infoPanelData.director = filmDataCopy.director;
  infoPanelData.producer = filmDataCopy.producer;
  infoPanelData.imdb_link = "to do";
  infoPanelData.imdb_score = "to do";
  infoPanelData.rt_link = "to do";
  infoPanelData.rt_score = filmDataCopy.rt_score;

  // generate an array of people ID's from state
  if (filmDataCopy.people.length > 0) {
    let peopleIds = [];

    filmDataCopy.people.forEach(person => {
      let firstIndex = person.indexOf("/people/");
      firstIndex = firstIndex + "/people/".length;
      let lastIndex = parseInt(person.length);

      if (person.substring(firstIndex, lastIndex)) {
        peopleIds.push(person.substring(firstIndex, lastIndex));
      }
    });

    // filter people state to id array
    let newPeople = peopleState.filter(person => {
      return peopleIds.some(function(id) {
        return id === person.id;
      });
    });

    infoPanelData.people = newPeople;
  }

  return infoPanelData;
}
