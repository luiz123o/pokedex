import { PokemonDTO } from '../../@types/pokemon'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Text,
  Stack,
  Heading,
  IconButton,
  Image
} from '@chakra-ui/react'
import { BsChevronLeft, BsHeart } from 'react-icons/bs'
import PokemonInfo from '../PokemonInfo'

type StatsProps = {
  base_stat: number
  stat: {
    name: string
  }
}

interface StatusPokemonProps {
  status: StatsProps[]
}

interface PokemonProps {
  pokemon: PokemonDTO
  onClose(): void
}
export function PokemonDrawer({ pokemon, onClose }: PokemonProps) {
  return (
    <Drawer isOpen placement="right" onClose={onClose} size="lg">
      <DrawerOverlay>
        <DrawerContent>
          <Stack bg={`${pokemon.types[0]}.600`} padding={6} color="white">
            <Stack
              direction="row"
              color="white"
              justify="space-between"
              align="center"
            >
              <IconButton
                onClick={onClose}
                aria-label="voltar"
                icon={<BsChevronLeft fontSize="2xl" />}
                border="none"
                colorScheme={`${pokemon.types[0]}.600`}
                variant="ghost"
                _hover={{
                  bg: 'none'
                }}
              />
              <IconButton
                aria-label="voltar"
                icon={<BsHeart fontSize="2xl" />}
                border="none"
                colorScheme={`${pokemon.types[0]}.600`}
                variant="ghost"
                _hover={{
                  bg: 'none'
                }}
              />
            </Stack>
            <Stack direction="row">
              <Stack width="100%">
                <Stack direction="row" align="center" justify="space-between">
                  <Heading textTransform="capitalize" color="white">
                    {pokemon.name}
                  </Heading>
                  <Text>#{pokemon.id}</Text>
                </Stack>

                <Stack direction="row">
                  {pokemon.types.map((type) => (
                    <Text
                      textTransform="uppercase"
                      key={type}
                      bg="rgba(255, 255, 255, 0.2)"
                      borderRadius={9999}
                      paddingX={4}
                      paddingY={1}
                      width="fit-content"
                    >
                      {type}
                    </Text>
                  ))}
                </Stack>
                <Image
                  src={pokemon.image}
                  marginBottom={-6}
                  paddingX={6}
                  zIndex={1}
                  width="50%"
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            bg="white"
            borderRadius={24}
            marginTop={-12}
            paddingTop={12}
            minHeight="512"
            paddingX={6}
          >
            <PokemonInfo pokemon={pokemon} />
          </Stack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
