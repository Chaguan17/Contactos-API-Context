const BASE_URL = "https://playground.4geeks.com/contact/agendas/Jesus";


// GET CONTACTS
export const getContacts = async () => {
    try {

        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error("Error fetching contacts");
        }

        const data = await response.json();
        return data;

    } catch (error) {

        console.error("GET CONTACTS ERROR:", error);

    }
};



// CREATE CONTACT
export const createContact = async (contact) => {
    try {

        const response = await fetch(BASE_URL + "/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        });

        if (!response.ok) {
            throw new Error("Error creating contact");
        }

        const data = await response.json();
        return data;

    } catch (error) {

        console.error("CREATE CONTACT ERROR:", error);

    }
};



// UPDATE CONTACT
export const updateContact = async (id, contact) => {
    try {

        const response = await fetch(BASE_URL + "/contacts/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        });

        if (!response.ok) {
            throw new Error("Error updating contact");
        }

        const data = await response.json();
        return data;

    } catch (error) {

        console.error("UPDATE CONTACT ERROR:", error);

    }
};



// DELETE CONTACT
export const deleteContact = async (id) => {
    try {

        const response = await fetch(BASE_URL + "/contacts/" + id, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Error deleting contact");
        }

        return true;

    } catch (error) {

        console.error("DELETE CONTACT ERROR:", error);

    }
};