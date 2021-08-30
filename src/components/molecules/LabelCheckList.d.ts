import React from 'react';
interface Props {
    checkList: readonly boolean[];
    labels: readonly string[];
    onCheck: (index: number) => void;
}
declare const LabelCheckList: React.FC<Props>;
export default LabelCheckList;
