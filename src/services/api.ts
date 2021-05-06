import { PokemonDTO } from '../@types/pokemon'

const PAGE_SIZE = 12

export default {
  list: (page = 1): Promise<PokemonDTO[]> => {
    return Promise.all(
      new Array(page * PAGE_SIZE + 1)
        .fill(true)
        .map((_, index) => index)
        .slice(1)
        // eslint-disable-next-line prettier/prettier
        .map((id) => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((rawPokemon) => ({
              id: rawPokemon.id,
              name: rawPokemon.name,
              image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
              types: rawPokemon.types.map(
                (type: { type: { name: string } }) => type.type.name
              ),
              stats: rawPokemon.stats.map((s: unknown) => s)
            }))
        )
    )
  }
}
