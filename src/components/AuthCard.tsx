export default function AuthCard({ logo, children }: any) {

    return (
        <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="hidden md:block md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        {logo}
                    </div>
                    <div className="w-full md:w-8/12 lg:w-5/12 mx-auto lg:ml-20">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

