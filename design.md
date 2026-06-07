---
version: alpha
name: Hello Tutor
description: 

colors:
  primitives:
    parrot:
      '50':  '#f2fee7'
      '100': '#e1fbcc'
      '200': '#c4f89e'
      '300': '#9df066'
      '400': '#87e64b'
      '500': '#5ac919'
      '600': '#42a10f'
      '700': '#347a11'
      '800': '#2d6113'
      '900': '#285215'
      '950': '#112d06'

    purple:
        '50': '#eef4ff'
        '100': '#e0ebff'
        '200': '#c6d9ff'
        '300': '#a4c0fd'
        '400': '#809cf9'
        '500': '#6279f2'
        '600': '#4f5ce8'
        '700': '#3741cb'
        '800': '#2f38a4'
        '900': '#2d3682'
        '950': '#1b1f4b'

    gray:
      '50':  '#FFF5ED'
      '100': '#FAF0E8'
      '200': '#ECE3DB'
      '300': '#B2ACA6'
      '400': '#9A9490'
      '500': '#827E7A'
      '600': '#6B6865'
      '700': '#555351'
      '800': '#403E3D'
      '900': '#2C2B2A'
      '950': '#191919'

    green:
      '50':  '#F4FAF5'
      '100': '#D3F1D7'
      '200': '#B0E6BA'
      '300': '#8CDC9C'
      '400': '#62D17E'
      '500': '#22C55E'
      '600': '#199C49'
      '700': '#117535'
      '800': '#095023'
      '900': '#032E11'
      '950': '#010F04'

    red:
      '50':  '#FFF6F5'
      '100': '#FFD6D1'
      '200': '#FFB5AE'
      '300': '#FD938B'
      '400': '#F76F68'
      '500': '#EF4444'
      '600': '#BF3635'
      '700': '#912827'
      '800': '#661A1A'
      '900': '#3E0E0D'
      '950': '#190404'

    yellow:
      '50':  '#FCF8F3'
      '100': '#FCE7CF'
      '200': '#FBD5AA'
      '300': '#FAC383'
      '400': '#F8B158'
      '500': '#F59E0B'
      '600': '#C27C06'
      '700': '#915C03'
      '800': '#643D01'
      '900': '#392100'
      '950': '#140800'

    blue:
      '50':  '#F5F9FF'
      '100': '#D0E2FF'
      '200': '#ABC BFF'
      '300': '#87B4FD'
      '400': '#629CFA'
      '500': '#3B82F6'
      '600': '#2E67C5'
      '700': '#224E96'
      '800': '#163669'
      '900': '#0B1F40'
      '950': '#030B1B'

  semantic:
    # Backgrounds
    bg-action:        "colors.primitives.parrot.400"
    bg-primary:       "colors.primitives.gray.50"
    bg-secondary:     "colors.primitives.gray.100"
    bg-tertiary:      "colors.primitives.gray.200"
    bg-info-light:    "colors.primitives.blue.50"
    bg-success-light: "colors.primitives.green.50"
    bg-warning-light: "colors.primitives.yellow.50"
    bg-danger-light:  "colors.primitives.red.50"
    bg-disabled:      "colors.primitives.gray.200"
    bg-info:          "colors.primitives.blue.500"
    bg-success:       "colors.primitives.green.500"
    bg-warning:       "colors.primitives.yellow.500"
    bg-danger:        "colors.primitives.red.500"
    bg-brand:         "colors.primitives.parrot.400"
    bg-state-hover:   "rgba(0, 0, 0, 0.08)"

    # Borders
    border-primary:   "colors.primitives.gray.200"
    border-secondary: "colors.primitives.gray.100"
    border-select:    "colors.primitives.parrot.400"
    border-info:      "colors.primitives.blue.400"
    border-success:   "colors.primitives.green.400"
    border-warning:   "colors.primitives.yellow.400"
    border-danger:    "colors.primitives.red.400"
    border-disabled:  "colors.primitives.gray.200"

    # Text
    text-primary:     "colors.primitives.gray.950"
    text-secondary:   "colors.primitives.gray.800"
    text-tertiary:    "colors.primitives.gray.600"
    text-disabled:    "colors.primitives.gray.400"
    text-success:     "colors.primitives.green.600"
    text-danger:      "colors.primitives.red.600"
    text-invert:      "colors.primitives.gray.0"

typography:
  title-screen:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: 600
    lineHeight: 64px
  title-section:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 600
    lineHeight: 36px
  title-subsection:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
  title-body:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 600
    lineHeight: 26px
  title-group:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  body-lg-regular:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 26px
  body-base-regular:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm-regular:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-xs-regular:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  body-lg-bold:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 600
    lineHeight: 26px
  body-base-bold:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  body-sm-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  body-xs-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 20px
  label-xsm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: 600
    lineHeight: 16px
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: 400
    lineHeight: 16px

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  pill: 9999px
  full: 9999px


size:
  0: 0px
  2: 2px
  4: 4px
  6: 6px
  8: 8px
  12: 12px
  16: 16px
  20: 20px
  24: 24px
  28: 28px
  32: 32px
  36: 36px
  40: 40px
  48: 48px
