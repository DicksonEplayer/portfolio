
import React, { useState } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
        setStatus('error');
        setResponseMessage('Please fill out all fields.');
        return;
    }
    setStatus('sending');
    setResponseMessage('');

    // Simulate API call
    setTimeout(() => {
      // Simulate success
      setStatus('success');
      setResponseMessage("Thank you for your message! I'll get back to you soon.");
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset form status after a while
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="John Doe"
            disabled={status === 'sending'}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="you@example.com"
            disabled={status === 'sending'}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Your message here..."
            disabled={status === 'sending'}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      
      {responseMessage && (
        <div className={`p-4 rounded-md text-sm ${
            status === 'success' ? 'bg-green-100 text-green-800' : ''
        } ${
            status === 'error' ? 'bg-red-100 text-red-800' : ''
        }`}>
            {responseMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
