import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
 ADD_CONTACT, 
 DELETE_CONTACT,
 SET_CURRENT,
 CLEAR_CURRENT, 
 UPDATE_CURRENT,
 FILTER_CONTACTS,
 CLEAR_FILTER
} from '../types'

const ContactState = props =>{
    const initialState={
        contacts:[
            {
                id:1,
                name: "Jill Johnson",
                email: "lill@gmail.com",
                phone: "777-777-7777",
                type:"personal"
            },
            {
                id:2,
                name: "David Backham",
                email: "davidb@yahoo.com",
                phone: "111-111-1111",
                type:"personal"
            },
            {
                id:3,
                name: "Harry Knuckles",
                email: "harrykn@gmail.com",
                phone: "666-666-6666",
                type:"professional"
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState)

    //Add Contact
    const addContact = contact =>{
        contact.id = uuid();
        dispatch({type: ADD_CONTACT, payload:contact})
    }
    //Delete Contact

    //Set current contact

    //Clear Current contact

    //Update contact

    //Filter contacts

    //Clear filter
return (
    <ContactContext.Provider
        value={{
            contacts:state.contacts,
            addContact
            }}
            >
        {props.children}
    </ContactContext.Provider>
)

}

export default ContactState