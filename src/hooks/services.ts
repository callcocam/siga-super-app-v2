
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import useSWR from 'swr'

export const useServices = () => {

    const router = useRouter()
    const { data: user, error, mutate } = useSWR('/api/users', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const get:any = async ({ setErrors, ...props }: any) => {
        await csrf()
        setErrors([])
        return  axios.get(props.url, props)
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const post = async ({ setErrors, ...props }: any) => {
        await csrf()
        setErrors([])
        axios
            .post(props.url, props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }
    const put = async ({ setErrors, ...props }: any) => {
        await csrf()
        setErrors([])
        axios
            .put(props.url, props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const remove = async ({ setErrors, ...props }: any) => {
        await csrf()
        setErrors([])
        axios
            .delete(props.url, props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }


    return {
        post,
        get,
        put,
        remove
    }
}