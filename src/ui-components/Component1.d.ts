/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component1OverridesProps = {
    Component1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    "Getting started"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    Overview?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ImageProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nisl velit. Pellentesque in est odio. Donec mollis arcu ante, vitae iaculis augue pulvinar et."?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Ready to get started?"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nisl velit."?: PrimitiveOverrideProps<TextProps>;
    "AWS Snowbird"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    "Benefits and features"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component1OverridesProps | undefined | null;
}>;
export default function Component1(props: Component1Props): React.ReactElement;
