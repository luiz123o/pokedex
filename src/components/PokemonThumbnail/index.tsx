import { PokemonDTO } from '../../@types/pokemon'
import { Box, Heading, Stack, Text, Image } from '@chakra-ui/react'

interface Props {
  pokemon: PokemonDTO
  onClick: () => void
}

export function PokemonThumbnail({ pokemon, onClick }: Props) {
  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      bg={`${pokemon.types[0]}.600`}
      borderRadius={12}
      padding={3}
      color="white"
    >
      <Stack>
        <Stack direction="row" align="baseline" justify="space-between">
          <Heading fontSize="xl" textTransform="capitalize">
            {pokemon.name}
          </Heading>
          <Text>#{pokemon.id}</Text>
        </Stack>
        <Stack direction="row" justify="space-between">
          <Stack>
            {pokemon.types.map((type) => (
              <Text
                key={type}
                bg="rgba(255, 255, 255, 0.2)"
                borderRadius={9999}
                paddingX={2}
                paddingY={1}
                width="fit-content"
              >
                {type}
              </Text>
            ))}
          </Stack>
          <Image height={['70px', '300px']} src={pokemon.image} />
        </Stack>
      </Stack>
    </Box>
  )
}
