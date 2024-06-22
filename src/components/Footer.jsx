import email from "/src/img/email.svg";
import phone from "/src/img/phone.svg";
import React from 'react';
const Footer = React.forwardRef((props, ref) => {

  return (
    <footer ref={ref} className="bg-[#F3E3EE] flex flex-row space-y-4 test-base w-screen" style={{ marginTop: -50 }}>
      <div className="flex flex-col items-center">
        <div className="bg-[#f88f52] p-10 rounded-tl-3xl rounded-tr-3xl flex flex-row w-screen">
          <div >
            <div className="font-semibold title-text mb-0" style={{ fontSize: '3rem', color: '#d0f9a7' }}>Contact Me</div>
            <div className="my-3" style={{ fontSize: '1.2rem' }}>
              Feel free to reach out to me if you're looking for a Frontend Developer, UX designer, Product Engineer, have a
              query, or simply want to connect.
            </div>
            <div>
              <div className="flex flex-row items-center space-x-3">
                <img src={email} />
                <p style={{ color: '#d0f9a7', fontSize: '1.2rem' }}>soniasunil47@gmail.com | ss3587@cornell.edu</p>
              </div>

              <div className="flex flex-row items-center space-x-3">
                <img src={phone} />
                <p style={{ color: '#d0f9a7', fontSize: '1.2rem' }}>607-327-2965</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f88f52] p-2 w-screen flex justify-center">© Designed & Developed in React by Sonia ✨</div>
      </div>
    </footer>
  );
});

export default Footer;
