import React from 'react';
import toast from 'react-hot-toast';

const Dashboard = () => {
    return (
        <div>
            <h2>This is dashboard</h2>
            <h2>This is dashboard</h2>
            <h2>This is dashboard</h2>
            <h2>This is dashboard</h2>
            <button onClick={() => toast.loading('Loading...')}>Click</button>
        </div>
    );
};

export default Dashboard;