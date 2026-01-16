import axios from 'axios'

export function filterUserById(id:number) {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        const getData = res.data

        getData.find()
    }
}
