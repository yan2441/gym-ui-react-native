import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Profile(props) {
  return (
    <Svg
      width={17}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={8.5} cy={4.5} r={3} stroke={props.color} strokeWidth={2} />
      <Path
        d="M1.5 17.5v-1a5 5 0 015-5h4a5 5 0 015 5v1h-14z"
        stroke={props.color}
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Profile
