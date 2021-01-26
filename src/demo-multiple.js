import React from 'react';
import Likert from './likert.js';

const responses = [
  { value: 1, text: 'Poor' },
  { value: 2, text: '' },
  { value: 3, text: '' },
  { value: 4, text: '' },
  { value: 5, text: '' },
  { value: 6, text: '' },
  { value: 7, text: 'Excellent' },
];

export default function DemoMultiple() {
  // const [chosen, setChosen] = useState({});

  return (
    <>
      <Likert
        question='How was your service today?'
        responses={responses}
      />
      <Likert
        question='How quickly did your food arrive?'
        responses={responses}
      />
      <Likert
        question='How did your meal taste?'
        responses={responses}
      />
      <Likert
        question='How likely are you to return again?'
        responses={responses}
      />
    </>
  );
}
