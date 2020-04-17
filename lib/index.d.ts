import * as React from "react"

declare type Props = {
    onRefresh?: () => any,
    delay?: number,
    style?: object,
    offset?: number, // iOS
    colors?: string, // android
    progressBackgroundColor?: string, // android
}

declare class PTRView extends React.Component<Props> {}

export default PTRView
