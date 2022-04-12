import AuthCard from "@/components/AuthCard";
import AuthSessionStatus from "@/components/AuthSessionStatus";
import AuthValidationErrors from "@/components/AuthValidationErrors";
import Button from "@/components/Form/Button";
import Input from "@/components/Form/Input";
import GuestLayout from "@/components/Layouts/GuestLayout";
import { useAuth } from "@/hooks/auth";
import { Form, Formik, FormikHelpers } from "formik";
import Image from "next/image";
import { useState } from "react";
import * as yup from 'yup';

interface Values {
   email: string;
}

export default function ForgotPassword() {

   const { forgotPassword } = useAuth({ middleware: 'guest' })
   const [errors, setErrors] = useState([])
   const [status, setStatus] = useState(null)

   let schema = yup.object().shape({
      email: yup.string().email("E-Mail deve ser um email válido").required("E-Mail é obrigátorio"),
   });
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

               <div className="m-4 text-center">
                  Esqueceu sua senha? Sem problemas. Basta nos informar seu endereço de e-mail e nós lhe enviaremos um link de redefinição de senha que permitirá que você escolha uma nova.
               </div>
               <Formik
                  initialValues={{
                     email: ''
                  }}
                  validationSchema={schema}
                  onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                     forgotPassword({ setErrors, setStatus, ...values })
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
                        <Button disabled={isSubmitting} >
                           Email Password Reset Link
                        </Button>
                     </Form>
                  )}
               </Formik>
            </AuthCard>
         </GuestLayout>
      </>
   )
}