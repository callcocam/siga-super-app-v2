const Error = ( {errors, name, touched}:any ) => errors[name] && touched[name] ? (<div className="text-sm text-red-500 mt-1">{errors[name]}</div>) : null

export default Error