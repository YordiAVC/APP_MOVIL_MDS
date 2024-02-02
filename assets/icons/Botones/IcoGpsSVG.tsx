import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IcoGpsSVG = (props: SvgProps) => (
  <Svg
    width={22}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.772 27.37C15.585 23.85 22 15.32 22 10.528 22 4.715 17.285 0 11.473 0 5.66 0 .945 4.715.945 10.527c0 4.792 6.415 13.324 9.228 16.844a1.656 1.656 0 0 0 2.599 0Zm-1.3-20.352a3.509 3.509 0 1 1 0 7.018 3.509 3.509 0 0 1 0-7.018Z"
      fill="#fff"
    />
  </Svg>
)

export default IcoGpsSVG
