import "./AccountPage.css";

import DailySummary from '../../components/DailySummary/DailySummary'
import Calendar from '../../components/Calendar/Calendar'

export default function AccountPage({ getTransactionsMonthlyTotal, user, date}) {
  return (
    <>
      <Calendar />
      <DailySummary getTransactionsMonthlyTotal={getTransactionsMonthlyTotal} user={user} date={date}/>
    </>
  );}
