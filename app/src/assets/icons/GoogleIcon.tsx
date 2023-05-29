import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
 export const GoogleIcon = (props: SvgProps) => (
  <Svg
   
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#000" clipPath="url(#a)">
      <Path d="M12.694 12.56c-.472-.344-1.185-.863-1.194-1.063 0-.283.646-.924 1.165-1.438C13.861 8.872 15.5 7.25 15.5 4.997c0-1.88-.972-3.192-2.377-4H15.5a.5.5 0 0 0 0-1H9a7.243 7.243 0 0 0-1.242.114.462.462 0 0 0-.09.025.478.478 0 0 0-.091.01C5.123.638 2.5 2.434 2.5 5.997c0 3.441 3.219 4.68 5.536 4.943-.622 1.116-.38 2.264.048 3.091C5.039 14.25.5 15.566.5 19.497c0 1.15.376 2.103 1.118 2.836 1.557 1.538 4.29 1.67 5.717 1.67.171 0 .322-.003.45-.004L8 23.997c.085 0 8.5-.149 8.5-5.5 0-3.164-2.29-4.833-3.806-5.937Zm.806 6.437c0 1.717-2.376 3-4.5 3-2.076 0-4.5-.786-4.5-3 0-2.249 2.803-3.94 5.363-3.999 1.116.688 3.637 2.544 3.637 4ZM7.802 1.12a.821.821 0 0 0 .053-.017.526.526 0 0 0 .078-.007l.048-.009c1.435-.222 2.975 1.24 3.448 3.292.496 2.15-.303 4.175-1.779 4.516-1.478.345-3.084-1.13-3.58-3.279-.485-2.104.291-4.12 1.732-4.496ZM23 9.997h-2.5v-2.5a.5.5 0 0 0-1 0v2.5H17a.5.5 0 0 0 0 1h2.5v2.5a.5.5 0 0 0 1 0v-2.5H23a.5.5 0 0 0 0-1Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

