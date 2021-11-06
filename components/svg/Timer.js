import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Timer(props) {
  return (
    <Svg
      width={30}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.742 0h-4.583a1.099 1.099 0 000 2.196h4.583a1.099 1.099 0 000-2.196zM28.974 7.233l-2.992-2.992c-.417-.416-1.098-.416-1.553 0-.416.417-.416 1.099 0 1.553l2.954 2.954c.227.227.492.303.758.303.265 0 .568-.114.757-.303a1.015 1.015 0 00.076-1.515zM14.432 4.582c-7.574 0-13.71 6.135-13.71 13.71C.723 25.864 6.859 32 14.433 32c7.574 0 13.709-6.135 13.709-13.709S22.006 4.582 14.43 4.582zm5.68 15.186h-5.68a1.099 1.099 0 01-1.098-1.098v-7.12a1.099 1.099 0 012.196 0v6.06h4.582c.606 0 1.098.492 1.098 1.098 0 .568-.492 1.06-1.098 1.06z"
        fill="#1787E7"
      />
    </Svg>
  )
}

export default Timer
