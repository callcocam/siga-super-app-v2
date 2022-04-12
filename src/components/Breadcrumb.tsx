import Link from "next/link";
import { useIntl } from "react-intl";

export default function Breadcrumb({ label }: any) {
    const intl = useIntl();
    return (
        <nav className="rounded-md w-full">
            <ol className="list-reset flex">
                <li>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {intl.formatMessage({ id: 'App' })}
                    </h2>
                </li>
                <li><span className="text-gray-500 mx-2">/</span></li>
                <li>
                    <Link href={`/dashboard`}>
                        <a className="text-blue-600 hover:text-blue-700">{intl.formatMessage({ id: 'Dashboard' })}</a>
                    </Link>
                </li>
                <li><span className="text-gray-500 mx-2">{ label && '/'}</span></li>
                <li className="text-gray-500">
                    {label && intl.formatMessage({ id: label })}
                </li>
            </ol>
        </nav>
    )
}