import { PermissionResponse, PermissionStatus } from 'unimodules-permissions-interface';
import PropTypes from 'prop-types';
import React from 'react';
import { ViewProps } from 'react-native';
declare type BarCodeEvent = {
    type: string;
    data: string;
    [key: string]: any;
};
export declare type BarCodeEventCallbackArguments = {
    nativeEvent: BarCodeEvent;
};
export declare type BarCodeScannedCallback = (params: BarCodeEvent) => void;
export { PermissionResponse, PermissionStatus };
export interface BarCodeScannerProps extends ViewProps {
    type?: 'front' | 'back' | number;
    barCodeTypes?: string[];
    onBarCodeScanned: BarCodeScannedCallback;
}
export declare class BarCodeScanner extends React.Component<BarCodeScannerProps> {
    lastEvents: {
        [key: string]: any;
    };
    lastEventsTimes: {
        [key: string]: any;
    };
    static Constants: {
        BarCodeType: any;
        Type: any;
    };
    static ConversionTables: {
        type: any;
    };
    static propTypes: {
        onBarCodeScanned: PropTypes.Requireable<(...args: any[]) => any>;
        barCodeTypes: PropTypes.Requireable<any[]>;
        type: PropTypes.Requireable<React.ReactText>;
        hitSlop?: PropTypes.Validator<import("react-native").Insets | undefined> | undefined;
        onLayout?: PropTypes.Validator<((event: import("react-native").LayoutChangeEvent) => void) | undefined> | undefined;
        pointerEvents?: PropTypes.Validator<"box-none" | "none" | "box-only" | "auto" | undefined> | undefined;
        removeClippedSubviews?: PropTypes.Validator<boolean | undefined> | undefined;
        style?: PropTypes.Validator<import("react-native").StyleProp<import("react-native").ViewStyle>> | undefined;
        testID?: PropTypes.Validator<string | undefined> | undefined;
        nativeID?: PropTypes.Validator<string | undefined> | undefined;
        collapsable?: PropTypes.Validator<boolean | undefined> | undefined;
        needsOffscreenAlphaCompositing?: PropTypes.Validator<boolean | undefined> | undefined;
        renderToHardwareTextureAndroid?: PropTypes.Validator<boolean | undefined> | undefined;
        shouldRasterizeIOS?: PropTypes.Validator<boolean | undefined> | undefined;
        isTVSelectable?: PropTypes.Validator<boolean | undefined> | undefined;
        hasTVPreferredFocus?: PropTypes.Validator<boolean | undefined> | undefined;
        tvParallaxProperties?: PropTypes.Validator<import("react-native").TVParallaxProperties | undefined> | undefined;
        tvParallaxShiftDistanceX?: PropTypes.Validator<number | undefined> | undefined;
        tvParallaxShiftDistanceY?: PropTypes.Validator<number | undefined> | undefined;
        tvParallaxTiltAngle?: PropTypes.Validator<number | undefined> | undefined;
        tvParallaxMagnification?: PropTypes.Validator<number | undefined> | undefined;
        onStartShouldSetResponder?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onMoveShouldSetResponder?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onResponderEnd?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderGrant?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderReject?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderMove?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderRelease?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderStart?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onResponderTerminationRequest?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onResponderTerminate?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onStartShouldSetResponderCapture?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onMoveShouldSetResponderCapture?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | undefined> | undefined;
        onTouchStart?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onTouchMove?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onTouchEnd?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onTouchCancel?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        onTouchEndCapture?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
        accessible?: PropTypes.Validator<boolean | undefined> | undefined;
        accessibilityActions?: PropTypes.Validator<readonly Readonly<{
            name: import("react-native").AccessibilityActionName;
            label?: string | undefined;
        }>[] | undefined> | undefined;
        accessibilityLabel?: PropTypes.Validator<string | undefined> | undefined;
        accessibilityRole?: PropTypes.Validator<"none" | "button" | "link" | "search" | "image" | "keyboardkey" | "text" | "adjustable" | "imagebutton" | "header" | "summary" | "alert" | "checkbox" | "combobox" | "menu" | "menubar" | "menuitem" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "switch" | "tab" | "tablist" | "timer" | "toolbar" | undefined> | undefined;
        accessibilityStates?: PropTypes.Validator<import("react-native").AccessibilityStates[] | undefined> | undefined;
        accessibilityState?: PropTypes.Validator<import("react-native").AccessibilityState | undefined> | undefined;
        accessibilityHint?: PropTypes.Validator<string | undefined> | undefined;
        onAccessibilityAction?: PropTypes.Validator<((event: import("react-native").NativeSyntheticEvent<Readonly<{
            actionName: string;
        }>>) => void) | undefined> | undefined;
        accessibilityComponentType?: PropTypes.Validator<"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked" | undefined> | undefined;
        accessibilityLiveRegion?: PropTypes.Validator<"none" | "polite" | "assertive" | undefined> | undefined;
        importantForAccessibility?: PropTypes.Validator<"auto" | "yes" | "no" | "no-hide-descendants" | undefined> | undefined;
        accessibilityElementsHidden?: PropTypes.Validator<boolean | undefined> | undefined;
        accessibilityTraits?: PropTypes.Validator<"none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "disabled" | "selected" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | import("react-native").AccessibilityTrait[] | undefined> | undefined;
        accessibilityViewIsModal?: PropTypes.Validator<boolean | undefined> | undefined;
        onAccessibilityTap?: PropTypes.Validator<(() => void) | undefined> | undefined;
        onMagicTap?: PropTypes.Validator<(() => void) | undefined> | undefined;
        accessibilityIgnoresInvertColors?: PropTypes.Validator<boolean | undefined> | undefined;
    };
    static defaultProps: {
        type: any;
        barCodeTypes: unknown[];
    };
    static getPermissionsAsync(): Promise<PermissionResponse>;
    static requestPermissionsAsync(): Promise<PermissionResponse>;
    static scanFromURLAsync(url: string, barCodeTypes?: string[]): Promise<{
        type: string;
        data: string;
    }>;
    render(): JSX.Element;
    onObjectDetected: (callback?: BarCodeScannedCallback | undefined) => ({ nativeEvent, }: BarCodeEventCallbackArguments) => void;
    convertNativeProps(props: BarCodeScannerProps): {
        type?: any;
        barCodeTypes?: any;
        onBarCodeScanned: any;
        hitSlop?: any;
        onLayout?: any;
        pointerEvents?: any;
        removeClippedSubviews?: any;
        style?: any;
        testID?: any;
        nativeID?: any;
        collapsable?: any;
        needsOffscreenAlphaCompositing?: any;
        renderToHardwareTextureAndroid?: any;
        shouldRasterizeIOS?: any;
        isTVSelectable?: any;
        hasTVPreferredFocus?: any;
        tvParallaxProperties?: any;
        tvParallaxShiftDistanceX?: any;
        tvParallaxShiftDistanceY?: any;
        tvParallaxTiltAngle?: any;
        tvParallaxMagnification?: any;
        onStartShouldSetResponder?: any;
        onMoveShouldSetResponder?: any;
        onResponderEnd?: any;
        onResponderGrant?: any;
        onResponderReject?: any;
        onResponderMove?: any;
        onResponderRelease?: any;
        onResponderStart?: any;
        onResponderTerminationRequest?: any;
        onResponderTerminate?: any;
        onStartShouldSetResponderCapture?: any;
        onMoveShouldSetResponderCapture?: any;
        onTouchStart?: any;
        onTouchMove?: any;
        onTouchEnd?: any;
        onTouchCancel?: any;
        onTouchEndCapture?: any;
        accessible?: any;
        accessibilityActions?: any;
        accessibilityLabel?: any;
        accessibilityRole?: any;
        accessibilityStates?: any;
        accessibilityState?: any;
        accessibilityHint?: any;
        onAccessibilityAction?: any;
        accessibilityComponentType?: any;
        accessibilityLiveRegion?: any;
        importantForAccessibility?: any;
        accessibilityElementsHidden?: any;
        accessibilityTraits?: any;
        accessibilityViewIsModal?: any;
        onAccessibilityTap?: any;
        onMagicTap?: any;
        accessibilityIgnoresInvertColors?: any;
    };
    convertProp(value: any, key: string): any;
}
export declare const Constants: {
    BarCodeType: any;
    Type: any;
}, getPermissionsAsync: typeof BarCodeScanner.getPermissionsAsync, requestPermissionsAsync: typeof BarCodeScanner.requestPermissionsAsync;
