import { checkToken } from "../../utilities/services/users";

import "./AccountPage.css";

import DailySummary from '../../components/DailySummary/DailySummary'
import Calendar from '../../components/Calendar/Calendar'

export default function AccountPage(props) {
  return (
    <>
      <Calendar />
      <DailySummary />
    </>
  );}
