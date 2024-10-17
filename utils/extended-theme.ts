import { type Config } from 'tailwindcss'

export const extendedTheme = {
  colors: {
    background: '#34004C',
    purple: {
      1: '#56007E',
      2: '#62519D',
      3: '#AE00FF'
    }
  },
  borderRadius: {
    2: '0.25rem', // 4px
    3: '0.375rem', // 6px
    4: '0.5rem', // 8px
    5: '0.75rem', // 12px
    6: '1rem', // 16px
    7: '1.5rem', // 24px
    9: '2.5rem', // 40px
    full: '999px'
  },
  fontSize: {
    // 1rem = 16px

    /** 48px size / 56px high / normal */
    8: ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.025em' }],
    /** 36px size / 40px high / normal */
    7: ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.01em' }],
    /** 32px size / 38px high / normal */
    6: ['2rem', { lineHeight: '2.375rem', letterSpacing: '-0.008em' }],
    /** 30px size / 36px high / normal */
    5: ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.007em' }],
    /** 24px size / 30px high / normal */
    4: ['1.5rem', { lineHeight: '1.875rem', letterSpacing: '-0.00625em' }],
    /** 18px size / 26px high / normal */
    3: ['1.125rem', { lineHeight: '1.625rem', letterSpacing: '-0.0025em' }],
    /** 16px size / 24px high / normal */
    2: ['1rem', { lineHeight: '1.5rem' }],
    /** 12px size / 16px high / normal */
    1: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.0025em' }]
  },
  spacing: {
    px: '1px',
    0: '0px',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.5rem', // 24px
    6: '2rem', // 32px
    7: '2.5rem', // 40px
    8: '3rem', // 48px
    9: '4rem', // 64px
    10: '6rem', // 96px,
    256: '64rem' // 1024px
  }
} satisfies Config['theme']
