import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Text,
  Stack,
  Progress,
  Box
} from '@chakra-ui/react'
import { PokemonDTO } from '../../@types/pokemon'
import React from 'react'

interface Props {
  pokemon: PokemonDTO
}

const STATS_DICTIONARY: Record<keyof PokemonDTO['stats'], string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  spAttack: 'Special Attack',
  spDef: 'Special Defense',
  speed: 'Speed',
  total: 'Total'
}

const PokemonInfo: React.FC<Props> = ({ pokemon }) => {
  return (
    <Tabs colorScheme={pokemon.types[0]} variant="soft-rounded">
      <TabList borderBottom={0} marginBottom={3}>
        <Tab>About</Tab>
        <Tab>Base Stats</Tab>
      </TabList>

      <TabPanels>
        <TabPanel paddingX={0}>
          <Stack spacing={3}>
            <table>
              <tbody>
                <tr>
                  <Text as="td" color="gray.500" width={32}>
                    Species
                  </Text>
                  <td>{pokemon.types[0]}</td>
                </tr>
              </tbody>
            </table>
            <Heading fontSize="xl">Breeding</Heading>
            <table>
              <tbody>
                <tr>
                  <Text as="td" color="gray.500" width={32}>
                    Egg Cycle
                  </Text>
                  <td>{pokemon.types[0]}</td>
                </tr>
              </tbody>
            </table>
          </Stack>
        </TabPanel>
        <TabPanel paddingX={0}>
          <Box as="table" width="100%"></Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default PokemonInfo
