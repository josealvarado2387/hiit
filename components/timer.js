import React from 'react'
import { View, Text } from 'react-native'
import { CountUp, useCountUp } from 'use-count-up'

const { value, reset } = useCountUp({ isCounting: true })

const MyComponent = () => (
    <CountUp isCounting>{({ value, reset }) => value}</CountUp>
export default function timer() {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

