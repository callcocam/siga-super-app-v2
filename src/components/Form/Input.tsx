import { Field } from "formik"
import Error from "./Error"

const Input = ({ disabled = false, className, ...props }: any) => (
    <>
        <Field
            disabled={disabled}
            className={`${className} form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
            {...props}
        />
        <Error errors={props.errors} touched={props.touched} name={props.name} />
    </>
)

export default Input
