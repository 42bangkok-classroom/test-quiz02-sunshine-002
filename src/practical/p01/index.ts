import axios from 'axios'

interface Data {
    id: number
    name: string
    phone: number
    address: addressData |null
}

interface addressData {
    street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: number
            lng: number
}}

interface returnData {
    id: number
    name: string
    phone: number
    address: addressData | null
}

export async function getPostalAddress(): Promise <returnData[]> {
    try {
    const res = await axios.get<Data[]>("https://jsonplaceholder.typicode.com/users")
    const getData = res.data
    if(!getData || getData.length === 0) {
        return []
    }
    
    return getData.map(s => ({
        id: s.id,
        name: s.name,
        phone: s.phone,
        address: s.address ? {
        street: s.address.street,
        suite: s.address.suite,
        city: s.address.city,
        zipcode: s.address.zipcode,
        geo: {
            lat: s.address.geo.lat,
            lng: s.address.geo.lng 
        }
        }: null
    }))

    } catch (error) {
        return []
    }
}


