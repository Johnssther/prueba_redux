const initialState = {
    contactos : [
        {
            nombre:'Juan Carlos',
            edad:24,
            telefono:123456789
        },
        {
            nombre:'Jose',
            edad:54,
            telefono:258914637
        },
        {
            nombre:'Maria',
            edad:18,
            telefono:852147963
        },
        {
            nombre:'Juan Andres',
            edad:34,
            telefono:987654321
        },
    ]
}

function contactos(state = initialState, action) {
    switch (action.type) {
        case 'SET_CONFIGURACION':
            
        default:
            return state;
    }
}
export default contactos