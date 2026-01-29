import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Get in Touch</h2>
                <p className="text-gray-500 dark:text-gray-400">Let's discuss how I can contribute to your team.</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem] shadow-soft border border-gray-100 dark:border-gray-800">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Name</label>
                            <input
                                type="text"
                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-gray-400 dark:text-white"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-gray-400 dark:text-white"
                                placeholder="name@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                        <textarea
                            rows={4}
                            className="w-full px-6 py-4 rounded-3xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-gray-400 dark:text-white resize-none"
                            placeholder="Tell me about your project or opportunity..."
                        ></textarea>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button
                            type="submit"
                            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 active:scale-95"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            <div className="text-center space-y-2">
                <p className="text-gray-600 dark:text-gray-400">Prefer email?</p>
                <a href="mailto:kriangkai.yot@thaimooc.ac.th" className="text-xl font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
                    kriangkai.yot@thaimooc.ac.th
                </a>
            </div>
        </div>
    );
};

export default Contact;
