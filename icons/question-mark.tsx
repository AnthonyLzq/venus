import Svg, { Path } from 'react-native-svg'

import { extendedTheme } from '@/utils/extended-theme'

const QuestionMarkIcon = () => (
  <Svg width='36' height='36' viewBox='0 0 48 48' fill='none'>
    <Path
      d='M16 16C16 14.4087 16.7375 12.8826 18.0503 11.7574C19.363 10.6321 21.1435 10 23 10H25C26.8565 10 28.637 10.6321 29.9497 11.7574C31.2625 12.8826 32 14.4087 32 16C32.0736 17.2985 31.7234 18.5858 31.0019 19.668C30.2805 20.7501 29.2269 21.5686 28 22C26.7731 22.5753 25.7195 23.6665 24.9981 25.1094C24.2766 26.5523 23.9264 28.2687 24 30'
      stroke={extendedTheme.colors.purple[5]}
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M24 38V38.02'
      stroke={extendedTheme.colors.purple[5]}
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)

export { QuestionMarkIcon }
