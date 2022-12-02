import { useState } from 'react';
import { login } from '../../utilities/services/users'

const defaultState = {
    description: '',
    amount: 0,
    date: null
}

export default function TransactionForm() {
    const current = new Date();
    const today_date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [formData, setFormData] = useState({
        description: '',
        amount: 0,
        date: today_date
    })

    const { description, amount, date } = formData;

    const handleSubmit = async (e) => {
        // when we submit we basically just grab whatever we have in
        // the state.
        e.preventDefault();
        const { description, amount, date } = formData;
        const data = { description, amount, date };
        console.log(formData);
    }

    function handleChange(evt) {
        // Replace with new object and use a computed property
        // to update the correct property
        const newFormData = {
            ...formData, // use the existing formData
            [evt.target.name]: evt.target.value // override whatever key with the current fieldd's value
        };
        setFormData(newFormData);
    }

    return <div className='LoginForm'>
        <div className="form-container">
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="login-email">description</label>
                <input type="text" name="description" id="login-email" value={description} onChange={handleChange} required />

                <label htmlFor="login-password">amount</label>
                <input type="number" name="amount" id="login-password" value={amount} onChange={handleChange} required />

                <button type="submit">Add</button>
            </form>
        </div>
    </div>
}