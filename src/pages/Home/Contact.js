import React from 'react'
import SectionTitle from '../../components/SectionTitle';

function Contact() {
    const user ={
        name: "Gokulakrishnan M",
        age: 27,
        gender:"male",
        email:"gokulakrishnan.m96@gmail.com",
        country:"INDIA",
        Phone:"7200607680"
    };
  return (
    <div >
      <SectionTitle title="Hello" />

      <div className="flex sm:flex-col items-center justify-center bg-primary">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary text-sm">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary text-sm">{key} : </span>
              <span className="text-tertiary text-sm">{user[key]}</span>,{""}
            </p>
          ))}
          <p className="text-tertiary text-sm">{"}"}</p>
        </div>
        <div className='h-[400px]'>
          <lottie-player
            src="https://lottie.host/f96dd938-c8c2-493b-8322-97ffeaa550be/gMJEKss3Yx.json"
            background="##FFFFFF"
            speed="0.5"
            
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact