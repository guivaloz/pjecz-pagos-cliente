import httpClientFormDataToken from '../../services/httpClientFormDataToken';
import httpClienteToken from '../../services/httpClientToken';


export const SolicitarAcceso = ( params ) => {

    return new Promise( (resolve, eject) => {

        const data = JSON.parse(window.localStorage.getItem('data'));

        if( data ){
            fetch("https://sand-api.ecommercebbva.com/v1/mptdggroasfcmqs8plpy/charges", {
                    body: {
                        "affiliation_bbva" : "781500",
                        "amount" : 100,
                        "description" : "Cargo inicial a mi cuenta",
                        "currency" : "MXN",
                        "order_id" : "oid-00051",
                        "customer": {
                                "name": "Juan",
                                "last_name": "Vazquez Juarez",
                                "email": "juan.vazquez@empresa.com.mx",
                                "phone_number": "555-444-3322"
                        },
                        "redirect_url": "https://portaldepagos.pjecz.gob.mx/resultado/"
                    },
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Token: "sfg999666t673t7t82"
                    },
                    method: "POST"
                    })
                .then(response => response.json())
                .then(json => console.log(json));

        }

    });

}