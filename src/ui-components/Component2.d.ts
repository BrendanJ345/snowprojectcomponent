/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component2OverridesProps = {
    Component2?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 12"?: PrimitiveOverrideProps<ViewProps>;
    "Sign in"?: PrimitiveOverrideProps<FlexProps>;
    Union?: PrimitiveOverrideProps<IconProps>;
    "Welcome back!"?: PrimitiveOverrideProps<TextProps>;
    TextField?: PrimitiveOverrideProps<FlexProps>;
    PasswordField?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4372"?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<FlexProps>;
    Button38491943?: PrimitiveOverrideProps<FlexProps>;
    Button38491944?: PrimitiveOverrideProps<FlexProps>;
    "sign up"?: PrimitiveOverrideProps<FlexProps>;
    "Don't have an account?"?: PrimitiveOverrideProps<TextProps>;
    Button38491947?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Component2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component2OverridesProps | undefined | null;
}>;
export default function Component2(props: Component2Props): React.ReactElement;
