import React from 'react'
import { t } from '@lingui/macro'
import { useFormikContext } from 'formik'
import GradientButton from '@components/atoms/button/gradient-button'
import { SwapProps } from '../types'

export default function SubmitButton() {
    const { values, initialValues, isSubmitting, dirty, isValid, isValidating } = useFormikContext<SwapProps>()
    const isDisabled = isSubmitting || !dirty || !isValid || isValidating || !values.token0Value || !values.token1Value

    return (
        <GradientButton disabled={isDisabled}>
            {t`Swap`}
        </GradientButton>
    )
}
