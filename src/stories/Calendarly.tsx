import React from 'react'
import { Calendarly } from '../calendarly'

type TestType = {
    isRange: boolean;
    type: "single" | "multiple";
    quickSelection: boolean;
}
const Calendar = ({  isRange, type, quickSelection }: TestType) => {
    return (
        <Calendarly 
            type={type}
            isRange={isRange}
            quickSelection={quickSelection}
            onSelect={(e) => {
                console.log("🚀 ~ Calendar ~ e:", e)
            }}
        />
    )
}

export default Calendar