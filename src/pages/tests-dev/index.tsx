import { useBlockNumber } from '@usedapp/core'
import Portal from '../../components/atoms/portal'

const PortalBlockNumber = (props) => {
  const blockNumber = useBlockNumber()

  console.log('> PortalBlockNumber')

  return (
    <Portal>
      <div {...props} style={{ position: 'fixed', bottom: '1rem', right: '1rem'}}>
        {blockNumber && (
          <h1>Block Number: {blockNumber}</h1>
        )}
      </div>
    </Portal>
  )
}

export default function TestsDev() {
  console.log('## TestsDev')

  return (
    <>
      <PortalBlockNumber />
    </>
  )
}
