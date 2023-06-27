/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SSHkeyOverridesProps = {
    SSHkey?: PrimitiveOverrideProps<ViewProps>;
    "Component 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    Button38512036?: PrimitiveOverrideProps<FlexProps>;
    Button38512044?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    "Step 3"?: PrimitiveOverrideProps<TextProps>;
    "Job summary"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    "Step 1"?: PrimitiveOverrideProps<TextProps>;
    "SSH Key38512032"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
    "Step 2"?: PrimitiveOverrideProps<TextProps>;
    "Device info"?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<ViewProps>;
    "Snowbird Register Snow device"?: PrimitiveOverrideProps<TextProps>;
    "SSH Key38502009"?: PrimitiveOverrideProps<TextProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 11"?: PrimitiveOverrideProps<ViewProps>;
    "SSH Key38502013"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ImageProps>;
    TextField?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type SSHkeyProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SSHkeyOverridesProps | undefined | null;
}>;
export default function SSHkey(props: SSHkeyProps): React.ReactElement;
