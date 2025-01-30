import React from 'react'
import { Calendarly } from '../calendarly'

type TestType = {
    value: string
}
const Test = ({ value }: TestType) => {
    return (
        <Calendarly/>
    )
}

export default Test