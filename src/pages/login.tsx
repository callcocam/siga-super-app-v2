import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import GuestLayout from '@/components/Layouts/GuestLayout'
import { useAuth } from '@/hooks/auth'

import { Formik, Field, Form, FormikHelpers } from 'formik';

import Input from '@/components/Form/Input'
import Link from 'next/link'
import Checkbox from '@/components/Form/Checkbox';
import * as yup from 'yup';
import Button from '@/components/Form/Button';
import { useState } from 'react';
import SocialMidias from '@/components/MidiasSocial';
import AuthSessionStatus from '@/components/AuthSessionStatus';
import AuthValidationErrors from '@/components/AuthValidationErrors';
import Image from 'next/image';

interface Values {
    email: string;
    password: string;
    remember: boolean;
}

export default function Login() {
    const { user } = useAuth({ middleware: 'guest' })

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    let schema = yup.object().shape({
        email: yup.string().email("E-Mail deve ser um email válido").required("E-Mail é obrigátorio"),
        password: yup.string().min(8).required("Senha é um campo obrigatório"),
    });


    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    return (
        <>
            <GuestLayout>
                <AuthCard
                    logo={<Image
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone image"
                    />}>
                    {/* Session Status */}
                    <AuthSessionStatus className="mb-4" status={status} />

                    {/* Validation Errors */}
                    <AuthValidationErrors className="mb-4" errors={errors} />
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            remember: false
                        }}
                        validationSchema={schema}
                        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                            login({ setErrors, setStatus, ...values })
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

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <Checkbox
                                            name="remember"
                                            id="remember"
                                        />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="remember"
                                        >Remember me</label
                                        >
                                    </div>
                                    <Link href="/forgot-password">
                                        <a className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                        >Forgot password?</a>
                                    </Link>
                                </div>
                                <Button disabled={isSubmitting} >
                                    Sign in
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
