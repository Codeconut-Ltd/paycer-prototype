import React from 'react'
import * as Yup from 'yup'
import classnames from 'classnames'
import Form from '@components/atoms/form/form'
import Card from '@components/molecules/card'
import DashNumber from '@components/organisms/dashboard/dash-number'
import InvestRangeSlider from './fields/invest-range-slider'
import InvestInput from './fields/invest-input'
import InvestCardHeader from './invest-card-header'
import BaseInput from './fields/base-Input'
import SubmitButton from './fields/submit-button'
import InvestFee from './invest-fee'
import { InvestFormFields } from '../types'
import useToken from '@hooks/use-token'
import { StrategyType } from '../../../../types/investment'
import { t } from '@lingui/macro'

interface InvestFormProps extends StrategyType {
    setShowInvestForm?: any
    className?: string
}

const InvestForm = (props: InvestFormProps) => {
    const baseToken = useToken(props.input.symbol)
    const investToken = useToken(props.output.symbol)

    const handleSubmit = (values: InvestFormFields) => {
        alert(values.investBalance)
    }

    const initialValues: InvestFormFields = {
        // invest pairs
        baseSymbol: props.input.symbol,
        baseBalance: baseToken.tokenBalance() || 1000,
        investSymbol: props.output.symbol,
        investBalance: investToken.tokenBalance() || 1000,

        // interest
        interestRate: props.interest.interestRate,
        interestSymbol: props.interest.interestSymbol,

        // rewards
        rewardSymbol: props.rewards.rewardSymbol,
        rewardRate: props.rewards.rewardRate,

        // fees
        feeSymbol: props.fees.feeSymbol,
        withdrawFee: props.fees.withdrawFee,
        investFee: props.fees.investFee,

        // form
        investRange: 0,
        submitAction: 'invest'
    }

    const validationSchema = Yup.object().shape({
        baseBalance: Yup.number().min(0).required(),
        investBalance: Yup.number().min(0).required(),
    })

    return (
        <Form
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            enableReinitialize
        >
            {({ values }) => (
              <Card className={classnames(props.className, 'shadow-none mb-0')}>
                  <InvestCardHeader {...props} />
                  <Card.Body>
                      <div className="mb-5">
                          <InvestRangeSlider />
                      </div>
                      <div className="row mb-4">
                          <div className="col-12 col-md-6 mb-4 mb-md-0">
                              <BaseInput />
                          </div>
                          <div className="col-12 col-md-6 mb-4 mb-md-0">
                              <InvestInput />
                          </div>
                      </div>
                      <div className="row mb-5">
                          <div className="col-6">
                              <DashNumber
                                  label={t`Daily rewards`}
                                  value={values.investBalance * values.rewardRate / 100 / 365}
                                  symbol={values.rewardSymbol}
                              />
                          </div>
                          <div className="col-6">
                              <DashNumber
                                label={t`Daily interest`}
                                value={values.investBalance * values.interestRate / 100 / 365}
                                symbol={values.interestSymbol}
                              />
                          </div>
                      </div>
                      <div className="text-center">
                          <SubmitButton />
                          <InvestFee />
                      </div>
                  </Card.Body>
              </Card>
            )}
        </Form>
    )
}

export default InvestForm
