import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

import { extendedTheme } from './extended-theme'

function formatColors() {
  const colors: (string | { [key: string]: string[] })[] = []

  for (const [key, color] of Object.entries(extendedTheme.colors)) {
    if (typeof color === 'string') {
      colors.push(key)
    } else {
      const colorGroup = Object.keys(color).map(subKey =>
        subKey === 'DEFAULT' ? '' : subKey
      )
      colors.push({ [key]: colorGroup })
    }
  }

  return colors
}

const customTwMerge = extendTailwindMerge({
  override: {
    theme: {
      colors: formatColors(),
      borderRadius: Object.keys(extendedTheme.borderRadius)
    },
    classGroups: {
      'font-size': [
        {
          text: Object.keys(extendedTheme.fontSize)
        }
      ]
    }
  }
})

const cn = (...inputs: ClassValue[]) => {
  return customTwMerge(clsx(inputs))
}

export { cn }
