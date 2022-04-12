import classNames from 'classnames';
import Link from 'next/link'

const classBaseColors = "bg-transparent text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none";
const classBase = "page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none";
const classBaseActive = "bg-blue-600 bg-blue-600 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md";
const Pagination = ({ data, links }: any) => {
    const { prev_page_url, next_page_url, current_page, first_page_url, from, last_page, last_page_url } = data;
    const firstPageUrl = () => {
        if (prev_page_url) {
            return (
                <li className="page-item">
                    <Link href={first_page_url}>
                        <a className={classNames(classBase, classBaseColors)}
                            href={first_page_url} aria-disabled="false">Previous</a>
                    </Link>
                </li>
            )
        }
        return null;
    }

    const lastPageUrl = () => {
        if (next_page_url) {
            return (
                <li className="page-item">
                    <Link href={last_page_url}>
                        <a className={classNames(classBase, classBaseColors)}
                            aria-disabled="false">Next</a>
                    </Link>
                </li>
            )
        }
    }
    const pagination = (link: any) => {
        if (link.active) {
            return (
                <li key={link.label} className="page-item active">
                    <a className={classNames(classBase, classBaseActive)}>{link.label} <span className="visually-hidden">(current)</span>
                    </a>
                </li>
            )
        }
        if (link.url) {
            return (
                <li key={link.label} className="page-item">
                    <Link href={link.url}>
                        <a className={classNames(classBase, classBaseColors)}>{link.label}</a>
                    </Link>
                </li>
            )
        }
        return (
            <li key={link.label} className="page-item">
                <a className={classNames(classBase, classBaseColors)}>{link.label}</a>
            </li>
        )
    }

    return (
        <div className="flex justify-center pt-5">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">
                    {firstPageUrl()}
                    {links && links.map((link: any) => pagination(link))}
                    {lastPageUrl()}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination