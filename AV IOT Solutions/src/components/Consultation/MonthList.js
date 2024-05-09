// MonthList.js
import React from 'react';

const MonthList = ({ monthNames, handleMonthSelection }) => {
    return (
        <div className="month-list">
            {monthNames.map((month, index) => (
                <div key={index} onClick={() => handleMonthSelection(index)}>{month}</div>
            ))}
        </div>
    );
}

export default MonthList;
