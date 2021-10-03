import React from 'react'
import Currency from '@components/atoms/form/currency'
import { useFormikContext } from 'formik'
import { SupplyProps } from "@components/organisms/swap/supply-form/types";

export default function Token1Input() {
    const { values, setFieldValue } = useFormikContext<SupplyProps>()

    return (
        <Currency
            name="token1Value"
            required
            max={10}
            currency={values.marketPair.token1.symbol}
            decimals={4}
            onChange={(e) => {
                const token1Value = Number(e.target.rawValue.split(' ')[1])
                const token0Value = token1Value * values.exchangeRate
                setFieldValue('token0Value', token0Value)
                setFieldValue('token1Value', token1Value)
            }}
        />
    )
}

