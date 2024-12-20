import React from 'react'

const Jobcounter = () => {
    return (
        <div>
            <div className="bg-counter mb-4">
                <div className="container">
                    <div>
                        <div className="justify-content-center pt-5 pb-5 row">
                            <div className="col-count col-lg-3 col-md-12">
                                <div className="pt-4 pb-4">
                                    <h5 className="text-light text-center mt-3">
                                        9.5k
                                    </h5>
                                    <p>Jobs</p>
                                </div>
                            </div>
                            <div className="col-count col-lg-3 col-md-12">
                                <div className="pt-4 pb-4">
                                    <h5 className="text-light text-center mt-3">
                                        9.5k
                                    </h5>
                                    <p>Happy Students</p>
                                </div>
                            </div>
                            <div className="col-count col-lg-3 col-md-12">
                                <div className="pt-4 pb-4">
                                    <h5 className="text-light text-center mt-3">
                                        9.5k
                                    </h5>
                                    <p>Jobs</p>
                                </div>
                            </div>
                            <div className="col-count col-lg-3 col-md-12" style={{borderRight:'none'}}>
                                <div className="pt-4 pb-4">
                                    <h5 className="text-light text-center mt-3">
                                        9.5k
                                    </h5>
                                    <p>Companies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Jobcounter
