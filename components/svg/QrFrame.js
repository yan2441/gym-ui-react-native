import * as React from "react"
import Svg, { Path } from "react-native-svg"

function QrFrame(props) {
  return (
    <Svg
      width={196}
      height={186}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M164.801 1.71c0-.945.765-1.71 1.71-1.71h13.676c8.498 0 15.386 6.889 15.386 15.386v13.677a1.71 1.71 0 11-3.419 0V15.386c0-6.61-5.358-11.967-11.967-11.967h-13.676a1.71 1.71 0 01-1.71-1.71zM1.71 30.772A1.71 1.71 0 010 29.062V15.386C0 6.889 6.89 0 15.386 0h13.677a1.71 1.71 0 010 3.42H15.386C8.777 3.42 3.42 8.776 3.42 15.385v13.677a1.71 1.71 0 01-1.71 1.71zM193.863 155.228c.945 0 1.71.765 1.71 1.709v13.677c0 8.497-6.889 15.386-15.386 15.386H166.51a1.709 1.709 0 010-3.419h13.677c6.609 0 11.967-5.358 11.967-11.967v-13.677c0-.944.765-1.709 1.709-1.709zM30.772 184.29a1.71 1.71 0 01-1.71 1.71H15.387C6.89 186 0 179.111 0 170.614v-13.677a1.71 1.71 0 013.42 0v13.677c0 6.609 5.357 11.967 11.966 11.967h13.677c.944 0 1.71.765 1.71 1.709z"
        fill="#fff"
      />
    </Svg>
  )
}

export default QrFrame
