
import React from 'react';
import ContactForm from '../ContactForm';

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);


const ContactPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dark">Get In Touch</h1>
        <p className="mt-4 text-lg text-gray-600">I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12 bg-primary text-white">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="mb-8 opacity-90">Fill up the form and I will get back to you within 24 hours. You can also reach me through the channels below.</p>
            <div className="space-y-6">
                <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 mr-4" />
                    <span>+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center">
                    <MailIcon className="h-6 w-6 mr-4" />
                    <span>contact@ainamani.dev</span>
                </div>
            </div>
            {/* You can add social media links here */}
          </div>
          <div className="p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
