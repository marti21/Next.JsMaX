import { useEffect, useState } from "react"

const DATE_UNITS = [
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['seconds', 1]
]

const getDateDiffs = timestamp => {
    const now = Date.now()
    const elapse = (timestamp - now) / 1000

    for (const [unit, secondsInUnit] of DATE_UNITS) {
        if(Math.abs(elapse) > secondsInUnit || unit === 'seconds') {
            const value = Math.round(elapse / secondsInUnit)
            return { value, unit }
        }
    }
}

export default function useTimeAgo (timestamp) {
    const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp))

    //const rtf = new Intl.RelativeTimeFormat('es', {style: "short"})
    //console.log(value, unit)
    useEffect(() => {
        const timeout = setInterval(() => {
            const newTimeAgo = getDateDiffs(timestamp)
            setTimeago(newTimeAgo)
        }, 1000)

        return () => clearInterval(timeout)
    }, [timestamp])

    const rtf = new Intl.RelativeTimeFormat("es", { style: 'long' })
    const { value, unit } = timeago

    return rtf.format(value, unit)
}
