import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Home(props) {
  return (
    <Svg
      width={22}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.5 19.5v-8.708L11 2.208l-9.5 8.584V19.5"
        stroke={props.color}
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Home
