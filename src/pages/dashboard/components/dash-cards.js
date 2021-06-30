import DashCard from '@components/organisms/dashboard/dash-card'
import useWallet from '@components/organisms/web3/hooks/useWallet'
import { Money } from '@components/atoms/number'

export default function DashCards () {
  const wallet = useWallet()
  let etherBalance = Number(wallet.etherBalance || 0).toFixed(4)

  return (
    <div className="row">
      <div className="col-12 col-md-4 col-xl">
        <DashCard title="Total Balance">
          <Money value={etherBalance} currency={wallet.etherSymbol} />
        </DashCard>
      </div>
      <div className="col-12 col-md-4 col-xl">
        <DashCard title="Savings">
          <Money value={0} currency="USD" />
        </DashCard>
      </div>
      <div className="col-12 col-md-4 col-xl">
        <DashCard title="Risk">
          Moderat
        </DashCard>
      </div>
    </div>
  )
}
