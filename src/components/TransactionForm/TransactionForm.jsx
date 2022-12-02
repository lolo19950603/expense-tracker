import { useState } from 'react';
import * as transactionsAPI from '../../utilities/api/transactions';

export default function TransactionForm({ user }) {
    const current = new Date();
    const today_date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [formData, setFormData] = useState({
        user: user,
        description: '',
        amount: 0,
        date: today_date
    })

    const handleSubmit = async (e) => {
        // when we submit we basically just grab whatever we have in
        // the state.
        e.preventDefault();
        try {
            await transactionsAPI.create(formData);
            setFormData({
                user: user,
                description: '',
                amount: 0,
                date: today_date
            });
        } catch (err) {
            console.error(err);
        }
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
                <input type="text" name="description" id="login-email" value={formData.description} onChange={handleChange} required />

                <label htmlFor="login-password">amount</label>
                <input type="number" name="amount" id="login-password" value={formData.amount} onChange={handleChange} required />

                <button type="submit">Add</button>
            </form>
        </div>
    </div>
}