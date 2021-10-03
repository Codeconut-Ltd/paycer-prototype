import React from 'react'
import { useFormikContext } from 'formik'
import { SupplyProps } from '../types'
import {t} from "@lingui/macro";
import * as Styles from '../../Styles'
import CurrencyIcon from "@components/atoms/currency-icon";

const DailyRewards = () => {
    const { values } = useFormikContext<SupplyProps>()

    return (
        <>
            <Styles.CurrencyInputLabel>
                {t`Daily rewards`}
            </Styles.CurrencyInputLabel>
            <div className="d-flex align-items-center">
                <CurrencyIcon
                    symbol={values.marketPair.token0.symbol}
                    className="me-2"
                    width={30}
                    height={30}
                />
                <div className="d-flex align-items-center">
                    {values.dailyRewards}
                    &nbsp;
                    {values.marketPair.token0.symbol}
                </div>
            </div>
        </>
    )
}

export default DailyRewards