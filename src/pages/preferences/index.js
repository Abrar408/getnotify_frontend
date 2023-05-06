// ** React Imports
import { Fragment, useState, useEffect } from 'react'
// ** Third Party Components
import axios from 'axios'
// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'

// import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

// ** Demo Components
import Tabs from './Tabs'
import Breadcrumbs from '@components/breadcrumbs'
import BillingTabContent from './BillingTabContent'
import AccountTabContent from './AccountTabContent'
import SecurityTabContent from './SecurityTabContent' 
import PreferencesTabContent from './PreferencesTabContent' 
// import ConnectionsTabContent from './ConnectionsTabContent'
// import NotificationsTabContent from './NotificationsTabContent'

import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'

const Preferences = () => {
    const [activeTab, setActiveTab] = useState('1')
    const [data, setData] = useState(null)

    const toggleTab = tab => {
        // console.log(tab)
        setActiveTab(tab)
    }

    useEffect(() => {
        axios.get('https://stormy-worm-scrubs.cyclic.app/account').then(response => setData(JSON.parse(response.data.data)))
    }, [])

  return (
    <Fragment>
        
      <Breadcrumbs title='Account Settings' data={[{ title: 'Settings' }]} />
      {data !== null ? (
        <Row>
          <Col xs={12}>
            <Tabs className='mb-2' activeTab={activeTab} toggleTab={toggleTab} />

            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <AccountTabContent data={data.general} />
              </TabPane>
              <TabPane tabId='2'>
                <SecurityTabContent /> 
              </TabPane>
              <TabPane tabId='3'>
                <BillingTabContent />
              </TabPane>
              <TabPane tabId='4'>
                <PreferencesTabContent data={data.preferences}/>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  )
}

export default Preferences