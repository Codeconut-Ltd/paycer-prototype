import React from 'react'
import { t } from '@lingui/macro'
import Currency from '@components/atoms/form/currency'
import { useFormikContext } from 'formik'
import { InvestFormFields } from '../../types'

export default function InvestInput() {
    const {
        values,
        initialValues,
        setFieldValue,
    } = useFormikContext<InvestFormFields>()

    return (
        <Currency
            name="investBalance"
            label={t`Current Invest`}
            required
            currency={values.investSymbol}
            decimals={4}
            onChange={(e) => {
                // todo: price feed missing
                const exchangePrice = 1
                let baseBalance = 0 as number
                let investBalance = Number(e.target.rawValue.split(' ')[1]) as number
                let investDiff = 0 as number

                // plus
                if (investBalance > initialValues.investBalance) {
                    investDiff = investBalance - initialValues.investBalance
                    baseBalance = initialValues.baseBalance - (investDiff * exchangePrice)
                // minus
                } else {
                    investDiff = initialValues.investBalance - investBalance
                    baseBalance = initialValues.baseBalance + (investDiff * exchangePrice)
                }

                const totalBalance = initialValues.baseBalance + (initialValues.investBalance * exchangePrice)
                const investRange = investBalance * 100 / totalBalance

                baseBalance = baseBalance > totalBalance ? totalBalance : baseBalance
                baseBalance = baseBalance < 0 ? 0 : baseBalance

                investBalance = investBalance < 0 ? 0 : investBalance
                investBalance = investBalance >= totalBalance ? totalBalance : investBalance

                setFieldValue('baseBalance', baseBalance)
                setFieldValue('investBalance', investBalance)
                setFieldValue('investRange', investRange)
                setFieldValue('submitAction', investBalance < initialValues.investBalance ? 'withdraw' : 'invest')
            }}
        />
    )
}
