import { createContext, useContext, useReducer } from "react";
import storeReducer, { initialStore } from "../store";

import { 
    getContacts,
    createContact,
    updateContact,
    deleteContact
} from "../services/servicesApi";

export const Context = createContext();

export const StoreProvider = ({ children }) => {

    const [store, dispatch] = useReducer(storeReducer, initialStore());

    const actions = {

        getContacts: async () => {
            const data = await getContacts();
            dispatch({ type: "get_contacts", payload: data.contacts });
        },

        addContact: async (contact) => {
            await createContact(contact);
            actions.getContacts();
        },

        updateContact: async (id, contact) => {
            await updateContact(id, contact);
            actions.getContacts();
        },

        deleteContact: async (id) => {
            await deleteContact(id);
            actions.getContacts();
        }

    };

    return (
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    );
};

export default function useGlobalReducer(){
    return useContext(Context);
}