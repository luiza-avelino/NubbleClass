import React from "react";
import { Text as RNText, TextProps, TextStyle } from "react-native";


export function Text({children, ...props}: TextProps) {
    return (
        <RNText {...props} style={fonts.headingSmall}>{children}</RNText>
    )
}

type TextVariants = "headingLarge" | "headingMedium" | "headingSmall" | "paragraphLarge" | "paragraphMedium" | "paragraphSmall" | "paragraphCaption" | "paragraphCaptionSmall"

const fonts:Record<TextVariants, TextStyle> = {
    headingLarge: {fontSize: 32, lineHeight: 38.4},
    headingMedium: {fontSize: 22, lineHeight: 26.4},
    headingSmall: {fontSize: 18, lineHeight: 23.4},

    paragraphLarge: {fontSize: 18, lineHeight: 25.4},
    paragraphMedium: {fontSize: 16, lineHeight: 22.4},
    paragraphSmall: {fontSize: 14, lineHeight: 19.6},
    
    paragraphCaption: {fontSize: 12, lineHeight: 16.8},
    paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
}