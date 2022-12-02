import "./AccountPage.css";

import DailySummary from '../../components/DailySummary/DailySummary'
import Calendar from '../../components/Calendar/Calendar'

export default function AccountPage({user, date}) {
  return (
    <>
      <Calendar />
      <DailySummary user={user} date={date}/>
    </>
  );}
