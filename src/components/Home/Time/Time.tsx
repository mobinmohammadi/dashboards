import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"; // تقویم شمسی
import persian_fa from "react-date-object/locales/persian_fa"; // زبان فارسی

export default function Time() {
    const [value, setValue] = useState(new Date());

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between">
                <span>تقویم</span>
                <span>19</span>
            </div>
            <div style={{ maxWidth: "409px", margin: "20px auto" }}>
                <Calendar
                    value={value}
                    onChange={setValue}
                    calendar={persian}       // فعال کردن تقویم شمسی
                    locale={persian_fa}      // فعال کردن زبان فارسی
                    calendarPosition="bottom-right" // موقعیت تقویم
                    weekStartDayIndex={6}    // هفته از شنبه شروع شود
                    style={{
                        backgroundColor: "aliceblue",
                        height: "24px",
                        borderRadius: "8px",
                        fontSize: "14px",
                        padding: "3px 10px"
                    }}
                />
            </div>
        </div>
    );
}
