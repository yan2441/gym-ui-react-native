import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function Wallet(props) {
  return (
    <Svg
      width={23}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={1.5}
        y={1.5}
        width={20}
        height={14}
        rx={4}
        stroke={props.color}
        strokeWidth={2}
      />
      <Path
        d="M6.5 6.5h10"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="square"
      />
    </Svg>
  )
}

export default Wallet
