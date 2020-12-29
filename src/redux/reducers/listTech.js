const initialState = {
    technicians: []
}

export default function (state = initialState, action) {
    switch (action.type){
        case 'LIST_TECH':
            return {
                ...state,
                technicians: action.payload
            }
    }
}