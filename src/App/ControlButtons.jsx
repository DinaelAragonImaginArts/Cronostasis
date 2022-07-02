//Play
import { UilPlay } from '@iconscout/react-unicons'
//Pause 
import { UilPause } from '@iconscout/react-unicons'
//Save END
import { UilSave } from '@iconscout/react-unicons'


const ControlButtons = (props) => {
    return (
        <>
            <div className='flex gap-2 items-center'>
                {!props.active ?
                    <div className='flex gap-2 items-center flex-1'>
                        <button
                            onClick={() => {
                                props.handleStart(props.tarea);
                            }}
                            className='bg-green-500 p-2 rounded-lg text-white'>
                            <UilPlay />
                        </button>
                    </div>
                    :
                    <div>
                        {props.active && !props.pausa ?
                            <div className='flex gap-2 items-center '>
                                <button
                                    onClick={() => {
                                        props.handlePause();
                                    }}
                                    className='bg-red-500 p-2 rounded-lg text-white'>
                                    <UilPause />
                                </button>
                                <button
                                    onClick={() => {
                                        props.handleTerminar();
                                    }}
                                    className='bg-blue-500 p-2 rounded-lg text-white'>
                                    <UilSave />
                                </button>
                            </div>


                            :
                            <div>

                            </div>

                        }
                    </div>
                }
            </div>
        </>
    )
}

export default ControlButtons;