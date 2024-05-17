import email from "/src/img/email.svg";
import phone from "/src/img/phone.svg";
import React from 'react';
const Footer = React.forwardRef((props, ref) => {

  return (
    <footer ref={ref} className="bg-[#ECD0E4] flex flex-row space-y-4 test-base w-screen" style={{ marginTop: -50 }}>
      <div className="bg-[#E7F8A3] p-10 rounded-tl-3xl rounded-tr-3xl px-24 flex flex-row w-screen">
        <div >
          <div className="font-semibold title-text" style={{ fontSize: '2rem' }}>Contact Me</div>
          <div className="my-3">
            Feel free to reach out to me if you're looking for a Frontend Developer, UX designer, Product Engineeer, have a
            query, or simply want to connect.
          </div>
          <div>
            <div className="flex flex-row items-center space-x-3">
              <img src={email} />
              <p style={{ color: '#D17947' }}>soniasunil47@gmail.com | ss3587@cornell.edu</p>
            </div>

            <div className="flex flex-row items-center space-x-3">
              <img src={phone} />
              <p style={{ color: '#D17947' }}>123-456-7890</p>
            </div>
          </div>
        </div>
        {/* <div style={{ width: 100, background: 'black', marginLeft: 72, marginTop:-50, marginBottom:-40 }}></div> */}
        <div style={{ width: 50, background: 'black', marginLeft: 22.5, marginTop:-50, marginBottom:-40 }}></div>
      </div>
    </footer>
  );
});

export default Footer;
