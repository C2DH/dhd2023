import ButtonDhd from '../ui/ButtonDhd.js'
const { Container, Row, Col } = require('react-bootstrap')

const ViewConfereceHomePage = ({ availableWidth, availableHeight }) => {
  return (
    <section className="view-conference flex-center">
      <div className="iview-conference-content-wrapper">
        <Container>
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7 offset-lg-5 offset-md-3 offset-sm-0 text-end">
              <div className="d-flex flex-column align-items-end">
                <h2>
                  A unique experience of inspiration, meeting and networking for the ANY WORD
                  industry
                </h2>
                <ButtonDhd
                  className={'mt-4'}
                  variant={'primary'}
                  title={'VIEW CONFERENCE'}
                  icon={true}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default ViewConfereceHomePage
