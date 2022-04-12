import { Form, Formik, FormikHelpers, FormikValues } from "formik"

const TallForm = (initialValues:FormikValues, schema:any ,childern: any) => (
    <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values: any, { setSubmitting }: FormikHelpers<any>) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 500);
        }}
    >
        {({ errors, touched }) => (
            <Form>
                {childern}
            </Form>
        )}
    </Formik>
)

export default TallForm
