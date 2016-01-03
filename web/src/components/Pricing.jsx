var React = require('react');

var Pricing = React.createClass({
    render: function () {
        return (
            <div className="cd-pricing-container cd-has-margins">
                <ul className="cd-pricing-list">
                    <li>
                        <header className="cd-pricing-header">
                            <h2>Basic</h2>

                            <div className="cd-price">
                                <span className="cd-currency">$</span>
                                <span className="cd-value">30</span>
                                <span className="cd-duration">mo</span>
                            </div>
                        </header>

                        <div className="cd-pricing-body">
                            <ul className="cd-pricing-features">
                                <li><em>256MB</em> Memory</li>
                                <li><em>1</em> User</li>
                                <li><em>1</em> Website</li>
                                <li><em>1</em> Domain</li>
                                <li><em>Unlimited</em> Bandwidth</li>
                                <li><em>24/7</em> Support</li>
                            </ul>
                        </div>

                        <footer className="cd-pricing-footer">
                            <a className="cd-select" href="http://codyhouse.co/?p=429">Select</a>
                        </footer>
                    </li>
                    <li className="cd-popular">
                        <header className="cd-pricing-header">
                            <h2>Popular</h2>

                            <div className="cd-price">
                                <span className="cd-currency">$</span>
                                <span className="cd-value">60</span>
                                <span className="cd-duration">mo</span>
                            </div>
                        </header>

                        <div className="cd-pricing-body">
                            <ul className="cd-pricing-features">
                                <li><em>512MB</em> Memory</li>
                                <li><em>3</em> Users</li>
                                <li><em>5</em> Websites</li>
                                <li><em>7</em> Domains</li>
                                <li><em>Unlimited</em> Bandwidth</li>
                                <li><em>24/7</em> Support</li>
                            </ul>
                        </div>

                        <footer className="cd-pricing-footer">
                            <a className="cd-select" href="http://codyhouse.co/?p=429">Select</a>
                        </footer>
                    </li>
                    <li>
                        <header className="cd-pricing-header">
                            <h2>Premier</h2>

                            <div className="cd-price">
                                <span className="cd-currency">$</span>
                                <span className="cd-value">90</span>
                                <span className="cd-duration">mo</span>
                            </div>
                        </header>

                        <div className="cd-pricing-body">
                            <ul className="cd-pricing-features">
                                <li><em>1024MB</em> Memory</li>
                                <li><em>5</em> Users</li>
                                <li><em>10</em> Websites</li>
                                <li><em>10</em> Domains</li>
                                <li><em>Unlimited</em> Bandwidth</li>
                                <li><em>24/7</em> Support</li>
                            </ul>
                        </div>
                        <footer className="cd-pricing-footer">
                            <a className="cd-select" href="http://codyhouse.co/?p=429">Select</a>
                        </footer>
                    </li>
                </ul>
            </div>
        )
    }
});

module.exports = Pricing;


 



