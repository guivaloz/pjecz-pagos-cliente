
export const FormatPhoneNumber = ( number ) => {

    let format = '';
    if( number ){
        let numero ;
        numero = number.replace(/[^0-9]/g, '')
        format = '(' + numero.substring(0, 3) + ') ' + numero.substring(3, 6) + '-' + numero.substring(6);
    }

    return format;
}

export const ClearFormatPhoneNumber = ( number ) => {

    let format = '';

    if( number ){

        format = number.replace(/[&#,+()$~%.'":*?<>{}-]/g, '').replace(' ', '');
    }

    return format;
}
