const axios = require('axios');

class Pagarme {
    static compra(params) {

        return axios.post('https://api.pagar.me/1/transactions', params,
            {
                headers: {
                    'content-type': 'application/json'
                }
            })
            
    }

    static captura(paymentId, amount) {

        return axios.post(`https://api.pagar.me/1/transactions/${paymentId}/capture`, 
        {
            amount: amount,
            api_key: 'ak_test_uCoMzhQ1A0k7oeUD8q0BxGFpE4FRPu'
        },
            {
                headers: {
                    'content-type': 'application/json'
                }
            })

    }

    static consulta(paymentId) {

        return axios.get(`https://api.pagar.me/1/transactions/${paymentId}`,
        {
            params: {
                api_key: 'ak_test_uCoMzhQ1A0k7oeUD8q0BxGFpE4FRPu'
            },
            headers: {
                'content-type': 'application/json'
            }
        }
        );

    }

}

module.exports = Pagarme;