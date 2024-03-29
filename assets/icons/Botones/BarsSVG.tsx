import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const BarsSVG = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 24 24" {...props}>
    <Path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
  </Svg>
)
export default BarsSVG;
