import UseView from "../hooks/UseView"

const ComandasHeader = () => {
    const { handleComanda } = UseView();

    return (
        <>
            <div className='flex justify-between items-center py-2 lg:mt-5'>
                <div>
                    <h1 className='font-semibold text-2xl px-2 lg:text-4xl'>Comandas</h1>
                </div>
                <div className="px-4">
                    <button
                        onClick={() => handleComanda()}
                        className="px-4 py-2 bg-red-600 rounded-lg shadow-md text-white text-center font-semibold">
                        Crear Comanda
                    </button>
                </div>
            </div>
        </>
    )
}

export default ComandasHeader