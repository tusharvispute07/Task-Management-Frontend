import React from 'react';

export default function NavBar() {
    return (
        <header className="flex h-full w-full items-center justify-between px-6">
            <div className="flex items-center">
                <h2 className="text-lg font-semibold text-gray-800 tracking-tight">Overview</h2>
            </div>
            <div className="flex items-center gap-4">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
                <div className="h-8 w-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm select-none">
                    T
                </div>
            </div>
        </header>
    );
}
