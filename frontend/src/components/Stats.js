import React from 'react';

function Stats(props) {
    const { data, total_orders } = props;

    return (
        <div className="row">
            <div className="col-md-2 col-lg-2 col-sm-2 col-2 col-xs-12">
                <a style={{ textDecoration: 'none' }} className="hrefHover">
                    <section className="panel">
                        <div className="panel-body" style={{ borderRadius: '3px', background: 'orange' }}>
                            <div className="circular-bar circular-bar-xs m-none mt-xs mr-md pull-right"></div>
                            <div className="h4 text-weight-bold mb-none taktak" style={{ fontSize: '20px', color: '#84846c', color: '#fff !important' }}>{data.infulfilled}</div>
                            <p className="text-xs small-title text-muted mb-none" style={{ fontSize: '15px', color: '#fff !important' }}>Unfulfilled <br /></p>
                        </div>
                    </section>
                </a>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-2 col-2 col-xs-12">
                <a style={{ textDecoration: 'none' }} className="hrefHover">
                    <section className="panel">
                        <div className="panel-body" style={{ borderRadius: '3px', background: 'gray' }}>
                            <div className="circular-bar circular-bar-xs m-none mt-xs mr-md pull-right"></div>
                            <div className="h4 text-weight-bold mb-none taktak" style={{ fontSize: '20px', color: '#84846c', color: '#fff !important' }}>{data.fulfilled}</div>
                            <p className="text-xs small-title text-muted mb-none" style={{ fontSize: '15px', color: '#fff !important' }}>Fulfilled <br /></p>
                        </div>
                    </section>
                </a>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-2 col-2 col-xs-12">
                <a style={{ textDecoration: 'none' }} className="hrefHover">
                    <section className="panel">
                        <div className="panel-body" style={{ borderRadius: '3px', background: '#00c17f' }}>
                            <div className="circular-bar circular-bar-xs m-none mt-xs mr-md pull-right"></div>
                            <div className="h4 text-weight-bold mb-none taktak" style={{ fontSize: '20px',  color: '#fff !important' }}>{data.delivered}</div>
                            <p className="text-xs small-title text-muted mb-none" style={{ fontSize: '15px', color:'#fff !important' }}>Delivered <br /></p>
                        </div>
                    </section>
                </a>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-2 col-2 col-xs-12">
                <a style={{ textDecoration: 'none' }} className="hrefHover">
                    <section className="panel">
                        <div className="panel-body" style={{ borderRadius: '3px', background: '#e85862' }}>
                            <div className="circular-bar circular-bar-xs m-none mt-xs mr-md pull-right"></div>
                            <div className="h4 text-weight-bold mb-none taktak" style={{ fontSize: '20px', color: '#ce101c', color: '#fff !important' }}>{data.returned}</div>
                            <p className="text-xs small-title text-muted mb-none" style={{ fontSize: '15px', color: '#fff !important' }}>Returned <br /></p>
                        </div>
                    </section>
                </a>
            </div>
            <div className="col-md-10 col-lg-10 col-sm-10 col-10 col-xs-12">
                <a style={{ textDecoration: 'none' }} className="hrefHover">
                    <section className="panel">
                        <div className="panel-body" style={{ borderRadius: '3px' }}>
                            <p className="text-xs text-muted mb-none" style={{ fontSize: '15px' }}>All Orders <span className="h4 text-weight-bold mb-none" style={{ fontSize: '15px', color: '#727b86' }}>({total_orders})</span> <br /></p>
                        </div>
                    </section>
                </a>
            </div>
        </div>
    );
}

export default Stats;
