import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const IncendioSVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M10.247 28c-1.289 0-2.385-.454-3.287-1.361-.903-.907-1.354-2.01-1.354-3.306H4.059c-.85 0-1.58-.304-2.185-.914a3.004 3.004 0 0 1-.91-2.197v-7.778h17.019V6.222c0-.855.302-1.588.909-2.197a2.971 2.971 0 0 1 2.185-.914h3.094V1.556c0-.441.148-.81.445-1.109A1.493 1.493 0 0 1 25.718 0h1.547c.438 0 .806.15 1.102.447.297.298.445.668.445 1.109V3.11h.85c.671 0 1.277.195 1.819.583.541.39.915.908 1.121 1.556l2.244 6.689c.051.155.09.318.116.486.025.168.038.343.038.525v10.383h-4.64c0 1.297-.452 2.399-1.355 3.306-.902.907-1.998 1.361-3.287 1.361-1.29 0-2.385-.454-3.288-1.361-.902-.907-1.353-2.01-1.353-3.306h-6.189c0 1.297-.45 2.399-1.353 3.306S11.537 28 10.247 28Zm0-3.111c.439 0 .806-.15 1.103-.447a1.51 1.51 0 0 0 .444-1.109c0-.44-.148-.81-.444-1.108a1.493 1.493 0 0 0-1.103-.447c-.438 0-.806.149-1.102.447a1.51 1.51 0 0 0-.445 1.108c0 .441.148.81.445 1.109.296.298.664.447 1.102.447Zm15.47 0c.44 0 .807-.15 1.103-.447a1.51 1.51 0 0 0 .445-1.109c0-.44-.148-.81-.445-1.108a1.493 1.493 0 0 0-1.102-.447c-.438 0-.806.149-1.102.447a1.51 1.51 0 0 0-.445 1.108c0 .441.148.81.445 1.109.296.298.664.447 1.102.447ZM4.06 15.556v4.666h2.746a4.644 4.644 0 0 1 1.547-1.147 4.49 4.49 0 0 1 1.895-.408c.67 0 1.302.136 1.895.408a4.645 4.645 0 0 1 1.548 1.147h4.293v-4.666H4.059Zm17.018 4.666h1.199a4.643 4.643 0 0 1 1.547-1.147 4.489 4.489 0 0 1 1.895-.408c.67 0 1.302.136 1.895.408a4.644 4.644 0 0 1 1.547 1.147h2.746v-4.666h-10.83v4.666Zm0-7.778H31.75l-2.088-6.222h-8.586v6.222ZM.965 10.89V8.556h1.547V5.444H.965V3.111h15.47v2.333h-1.547v3.112h1.548v2.333H.965Zm3.868-2.333H7.54V5.444H4.833v3.112Zm5.027 0h2.708V5.444H9.86v3.112Z"
    />
  </Svg>
)
export default IncendioSVG
