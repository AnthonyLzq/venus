import Svg, { Path } from 'react-native-svg'

import { extendedTheme } from '@/utils/extended-theme'

const OilSkinIcon = () => (
  <Svg width='36' height='36' viewBox='0 0 48 48' fill='none'>
    <Path
      d='M20.14 30.68C22.37 32.44 25.62 32.44 27.85 30.68C30.08 28.92 30.646 25.904 29.192 23.53L24 16L18.796 23.53C17.344 25.904 17.91 28.918 20.14 30.68Z'
      stroke={extendedTheme.colors.purple[5]}
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z'
      stroke={extendedTheme.colors.purple[5]}
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)

export { OilSkinIcon }
