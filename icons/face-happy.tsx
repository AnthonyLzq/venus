import Svg, { Path } from 'react-native-svg'

import { extendedTheme } from '@/utils/extended-theme'

const HappyFace = () => (
  <Svg width='40' height='40' viewBox='0 0 48 48' fill='none'>
    <Path
      d='M18 18H18.02M30 18H30.02M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM36 26C35.5228 28.8249 34.0507 31.3858 31.8499 33.2198C29.649 35.0539 26.8646 36.04 24 36C21.1354 36.04 18.351 35.0539 16.1501 33.2198C13.9493 31.3858 12.4772 28.8249 12 26H36Z'
      stroke={extendedTheme.colors.purple[5]}
      stroke-width='3.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Svg>
)

export { HappyFace }
