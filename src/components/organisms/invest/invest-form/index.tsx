import React from 'react'
import * as Yup from 'yup'
import Form from '@components/atoms/form/form'
import Card from '@components/molecules/card'
import InvestCardHeader from './invest-card-header'
import InvestRangeSlider from './fields/invest-range-slider'
import InvestInput from './fields/invest-input'
import BaseInput from './fields/base-Input'
import SubmitButton from './fields/submit-button'
import DailyInterest from './daily-interest'
import DailyRewards from './daily-rewards'
import InvestFee from './invest-fee'
import { InvestProps, InvestFormFields } from '../types'


const InvestForm = (props: InvestProps) => {
    const {
        // invest pairs
        baseSymbol,
        baseBalance,
        investSymbol,
        investBalance,

        // interest
        interestRate,
        earnedInterest,

        // rewards
        rewardSymbol,
        rewardRate,
        earnedReward,

        // fees
        feeSymbol,
        withdrawFee,
        investFee,
    } = props

    const handleSubmit = (values: InvestFormFields) => {
        alert(values.investBalance)
    }

    const initialValues: InvestFormFields = {
        // invest pairs
        baseSymbol,
        baseBalance: 10000,
        investSymbol,
        investBalance: 1000,

        // interest
        interestRate,
        earnedInterest,

        // rewards
        rewardSymbol,
        rewardRate,
        earnedReward,

        // fees
        feeSymbol,
        withdrawFee,
        investFee,

        // form
        investRange: 0,
        submitAction: 'invest'
    }

    const validationSchema = Yup.object().shape({
        baseBalance: Yup.number().moreThan(0).positive().required(),
        investBalance: Yup.number().moreThan(0).positive().required(),
    })

    return (
        <Form
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            enableReinitialize
        >
            <Card className="shadow-none mb-0">
                <InvestCardHeader {...props} />
                <Card.Body>
                    <div className="mb-5">
                        <InvestRangeSlider />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <InvestInput />
                        </div>
                        <div className="col-6">
                            <BaseInput />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-6">
                            <DailyInterest />
                        </div>
                        <div className="col-6">
                            <DailyRewards />
                        </div>
                    </div>
                    <SubmitButton />
                    <InvestFee {...props} />
                </Card.Body>
            </Card>
        </Form>
    )
}

export default InvestForm