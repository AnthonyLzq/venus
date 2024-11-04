const GENDERS = {
  NonSelected: '',
  Male: 'Male',
  Female: 'Female',
  NonBinary: 'Non binary'
}

const SKIN_TYPES = {
  NonSelected: '',
  Normal: 'Normal skin',
  Dry: 'Dry kin',
  Oil: 'Oil skin',
  Unknown: "Don't know, lets find out"
}

const SKIN_SENSITIVITIES = {
  NonSelected: '',
  VerySensitive: 'Very sensitive',
  Sensitive: 'A bit sensitive',
  NotSensitive: 'Not sensitive at all'
}

const SKIN_SENSITIVITIES_DESCRIPTIONS = {
  [SKIN_SENSITIVITIES.VerySensitive]:
    'Prone to frequent irritation and reactions, requires gentle, specialized care.',
  [SKIN_SENSITIVITIES.Sensitive]:
    'Mild reactions to certain ingredients or conditions; requires some caution',
  [SKIN_SENSITIVITIES.NotSensitive]:
    'Tolerates most products well; minimal reactions.'
}

export {
  GENDERS,
  SKIN_TYPES,
  SKIN_SENSITIVITIES,
  SKIN_SENSITIVITIES_DESCRIPTIONS
}
