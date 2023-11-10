import { usePage } from "@inertiajs/react"
import { Chip, Table, Typography } from "@mui/joy"
import { useEffect } from "react"
import { useState } from "react"

export default function TimeTrackTable(props) {
  const { user } = usePage().props
  const [entries, setEntries] = useState(user['time_tracks'])
  const [dayColumnOrder, setDayColumnOrder] = useState('asc')

  useEffect(() => {
  }, [])

  /**
   * Initially, the time tracks will have a default sorted order
   */
  useEffect(() => {
    setEntries(sortObjByDate(user['time_tracks']))
  }, [])

  /**
   * Helper function to sort an array of timeTrack objects in desc or asc order
   */
  function sortObjByDate(obj, asc=true) {
    return obj.sort( (a, b) => {
      const date1 = new Date(a.day)
      const date2 = new Date(b.day)

      if (asc) {
        if (date1 > date2) return -1
      } else {
        // Is DESC
        if (date1 < date2) return -1
      }
    });
  }

  /**
   * If the day that's being displayed is today, return "today", else return the date in Y-m-d format
   */
  function getDay(checkedDate) {
    const today = new Date()
    const year = today.getFullYear()
    const month = (`0${today.getMonth() + 1}`).slice(-2)
    const day = (`0${today.getDate()}`).slice(-2)
    const formattedToday = `${year}-${month}-${day}`

    return formattedToday ===  checkedDate ? "Today" : checkedDate
  }

  /**
   * Take all entries from the database (user['time_Tracks']) and map them into the table body
   */
  function getEntries() {
    return entries.map(item => {
      return (
        <tr key={item.id}>
          <td>{getDay(item.day)}</td>
          <td>{item.tracked_minutes}</td>
        </tr>
      )
    })
  }

  function changeColumnOrder() {
    if (dayColumnOrder === 'asc') {
      setDayColumnOrder('desc')
      setEntries(sortObjByDate(entries, false))
    } else {
      setDayColumnOrder('asc')
      setEntries(sortObjByDate(entries))
    }
  }

  return (
    <>
      { user['time_tracks'] ? (
        <Table sx={{ marginTop: 3 }}>
          <thead>
            <tr>
              <th>
                Day
                <Chip
                  onClick={changeColumnOrder}
                  color="primary"
                  sx={{ marginLeft: 1 }}
                >{dayColumnOrder}</Chip>
              </th>
              <th>Minutes Logged</th>
            </tr>
          </thead>
          <tbody>
            {getEntries()}
          </tbody>
        </Table>
      ) : (
        <Typography>You have no current time entries.</Typography>
      )}
    </>
  )
}