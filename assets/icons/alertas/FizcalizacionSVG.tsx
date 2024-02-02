import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const FizcalizacionSVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M5 28c-1.166 0-2.158-.408-2.974-1.225C1.209 25.958.8 24.967.8 23.8v-4.2H5V0h21v23.8c0 1.167-.409 2.158-1.225 2.975C23.959 27.592 22.967 28 21.8 28H5Zm16.8-2.8c.397 0 .73-.134.998-.402.269-.269.403-.601.403-.998v-21H7.8v16.8h12.6v4.2c0 .397.134.73.402.997.269.269.601.403.998.403ZM9.2 9.8V7h12.6v2.8H9.2Zm0 4.2v-2.8h12.6V14H9.2ZM5 25.2h12.6v-2.8h-14v1.4c0 .397.135.73.403.997.269.269.601.403.998.403Zm0 0H3.6h14H5Z"
    />
  </Svg>
)
export default FizcalizacionSVG
