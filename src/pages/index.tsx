import { useState, useEffect } from 'react'
import api from '../services/api'
import { PokemonDTO } from '../@types/pokemon'
import { Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import { PokemonThumbnail } from '../components/PokemonThumbnail'
import { PokemonDrawer } from '../components/PokemonDrawer'

export default function Home() {
  const [pokemons, setPokemon] = useState<PokemonDTO[]>([])
  const [page, setPage] = useState<number>(1)
  const [select, setSelect] = useState<PokemonDTO | null>(null)

  useEffect(() => {
    api.list(page).then((newPokemon) => setPokemon((p) => p.concat(newPokemon)))
  }, [page])

  return (
    <Stack padding={3} spacing={3}>
      <Heading fontSize="4xl">Pokedex</Heading>
      <SimpleGrid gap={3} columns={2}>
        {pokemons.map((poke) => (
          <PokemonThumbnail
            key={poke.id}
            pokemon={poke}
            onClick={() => setSelect(poke)}
          />
        ))}
      </SimpleGrid>
      {select && (
        <PokemonDrawer
          onClose={() => setSelect(null)}
          pokemon={select}
        ></PokemonDrawer>
      )}
    </Stack>
  )
}
