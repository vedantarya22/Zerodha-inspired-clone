import React from 'react';
function Hero() {
    return ( 
        <div className="container text-center mt-5">
            <div className="row">
                <h2>Charges</h2>
                <h3 className='text-muted mt-3 fs-5'>List of all charges and taxes</h3>
            </div>

            <div className="row p-5 mt-5">
                <div className="col">
                    <img src="public\media\pricingEquity.svg" alt="" className='p-5' style={{width:"90%"}}/>
                    <h2>Free equity delivery</h2>
                    <p className='text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col">
                    <img src="\public\media\intradayTrades.svg" alt=""  className='p-5' style={{width:"90%"}}/>
                    <h2>Intraday and F&O trades</h2>
                    <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col">
                    <img src="public\media\pricingEquity.svg" alt=""  className='p-5'style={{width:"90%"}}/>
                    <h2>Free direct MF</h2>
                    <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
                
            </div>
        </div>

     );
}

export default Hero;