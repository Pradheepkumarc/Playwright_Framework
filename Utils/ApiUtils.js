class ApiUtils {
  constructor(apiContext, payload) {
    this.apiContext = apiContext;
    this.payload = payload;
  }

  async generatetoken() {
    const response = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      { data: this.payload }
    );
    const jsonvalue = await response.json();
    return jsonvalue.token;
  }

  async createorder(orderPayload) {
    const token = await this.generatetoken();

    const response = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: orderPayload,
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      }
    );

    const jsonvalue = await response.json();
    return { OrderID: jsonvalue.orders[0] };
  }
}

module.exports = { ApiUtils };