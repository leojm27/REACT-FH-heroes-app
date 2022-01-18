import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    // filtrar si no encuentra el publisher
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}