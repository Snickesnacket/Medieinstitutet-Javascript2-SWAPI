import { useEffect, useState } from "react"
import { srchResponsePerson } from '../types'
import { getAll } from '../services/SWAPI'


const useGetData = (initialUrl: string|null = null) => {
	const [data, setData] = useState<srchResponsePerson| null>(null)
    const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState<string|null>(initialUrl)
    const [page, setPage] = useState(0)

        const getData = async (resourceUrl: string, searchPage = 0) => {
            setError(null)
            setLoading(true)

        const res = await getAll<srchResponsePerson>(resourceUrl, searchPage)
        // await new Promise(r => setTimeout(r, 3000))
        setData(res)
        setPage(searchPage)
        }

        useEffect(() => {
            if (!url) {
                return
            }
            getData(url, page)    
        }, [url, page])

        setLoading(false)

        return {
            data,
            setUrl,
            setPage
        }
}

export default useGetData