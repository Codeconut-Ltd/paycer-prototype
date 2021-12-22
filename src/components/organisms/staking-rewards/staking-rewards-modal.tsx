import { Trans } from '@lingui/macro'
import GradientButton from '@components/atoms/button/gradient-button'
import { Col, Row } from 'react-bootstrap'
import Card from '@components/molecules/card'
import Modal from '@components/molecules/modal'
import { t } from '@lingui/macro'
// import ChildrenType from '../../../types/children'

interface StakingRewardsModalProps {
  // children: ChildrenType
  // content: ChildrenType
  show: boolean
  onHide: () => void
}

/**
 * @todo P83 | Implement dynamic content or remove concept code
 */
export default function StakingRewardsModal({ show, onHide }: StakingRewardsModalProps) {
  return (
    <Modal show={show} onHide={onHide}>
      <>
        <Modal.Header closeButton onHide={onHide}>
          <Modal.Title>
            <Trans>Staking Rewards</Trans>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="shadow-none mb-0">
            { /* * /}
            <Card.Header>
              <div className="d-flex align-items-center justify-content-between">
                <h2 className="mb-0">Claim rewards?</h2>
                <span>Infos</span>
              </div>
            </Card.Header>
            { /* */}
            <Card.Body>
              <Row className="mb-5">
                <Col xs={6}>
                  <p className="text-muted mb-1">Last claimed</p>
                  <p>10 PCR</p>
                </Col>
                <Col xs={6}>
                  <p className="text-muted mb-1">Total claimed</p>
                  <p>1,000 PCR</p>
                </Col>
              </Row>
              <GradientButton className="w-100">
                {t`Claim`}
              </GradientButton>
            </Card.Body>
          </Card>
        </Modal.Body>
      </>
    </Modal>
  )
}
