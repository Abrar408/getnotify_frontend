// ** React Imports
import { Fragment, useState, useEffect } from 'react'
// ** Third Party Components
import axios from 'axios'
// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'

import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

// ** Demo Components
// import Tabs from './Tabs'
// import Breadcrumbs from '@components/breadcrumbs'
// import BillingTabContent from './BillingTabContent'
// import AccountTabContent from './AccountTabContent'
// import SecurityTabContent from './SecurityTabContent'
// import ConnectionsTabContent from './ConnectionsTabContent'
// import NotificationsTabContent from './NotificationsTabContent'

import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'

const Preferences = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences 🙌</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>This is your second page.</CardText>
        <CardText>
          Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin.
          Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie
          wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Preferences;
