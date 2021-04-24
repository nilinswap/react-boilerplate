import React from "react"

import { PaymentProps } from "./Payment.types"

import { SampleStyle } from "./Payment.styles"

const Payment: React.FC<PaymentProps> = ({}) => (
  <SampleStyle data-testid="Payment" className="foo-bar">
    Your Payment was successful.
  </SampleStyle>
)

export default Payment
