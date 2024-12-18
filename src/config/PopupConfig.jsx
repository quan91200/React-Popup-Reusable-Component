import React, { useState } from "react"
import Popup from "../components/Popup"

const PopupConfig = () => {
    const [position, setPosition] = useState('center')
    const [hideWrap, setHideWrap] = useState('false')
    const [onCloseEnabled, setOnCloseEnabled] = useState(true)

    const [popup, setPopup] = useState(false)

    const handleClose = () => {
        if (onCloseEnabled) {
            setPopup(false)
        }
    }

    const positionOptions = [
        'center',
        'top',
        'left',
        'right',
        'bottom'
    ]

    return (
        <div className="p-4 border rounded-lg shadow-md w-[400px]">
            <h2 className="text-xl font-bold">Popup Tool</h2>

            <div className="space-y-4 p-4 bg-white rounded shadow">
                <div>
                    <label className="block text-sm font-medium mb-2">Position:</label>
                    <select
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        className="p-2 border rounded w-full"
                    >
                        {positionOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Hide Wrap:</label>
                    <input
                        type="checkbox"
                        checked={hideWrap}
                        onChange={(e) => setHideWrap(e.target.checked)}
                        className="h-4 w-4"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Enable Close:</label>
                    <input
                        type="checkbox"
                        checked={onCloseEnabled}
                        onChange={(e) => setOnCloseEnabled(e.target.checked)}
                        className="h-4 w-4"
                    />
                </div>
            </div>

            <div className="p-4 rounded shadow">
                <button
                    onClick={() => setPopup(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Open Popup
                </button>

                {popup && (
                    <Popup
                        open={popup}
                        onClose={handleClose}
                        hideWrap={hideWrap}
                        position={position}
                    >
                        <div className="p-4 bg-white rounded shadow">
                            <h3 className="text-lg font-bold">Popup Content</h3>
                            <p>This is a customizable popup!</p>
                            <button
                                onClick={() => setPopup(false)}
                                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Close
                            </button>
                        </div>
                    </Popup>
                )}
            </div>

        </div>
    )
}

export default PopupConfig