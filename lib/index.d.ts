import * as React from "react"

declare type Props = {
    onRefresh?: () => any,
    delay?: number,
    style?: object
}

declare class PTRView extends React.Component<Props> {}

export default PTRView
