import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={28}
    fill="#fff"
    {...props}
  >
    <Path
      fill="#fff"
      d="M17.234 4.004c-4.835 0-8.927 3.218-10.317 7.655a14.976 14.976 0 0 1 6.872-1.656h5.414c.541 0 .985.45.985 1s-.444 1-.985 1H13.79a13.105 13.105 0 0 0-7.364 2.256A13.55 13.55 0 0 0 .5 25.5v1c0 .831.658 1.5 1.477 1.5.818 0 1.476-.669 1.476-1.5v-1c0-3.043 1.274-5.78 3.31-7.698C7.981 22.52 12.208 26 17.234 26h.062C25.423 25.957 32 17.82 32 7.79c0-2.661-.461-5.192-1.298-7.473-.16-.431-.782-.412-.997-.006-1.156 2.2-3.445 3.693-6.072 3.693h-6.399Z"
    />
  </Svg>
)
export default SvgComponent
