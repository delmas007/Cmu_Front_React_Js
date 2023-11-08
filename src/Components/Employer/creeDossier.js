

const CreeDossier = () => {
    return (
        <>
            <section className="max-w-4xl p-6 mx-auto bg-[#a5e194] rounded-md shadow-md dark:bg-[#a5e194] my-20 mb-[320px]">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Dossier Patient</h1>
                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" form="username">Ville</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" form="emailAddress">Age</label>
                            <input id="emailAddress" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Homme</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-[#a5e194]" checked />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Femme</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-[#a5e194]" checked />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Femme enceinte</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-[#a5e194]" checked />
                            </label>
                        </div>

                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>


        </>
    )
}
export default CreeDossier
