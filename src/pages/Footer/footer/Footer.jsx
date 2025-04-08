import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">

                {/* Services */}
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <h1 className="link link-hover">Branding</h1>
                    <h1 className="link link-hover">Design</h1>
                    <h1 className="link link-hover">Marketing</h1>
                    <h1 className="link link-hover">Advertisement</h1>
                </nav>

                {/* Company */}
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <h1 className="link link-hover">About us</h1>
                    <h1 className="link link-hover">Contact</h1>
                    <h1 className="link link-hover">Jobs</h1>
                    <h1 className="link link-hover">Press kit</h1>
                </nav>

                {/* Legal */}
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <h1 className="link link-hover">Terms of use</h1>
                    <h1 className="link link-hover">Privacy policy</h1>
                    <h1 className="link link-hover">Cookie policy</h1>
                </nav>

                {/* Newsletter */}
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-full max-w-xs mx-auto sm:mx-0">
                        <label className="label-text mb-2 block">Enter your email address</label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item w-full" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>

            </div>
        </footer>
    );
};

export default Footer;
