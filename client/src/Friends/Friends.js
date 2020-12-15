import React from 'react';
import { Link } from 'react-router-dom'

const Friends = () => {
    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4"><Link to="#custom-modal" className="btn btn-custom waves-effect waves-light mb-4" data-animation="fadein" data-plugin="custommodal" data-overlayspeed="200" data-overlaycolor="#36404a"><i className="mdi mdi-plus"></i> Add Member</Link>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="text-center card-box">
                                <div className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-auto"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                                    <div className="">
                                        <h4>Freddie J. Plourde</h4>
                                        <p className="text-muted">@Founder <span>| </span><span><Link to="#" className="text-pink">websitename.com</Link></span></p>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Message Now</button>
                                    <div className="mt-4">
                                        <div className="row">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-lg-4">
                            <div className="text-center card-box">
                                <div className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-auto"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle img-thumbnail" alt="profile-image" />
                                    </div>
                                    <div className="">
                                        <h4>Julie L. Arsenault</h4>
                                        <p className="text-muted">@Programmer <span>| </span><span><Link to="#" className="text-pink">websitename.com</Link></span></p>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Message Now</button>
                                    <div className="mt-4">
                                        <div className="row">
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* <!-- end col --> */}
                            <div className="col-lg-4">
                                <div className="text-center card-box">
                                    <div className="member-card pt-2 pb-2">
                                        <div className="thumb-lg member-thumb mx-auto"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="rounded-circle img-thumbnail" alt="profile-image" />
                                        </div>
                                        <div className="">
                                            <h4>Christopher Gallardo</h4>
                                            <p className="text-muted">@Webdesigner <span>| </span><span><Link to="#" className="text-pink">websitename.com</Link></span></p>
                                        </div>
                                        <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Message Now</button>
                                        <div className="mt-4">
                                            <div className="row">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- end col --> */}
                            </div>
                            {/* <!-- end row --> */}

                            {/* <!-- end col --> */}
                        </div>
                        {/* <!-- end row --> */}

                        {/* <!-- end row --> */}
                    </div>
                    {/* <!-- container --> */}
                </div>



            </div>
        </div>
    );
};

export default Friends;