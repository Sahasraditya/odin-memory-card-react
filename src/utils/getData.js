// Getting data from pokemon api

const ITEM_COUNT = 16;

const randomPokemon = () => {
    const result = [];

    for (let i = 0;i<ITEM_COUNT;i++){
        let randomId = Math.ceil(Math.random() * 151);
        
        // avoid duplication
        while (result.includes(randomId)){
            randomId = Math.ceil(Math.random() * 151);
        }
        result.push(randomId);
    }
    return result;
}

const getData = async() => {
    const allIds = randomPokemon();
    try{
        const requests = allIds.map((id) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
            if (!response.ok){
                throw new Error('Error fetching ID ${id}:${response.statusText}');
            }
        return response.json();
        })
        .then((result) => ({
            id:result.id,
            name:result.name,
            spriteSource: result.sprites.other['official-artwork'].front_default,
        })),
        );
        const results = await Promise.all(requests);
        return results;
    }
    catch(error){
        console.error("Data could not be Fetched")
    }
};

export default getData;
