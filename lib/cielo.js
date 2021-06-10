const fetch = require('node-fetch');

class Cielo {
  static compra(params) {
    fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
      method: 'post',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        MerchantId: 'f3f5767a-95e1-47e8-aac8-7319d8a2ba22',
        MerchantKey: 'VCTSVAGWBEKIPLTBIWKXIAODQGCXPSQZKZJMSQLE',
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
}

module.exports = Cielo;
