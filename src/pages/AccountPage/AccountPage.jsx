import "./AccountPage.css";

import DailySummary from '../../components/DailySummary/DailySummary'
import Calendar from '../../components/Calendar/Calendar'

export default function AccountPage({date}) {
  return (
    <>
      <Calendar />
      <DailySummary date={date}/>
    </>
  );}
