// src/components/KanbanBoard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TicketCard from './TicketCard';
import GroupingSelect from './GroupingSelect';
import './KanbanBoard.css'; 

const KanbanBoard = () => {
    const [tickets, setTickets] = useState([]);
    const [groupBy, setGroupBy] = useState('status'); // default group by status
    const [sortBy, setSortBy] = useState(null); // sorting by title or priority

    useEffect(() => {
        axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
            .then((response) => {
                setTickets(response.data.tickets);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleGroupByChange = (e) => {
        setGroupBy(e.target.value);
    };

    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
    };

    const sortTickets = (tickets) => {
        if (sortBy === 'priority') {
            return tickets.sort((a, b) => b.priority - a.priority);
        }
        if (sortBy === 'title') {
            return tickets.sort((a, b) => a.title.localeCompare(b.title));
        }
        return tickets;
    };

    const groupTickets = () => {
        let grouped = {};
        tickets.forEach(ticket => {
            const key = ticket[groupBy];
            if (!grouped[key]) grouped[key] = [];
            grouped[key].push(ticket);
        });
        return grouped;
    };

    const groupedTickets = groupTickets();

    return (
        <div>
            <GroupingSelect onGroupByChange={handleGroupByChange} onSortByChange={handleSortByChange} />
            <div className="kanban-board">
                {Object.keys(groupedTickets).map(group => (
                    <div key={group} className="group-column">
                        <h3>{group}</h3>
                        {sortTickets(groupedTickets[group]).map(ticket => (
                            <TicketCard key={ticket.id} ticket={ticket} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanbanBoard;
