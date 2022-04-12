import { useIntl } from "react-intl";
export default function Title({name}: any) {
    const intl = useIntl();
    console.log(name)
    return (<title>{intl.formatMessage({ id: 'Laravel' })} - {intl.formatMessage({ id: name })}</title>)
}