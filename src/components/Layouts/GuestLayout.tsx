import Head from 'next/head'

export default function GuestLayout ({ children, title }:any) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
        </div>
    )
}