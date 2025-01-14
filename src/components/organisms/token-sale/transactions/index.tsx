import React from 'react'
import styled from 'styled-components'
import { useTokenSale } from '@context/token-sale-context'
import DataTable from './data-table'
import {Trans} from "@lingui/macro";

export const Wrapper = styled.div`
    padding: 30px;
    width: 100%;
    @media only screen and (max-width : 978px) {
        padding: 25px;
    }
`

const Transactions = () => {
    const { tokenSaleData } = useTokenSale()
    const transactions = tokenSaleData?.transactions

    if (!transactions) {
        return(
            <Wrapper>
                <Trans>No available transactions</Trans>
            </Wrapper>
        )
    }

    return (
      <Wrapper>
        <div>
            {Object.keys(transactions).map((key, idx) => (
                <div className={idx !== transactions.length-1 ? 'mb-4' : ''}>
                    <DataTable
                        { ...transactions[key] }
                        initiallyOpen={transactions.length === 1 || idx === 0}
                    />
                </div>
            ))}
        </div>
      </Wrapper>
    )
}

export default Transactions
