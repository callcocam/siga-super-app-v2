import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Form/Button'
import Input from '@/components/Form/Input'
import GuestLayout from '@/components/Layouts/GuestLayout'
import { useAuth } from '@/hooks/auth'
import { Form, Formik, FormikHelpers } from 'formik'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import * as yup from 'yup';
interface Values {
    email: string;
    password: string;
    password_confirmation: string;
}

export default function PasswordReset() {
    const { resetPassword } = useAuth({ middleware: 'guest' })
    const router = useRouter();

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [initialValues, setInitialValues] = useState<Values | any>({
        email: router.query.email,
        password: '',
        password_confirmation: '',
    })

    useEffect(() => {
        setInitialValues({
            email: router.query.email?.toString() || '',
            password: '',
            password_confirmation: '',
        })
    }, [router.query.email])

    let schema = yup.object().shape({
        email: yup.string().email("E-Mail deve ser um email válido").required("E-Mail é obrigátorio"),
        password: yup.string().min(8).required("Senha é um campo obrigatório"),
        password_confirmation: yup.string().min(8).oneOf([yup.ref('password'), null], 'As senhas devem corresponder').
            required("Confirmação de senha é um campo obrigatório")
    });

    return (
        <>
            <GuestLayout>
                <AuthCard
                    logo={<Image
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="w-full"
                        alt="Sample image"
                    />}>
                    {/* Session Status */}
                    <AuthSessionStatus className="mb-4" status={status} />

                    {/* Validation Errors */}
                    <AuthValidationErrors className="mb-4" errors={errors} />
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                            resetPassword({
                                setErrors,
                                setStatus, ...values
                            })
                            setSubmitting(false);
                        }}
                    >
                        {({ errors, touched, isSubmitting }) => (
                            <Form>
                                <div className="mb-6">
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Email address"
                                        errors={errors}
                                        touched={touched}
                                    />
                                </div>
                                <div className="mb-6">
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        errors={errors}
                                        touched={touched}
                                    />
                                </div>
                                <div className="mb-6">
                                    <Input
                                        name="password_confirmation"
                                        type="password"
                                        placeholder="Confirm Password"
                                        errors={errors}
                                        touched={touched}
                                    />
                                </div>
                                <Button disabled={isSubmitting}>
                                    Reset Password
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </AuthCard>
            </GuestLayout>
        </>
    )
}
