class SwapiService {
    _api = 'https://swapi.dev/api/';

    async getResource(url) {
        const response = await fetch(`${this._api}${url}`);

        if(!response.ok) {
            throw new Error(`Could not fetch ${url}, res status ${response.status}`);
        }
        return await response.json();
    }

    async getAllPeople() {
        const response = await this.getResource('/people/');
        return response.results;
    }

    async getCharacter(id) {
        return await this.getResource(`/people/${id}`);
    }

    async getNextPage(pageNumber) {
        const response = await this.getResource(`/people/?page=${pageNumber}`);
        return response.results;
    }
}

export default SwapiService;
