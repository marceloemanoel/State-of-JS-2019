import React, { memo } from 'react'
import { colors } from '../../constants'

const VerticalBarShadows = ({ bars }) => {
    return bars.map(bar => {
        return (
            <rect
                key={bar.key}
                x={bar.x - 7}
                y={bar.y + 7}
                width={bar.width}
                height={bar.height}
                fill={colors.backgroundDark}
                opacity={0.65}
            />
        )
    })
}

export default memo(VerticalBarShadows)