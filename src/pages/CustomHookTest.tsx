import React, { useState } from 'react';
import { useMedia } from '../Components/organisms/CustomHook/useMedia';
import data from './data';

const CustomHookTest: React.FC = () => {

  const columnCount = useMedia<number>(
    // Media queries
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    // Column counts (relates to above media queries by array index)
    [5, 4, 3],
    // Default column count
    2
  );
  // Create array of column heights (start at 0)
  let columnHeights = new Array(columnCount).fill(0);
  // Create array of arrays that will hold each column's items
  let columns = new Array(columnCount).fill("").map(() => []) as any;
  (data as any).forEach((item) => {
    // Get index of shortest column
    const shortColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
    // Add item
    columns[shortColumnIndex].push(item);
    // Update height
    columnHeights[shortColumnIndex] += item.height;
  });

  console.log(columnCount)

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex"
      }}
    >
    
      {columns.map((column) => (
        <div className="column">
          {column.map((item) => (
            <div
              className="image-container"
              style={{
                // Size image container to aspect ratio of image
                paddingTop: (item.height / item.width) * 100 + "%",
              }}
            >
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      ))}

    </div>
  );
};

export default CustomHookTest;