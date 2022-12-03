import { useState } from 'react';
import * as transactionsAPI from '../../utilities/api/transactions';

export default function TransactionForm({ user, getTransactions, getTransactionsTotal }) {
    const current = new Date();
    const [formData, setFormData] = useState({
        user: user,
        description: '',
        amount: 0,
        date: current.toLocaleString('en-US', { timeZone: 'America/New_York' }).split(",")[0]
    })

    const handleSubmit = async (e) => {
        // when we submit we basically just grab whatever we have in
        // the state.
        e.preventDefault();
        try {
            const {transaction} = await transactionsAPI.create(formData);
            setFormData({
                user: user,
                description: '',
                amount: 0,
                date: current.toLocaleString('en-US', { timeZone: 'America/New_York' }).split(",")[0]
            });
            getTransactions();
            getTransactionsTotal();
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