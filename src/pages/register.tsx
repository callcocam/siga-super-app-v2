import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Form/Button'
import Checkbox from '@/components/Form/Checkbox'
import Input from '@/components/Form/Input'
import GuestLayout from '@/components/Layouts/GuestLayout'
import SocialMidias from '@/components/MidiasSocial'
import { useAuth } from '@/hooks/auth'
import { Form, Formik, FormikHelpers } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import * as yup from 'yup';

interface Values {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    terms: boolean;
}

export default function Register() {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    let schema = yup.object().shape({
        name: yup.string().required("Nome é obrigátorio"),
        email: yup.string().email("E-Mail deve ser um email válido").required("E-Mail é obrigátorio"),
        password: yup.string().min(8).required("Senha é um campo obrigatório"),
        password_confirmation: yup.string().min(8).oneOf([yup.ref('password'), null], 'As senhas devem corresponder').
            required("Confirmação de senha é um campo obrigatório"),
        terms: yup.boolean().required("Nome é obrigátorio"),
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
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            password_confirmation: '',
                            terms: false
                        }}
                        validationSchema={schema}
                        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                            register({ setErrors, ...values })
                            setSubmitting(false);
                        }}
                    >
                        {({ errors, touched, isSubmitting }) => (
                            <Form>
                                <div className="mb-6">
                                    <Input
                                        name="name"
                                        type="text"
                                        placeholder="Your Name"
                                        errors={errors}
                                        touched={touched}
                                    />
                                </div>
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
                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <Checkbox
                                            name="terms"
                                            id="terms"
                                        />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="terms"
                                        >Terms of Service</label
                                        >
                                    </div>
                                    <Link href="/login">
                                        <a className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                        > Already registered?</a>
                                    </Link>
                                </div>
                                <Button disabled={isSubmitting}>
                                    Register
                                </Button>
                                {/* Login com midia social */}
                                <SocialMidias />
                            </Form>
                        )}
                    </Formik>
                </AuthCard>
            </GuestLayout>
        </>
    )
}
