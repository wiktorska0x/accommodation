import axios from 'axios';
const  baseURL = "http://localhost:8000/users";

export async function apiAddUser({imie, nazwisko, mail, password}) {
    const request = await fetch(baseURL, {
        method: "post",
        headers: {
            "Users-List" : "application/json;charset=utf-8"
        },
        body: JSON.stringify({imie, nazwisko, mail, password})
    })

    if (request.ok) {
        return request.json();
    } else {
        throw Error(request.status);
    }
}