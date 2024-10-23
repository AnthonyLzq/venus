import Svg, { Path } from 'react-native-svg'

import { extendedTheme } from '@/utils/extended-theme'

const NormalSkinIcon = () => (
  <Svg width='36' height='36' viewBox='0 0 48 48' fill='none'>
    <Path
      d='M12 6L6 12'
      stroke={extendedTheme.colors.purple[5]}
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M42 36L36 42'
      stroke={extendedTheme.colors.purple[5]}
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M22 6L6 22'
      stroke={extendedTheme.colors.purple[5]}
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M32 6L6 32'
      stroke={extendedTheme.colors.purple[5]}
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M42 6L6 42'
      stroke={extendedTheme.colors.purple[5]}
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M42 16L16 42'
      stroke={extendedTheme.colors.purple[5]}
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M42 26L26 42'
      stroke={extendedTheme.colors.purple[5]}
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)

export { NormalSkinIcon }
