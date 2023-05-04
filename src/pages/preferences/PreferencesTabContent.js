// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, CardTitle, Input, Label, Button } from 'reactstrap'

// import CustomCheckboxBasic from 'src/@core/components/custom-checkbox/basic';

const data= [
    {
      meta: '20%',
      isSelected: true,
      value: 'discount',
      title: 'Discount',
      content: 'Wow! Get 20% off on your next purchase!'
    },
    {
      meta: 'Free',
      value: 'updates',
      title: 'Updates',
      content: 'Get Updates regarding related products.'
    }
  ]

// ** Icons Imports
import { Check, X, Link } from 'react-feather'

const PreferencesTabContent = () => {
    return (
        <Row>
            <Col md='12' >
                <Card >
                    <CardHeader className='border-bottom'>
                        <CardTitle tag='h4'>Tracking Mode</CardTitle>
                    </CardHeader>
                    <CardBody className='pt-2'>
                        <p>{`Basic mode (default)`}</p>
                        <div className='d-flex mt-2'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Advanced mode`}</p>
                                    <span>{`advanced mode lets you keep track of ...`}</span>
                                </div>
                                <div className='form-switch'>
                                    <Input type='switch' defaultChecked='true' id={`advanced`} />
                                    <Label className='form-check-label' for={`advanced`}>
                                    <span className='switch-icon-left'>
                                        <Check size={14} />
                                    </span>
                                    <span className='switch-icon-right'>
                                        <X size={14} />
                                    </span>
                                    </Label>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader className='border-bottom'>
                        <CardTitle tag='h4'>Tracking Events</CardTitle>
                    </CardHeader>
                    <CardBody className='pt-2'>
                        {/* <p>{`Basic mode (default)`}</p> */}
                        <div>
                        <div className='d-flex mt-1'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Read duration`}</p>
                                    {/* <span>{item.subtitle}</span> */}
                                </div>
                                <div className='form-check'>
                                    <Input type='checkbox' defaultChecked='true' id='read_duration' />
                                    {/* <Label className='form-check-label' for={`read_duration`}>
                                    <span className='switch-icon-left'>
                                        <Check size={14} />
                                    </span>
                                    <span className='switch-icon-right'>
                                        <X size={14} />
                                    </span>
                                    </Label> */}
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-1'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    {/* <span>|</span> */}
                                    <p className='fw-bolder mb-0'>{`Link clicked`}</p>
                                    {/* <span>{item.subtitle}</span> */}
                                </div>
                                <div className='form-check'>
                                    <Input type='checkbox' defaultChecked='true' id='link_clicked' />
                                    
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-1'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Attachment downloaded`}</p>
                                    {/* <span>{item.subtitle}</span> */}
                                </div>
                                <div className='form-check'>
                                    <Input type='checkbox' defaultChecked='true' id='attachment_downloaded' />
                                </div>
                            </div>
                        </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col md='12'>
                <Card>
                    <CardHeader className='border-bottom'>
                        <CardTitle tag='h4'>Send Emails</CardTitle>
                    </CardHeader>
                    <CardBody className='pt-2'>
                        <div className='d-flex mt-1'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Individually`}</p>
                                    <span>{`Every recipient will see only his own email address. This option is ideal for Marketing Emails`}</span>
                                </div>
                                <div className='form-radio'>
                                    <Input type='radio' name='to' id={`individually`} />
                                    {/* <Label className='form-check-label' for={`advanced`}>
                                    <span className='switch-icon-left'>
                                        <Check size={14} />
                                    </span>
                                    <span className='switch-icon-right'>
                                        <X size={14} />
                                    </span>
                                    </Label> */}
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-2'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Keep "To" and "CC" intact`}</p>
                                    <span>{`Every recipient will be able to see other recipient's email addresses to whom you sent email as "To" or "CC". This option is ideal for personal and business emails. `}</span>
                                </div>
                                <div className='form-radio'>
                                    <Input type='radio'name='to' id={`intact`} />
                                    {/* <Label className='form-check-label' for={`advanced`}>
                                    <span className='switch-icon-left'>
                                        <Check size={14} />
                                    </span>
                                    <span className='switch-icon-right'>
                                        <X size={14} />
                                    </span>
                                    </Label> */}
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader className='border-bottom'>
                        <CardTitle tag='h4'>Send Notifications To</CardTitle>
                    </CardHeader>
                    <CardBody className='pt-2'>
                    <div className='d-flex mt-1'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Originating email address`}</p>
                                    {/* <span>{`Every recipient will be able to see other recipient's email addresses to whom you sent email as "To" or "CC". This option is ideal for personal and business emails. `}</span> */}
                                </div>
                                <div className='form-radio'>
                                    <Input type='radio'name='notification' id={`send`} />
                                    {/* <Label className='form-check-label' for={`advanced`}>
                                    <span className='switch-icon-left'>
                                        <Check size={14} />
                                    </span>
                                    <span className='switch-icon-right'>
                                        <X size={14} />
                                    </span>
                                    </Label> */}
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-2'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Primary email Address`}</p>
                                    {/* <span>{`Every recipient will be able to see other recipient's email addresses to whom you sent email as "To" or "CC". This option is ideal for personal and business emails. `}</span> */}
                                </div>
                                <div className='form-radio'>
                                    <Input type='radio'name='notification' id={`send`} />
                                    {/* <Label className='form-check-label' for={`advanced`}>
                                    <span className='switch-icon-left'>
                                        <Check size={14} />
                                    </span>
                                    <span className='switch-icon-right'>
                                        <X size={14} />
                                    </span>
                                    </Label> */}
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-2'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`SMS to mobile number`}</p>
                                    {/* <span>{`Every recipient will be able to see other recipient's email addresses to whom you sent email as "To" or "CC". This option is ideal for personal and business emails. `}</span> */}
                                </div>
                                <div className='form-radio'>
                                    <Input type='radio'name='notification' id={`send`} />
                                    {/* <Label className='form-check-label' for={`advanced`}>
                                    <span className='switch-icon-left'>
                                        <Check size={14} />
                                    </span>
                                    <span className='switch-icon-right'>
                                        <X size={14} />
                                    </span>
                                    </Label> */}
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
export default PreferencesTabContent