"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // aici în viitor integrăm Mocha / email / form endpoint
    setSent(true);
  };

  if (sent) {
    return (
      <p className="text-sm text-green-700">
        Thank you for your message. We will get back to you as soon as
        possible.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-sm">
      <div>
        <label className="block mb-1">Name</label>
        <input
          required
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          name="name"
        />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input
          required
          type="email"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          name="email"
        />
      </div>
      <div>
        <label className="block mb-1">Message</label>
        <textarea
          required
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm min-h-[120px]"
          name="message"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center rounded-full border border-gray-900 px-4 py-2 text-xs uppercase tracking-wide hover:bg-gray-900 hover:text-white transition"
      >
        Send message
      </button>
    </form>
  );
}
