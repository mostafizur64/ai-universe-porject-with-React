import React from 'react';

const Modal = (props) => {
    // console.log(props.singleData);
    const { tool_name, description, image_link, integrations, features } = props.singleData;

    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100 ">

                        <div className="card-body">
                            <h2 className="card-title">{description ? description : 'data not found'}</h2>
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className='text-xl font-bold'>Features </h2>
                                    {
                                        Object.values(features || {}).map((d) => <p>{d.feature_name}</p>)
                                    }
                                </div>
                                <div>
                                    <h2 className='text-xl font-bold'>Integrations </h2>
                                    {
                                        integrations &&
                                        integrations.map((int) => <p>{int}</p>)
                                    }
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                        <figure className='w-full'><img className='w-full h-64' src={image_link && image_link[0]} alt="Album" /></figure>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;