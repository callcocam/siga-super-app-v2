const Button = ({ disabled = false, className = "bg-blue-600", children }: any) => (
    <>
        <button
            type="submit"
            className={`${className} inline-block px-7 py-3  text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full`}
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            disabled={disabled}
        >
            {children}
        </button>
    </>
)

export default Button
