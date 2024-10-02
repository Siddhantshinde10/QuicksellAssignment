// src/components/TicketCard.js
import React from 'react';
import './TicketCard.css'; // You can add styles here

const TicketCard = ({ ticket }) => {
    const priorityLevels = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];

    return (
        <div className="ticket-card">
            <h4>{ticket.title}</h4>
            <p><strong>Priority:</strong> {priorityLevels[ticket.priority]}</p>
            <p><strong>Assigned to:</strong> {ticket.user}</p>
            <p><strong>Status:</strong> {ticket.status}</p>
        </div>
    );
};

export default TicketCard;
