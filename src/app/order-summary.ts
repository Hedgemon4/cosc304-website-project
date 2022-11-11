export interface OrderSummary {
  orderId: number
  orderDate: Date
  totalAmount: number
  shipToAddress: string
  shipToCity: string
  shipToState: string
  shipToPostalCode: string
  shipToCountry: string
  customerId: number
}
