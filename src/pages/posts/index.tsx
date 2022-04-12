import Breadcrumb from "@/components/Breadcrumb";
import AppLayout from "@/components/Layouts/AppLayout";
import Pagination from "@/components/Pagination";
import { useServices } from "@/hooks/services";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useIntl } from "react-intl";

export default function Posts() {
    const intl = useIntl();
    const { get } = useServices();

    const [rows, setRows] = useState<any>([])
    const [data, setData] = useState<any>([])
    const [errors, setErrors] = useState<any>([])
    const [links, setLinks] = useState<any>([])



    const fetchMyAPI = useCallback(async () => {
        const url = 'api/posts';
        let { data } = await get({ setErrors, url })
        setData(data)
        setRows(data.data)
        if (data.links) {
            setLinks(data.links.splice(1, data.links.length - 2))
        }
    }, [get])

    useEffect(() => {
        fetchMyAPI()
    }, [fetchMyAPI])

    return (
        <AppLayout header={<Breadcrumb label="Posts" />}>
            <Head>
                <title> {intl.formatMessage({ id: 'App' })} - {intl.formatMessage({ id: 'Dashboard' })} -  {intl.formatMessage({ id: 'Posts' })}</title>
            </Head>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {rows && rows.map((model: any) => {
                        return (
                            <div className="flex justify-center" key={model.id}>
                                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <Image className={'rounded-t-lg'} src={model.cover_url} alt="" />
                                    </a>
                                    <div className="p-6">
                                        <h5 className="text-gray-900 text-xl font-medium mb-2">{model.name}</h5>
                                        <p className="text-gray-700 text-base mb-4">
                                            <h2>{model.category.name}</h2>
                                            {model.content}
                                        </p>
                                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <Pagination data={data} links={links} />
            </div>
        </AppLayout>
    )
}