import React, { ChangeEventHandler, useState } from 'react';
import ko from 'date-fns/locale/ko';
import 'react-day-picker/dist/style.css';

import { format, isAfter, isBefore, isValid, parse } from 'date-fns';
import {
  DateRange,
  DayPicker,
  SelectRangeEventHandler,
} from 'react-day-picker';

export default function Example() {
  const [selected, setSelected] = useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        locale={ko}
      />
      <App />
    </>
  );
}

function App() {
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');

  const handleFromChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined });
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date });
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to });
    }
  };

  const handleToChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());

    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined });
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from });
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date });
    }
  };

  const handleRangeSelect: SelectRangeEventHandler = (
    range: DateRange | undefined
  ) => {
    setSelectedRange(range);
    if (range?.from) {
      setFromValue(format(range.from, 'y-MM-dd'));
    } else {
      setFromValue('');
    }
    if (range?.to) {
      setToValue(format(range.to, 'y-MM-dd'));
    } else {
      setToValue('');
    }
  };

  return (
    <DayPicker
      mode="range"
      selected={selectedRange}
      onSelect={handleRangeSelect}
      footer={
        <form className="ma2">
          <input
            size={10}
            placeholder="From Date"
            value={fromValue}
            onChange={handleFromChange}
            className="input-reset pa2 ma bg-white black ba"
          />
          {' – '}
          <input
            size={10}
            placeholder="To Date"
            value={toValue}
            onChange={handleToChange}
            className="input-reset pa2 bg-white black ba"
          />
        </form>
      }
    />
  );
}
