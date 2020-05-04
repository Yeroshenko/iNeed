import { randomNumber } from './randomNumber'

export const randomColor = () => {
  //  color in hsl format
  let h = randomNumber(0, 360) // hue
  let s = randomNumber(42, 98) / 100 // saturation 
  let l = randomNumber(40, 65) / 100 // lightness

  // convert hsl to hex
  let c = (1 - Math.abs(2 * l - 1)) * s
  let x = c * (1 - Math.abs((h / 60) % 2 - 1))
  let m = l - c/2
  let r = 0
  let g = 0
  let b = 0

  if (0 <= h && h < 60) {
    r = c 
    g = x 
    b = 0
  } else if (60 <= h && h < 120) {
    r = x 
    g = c 
    b = 0
  } else if (120 <= h && h < 180) {
    r = 0 
    g = c 
    b = x
  } else if (180 <= h && h < 240) {
    r = 0 
    g = x 
    b = c
  } else if (240 <= h && h < 300) {
    r = x 
    g = 0 
    b = c
  } else if (300 <= h && h < 360) {
    r = c 
    g = 0 
    b = x
  }

  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16)
  g = Math.round((g + m) * 255).toString(16)
  b = Math.round((b + m) * 255).toString(16)

  // Prepend 0s, if necessary
  if (r.length === 1)
    r = '0' + r
  if (g.length === 1)
    g = '0' + g
  if (b.length === 1)
    b = '0' + b

  return '#' + r + g + b
}