import Svg, { Path } from 'react-native-svg'

import { extendedTheme } from '@/utils/extended-theme'

const NeutralFace = () => (
  <Svg width='40' height='40' viewBox='0 0 48 48' fill='none'>
    <Path
      d='M16 30H32M18 18H18.02M30 18H30.02M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z'
      stroke={extendedTheme.colors.purple[5]}
      stroke-width='3.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Svg>
)

export { NeutralFace }
