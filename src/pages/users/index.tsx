import Breadcrumb from "@/components/Breadcrumb";
import AppLayout from "@/components/Layouts/AppLayout";
import { useServices } from "@/hooks/services";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { useIntl } from "react-intl";

export default function Users() {
    const intl = useIntl();
    const { get } = useServices();
    const [users, setUsers] = useState<any>([])
    const [errors, setErrors] = useState<any>([])


    const fetchMyAPI = useCallback(async () => {
        const url = 'api/users';
        let { data } = await get({ setErrors, url })
        setUsers(data)
    }, [get])
    useEffect(() => {
        fetchMyAPI()
    }, [fetchMyAPI])
    return (
        <AppLayout header={<Breadcrumb label="Users" />}>
            <Head>
                <title> {intl.formatMessage({ id: 'App' })} - {intl.formatMessage({ id: 'Dashboard' })} -  {intl.formatMessage({ id: 'Users' })}</title>
            </Head>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="overflow-hidden">
                                            <table className="min-w-full text-center">
                                                <thead className="border-b bg-gray-800">
                                                    <tr>
                                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                            #
                                                        </th>
                                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                            First
                                                        </th>
                                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                            Last
                                                        </th>
                                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                            Handle
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.map((model: any) => {
                                                        return (
                                                            <tr className="bg-white border-b" key={model.id}>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{model.id}</td>
                                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                    {model.name}
                                                                </td>
                                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                    {model.email}
                                                                </td>
                                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                    @mdo
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}