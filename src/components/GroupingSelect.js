// src/components/GroupingSelect.js
import React from 'react';
import './GroupingSelect.css'; 

const GroupingSelect = ({ onGroupByChange, onSortByChange }) => {
    return (
        <div className="controls">
            <label>
                Group By:
                <select onChange={onGroupByChange}>
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                </select>
            </label>
            <label>
                Sort By:
                <select onChange={onSortByChange}>
                    <option value="">None</option>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </label>
        </div>
    );
};

export default GroupingSelect;
