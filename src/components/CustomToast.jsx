import { toast } from 'react-hot-toast'
import clsx from 'clsx'
import React from 'react'

const toastTypeStyles = {
    success: 'ring-green-500 text-green-800',
    error: 'ring-red-500 text-red-800',
    info: 'ring-blue-500 text-blue-800',
    warning: 'ring-yellow-500 text-yellow-800',
}

export function showCustomToast({ title, message, type = 'info' }) {
    toast.custom((t) => (
        <div
            className={clsx(
                t.visible ? 'animate-enter' : 'animate-leave',
                'max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-opacity-50',
                toastTypeStyles[type] || toastTypeStyles.info
            )}
        >
            <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                    <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">{title}</p>
                        <p className="mt-1 text-sm text-gray-500">{message}</p>
                    </div>
                </div>
            </div>
            <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full hover:cursor-pointer border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Close
                </button>
            </div>
        </div>
    ))
}
