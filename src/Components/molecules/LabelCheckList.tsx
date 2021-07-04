import React from 'react';
import Label from '../atoms/Label/Label';
import CheckBox from '../atoms/Input/CheckBox';

interface Props {
  checkList: readonly boolean[];
  labels: readonly string[];
  onCheck: (index: number) => void;
}

const LabelCheckList: React.FC<Props> = ({
  checkList,
  labels,
  onCheck
}) => {
  return (
    <ul>
      {labels.map((label, idx) => (
        <li key={idx}>
          <Label
            htmlFor="checks"
          >
            {label}
          </Label>
          <CheckBox
            id="checks"
            defaultChecked={checkList[idx]}
            onClick={() => onCheck(idx)}
          />
        </li>
      ))}
    </ul>
  )
}

export default LabelCheckList;