import axios from "axios";

export const formatPokemonsData = async ({ next, results }) => {
  const promises = [];

  for (let pokemon of results) {
    const response = await axios.get(pokemon.url);

    promises.push({
      ...response.data,
      captured: false,
    });
  }

  const pokemons = await Promise.all(promises);

  return { next, pokemons };
};

export const formatPokemonsSpeciesData = async (data) => {
  const promises = [];
  for (let item of data) {
    const response = await axios.get(item.pokemon.url);

    promises.push({
      ...response.data,
      captured: false,
    });
  }

  const pokemons = await Promise.all(promises);

  return pokemons;
};

export const formatPokemonData = async (data) => {
  let { hp, attack, defense, speed, specialAttack, specialDefense } = "";
  data.stats.forEach((item) => {
    switch (item.stat.name) {
      case "hp":
        hp = item["base_stat"];
        break;
      case "attack":
        attack = item["base_stat"];
        break;
      case "defense":
        defense = item["base_stat"];
        break;
      case "speed":
        speed = item["base_stat"];
        break;
      case "special-attack":
        specialAttack = item["base_stat"];
        break;
      case "special-defense":
        specialDefense = item["base_stat"];
        break;
      default:
        return item.stat.name;
    }
  });

  //convertendo altura em decimetro para metros
  const height = (data.height * 0.1).toFixed(2);
  //convertendo para kg
  const weight = data.weight / 10;

  const types = data.types.map(({ type }) => ({
    name: type.name,
    url: type.url,
  }));
  const promises = [];

  for (let item of data.abilities) {
    const response = await axios.get(item.ability.url);
    const { effect_entries } = response.data;
    const short_effect = effect_entries
      .filter((entry) => entry.language.name === "en")
      .map((item) => item.short_effect)[0];

    promises.push({ ability: item.ability.name, effect: short_effect });
  }

  const abilities = await Promise.all(promises);
  console.log("short effect", abilities);

  return {
    ...data,
    types,
    height,
    weight,
    stats: { hp, attack, defense, speed, specialAttack, specialDefense },
    abilities,
    captured: false,
  };
};

export const savePokemonToLS = (pokemons) => {
  const savedPokemonsInLS = getPokemonFromLS();
  savedPokemonsInLS.forEach((pokemon) => {
    if (pokemons.includes(pokemon)) return;
  });
  localStorage.setItem("pokedex", JSON.stringify(pokemons));
};

export const getPokemonFromLS = () =>
  JSON.parse(localStorage.getItem("pokedex")) || [];

export const removePokemonFromLS = (id) => {
  const newPokedex = JSON.parse(localStorage.getItem("pokedex")).filter(
    (item) => item.id !== id
  );
  savePokemonToLS(newPokedex);
};
