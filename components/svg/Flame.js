import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Flame(props) {
  return (
    <Svg
      width={24}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.103 31.081C5.1 30.926 0 26.373 0 20.585c0-4.92 2.528-8.228 6.325-12.168 2.48-2.571 3.42-4.973 4.046-6.568.332-.848.575-1.467.912-1.763.97-.85 6.178 4.876 7.607 6.946 3.59 5.197 4.868 7.605 4.918 13.297.051 5.692-4.702 10.908-11.705 10.752zm1.245-11.336c-.805-1.037-1.624-2.09-2.164-3.212a24.288 24.288 0 00-1.595 2.504C8.27 21.429 7.6 23.672 7.6 25.704c0 2.59 1.944 4.696 4.333 4.696 2.39 0 4.334-2.107 4.334-4.696 0-2.201-1.484-4.112-2.919-5.96z"
        fill="#F6CE42"
      />
    </Svg>
  )
}

export default Flame
