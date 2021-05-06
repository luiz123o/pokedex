type StatsProps = {
  hp: number
  attack: number
  defense: number
  spAttack: number
  spDef: number
  speed: number
  total: number
}

export interface PokemonDTO {
  name: string
  id: string
  image: string
  types: string[]
  stats: StatsProps
}
