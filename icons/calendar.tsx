import Svg, { Path } from 'react-native-svg'

import { extendedTheme } from '@/utils/extended-theme'

const CalendarIcon = () => (
  <Svg width={20} height={20} viewBox='0 0 24 28' fill='none'>
    <Path
      d='M22.9091 2.54545H21.6364V0H19.0909V2.54545H6.36364V0H3.81818V2.54545H2.54545C1.14545 2.54545 0 3.69091 0 5.09091V25.4545C0 26.8545 1.14545 28 2.54545 28H22.9091C24.3091 28 25.4545 26.8545 25.4545 25.4545V5.09091C25.4545 3.69091 24.3091 2.54545 22.9091 2.54545ZM22.9091 25.4545H2.54545V11.4545H22.9091V25.4545ZM22.9091 8.90909H2.54545V5.09091H22.9091V8.90909Z'
      fill={extendedTheme.colors.purple[3]}
    />
  </Svg>
)

export { CalendarIcon }
