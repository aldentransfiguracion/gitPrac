const oldTable = [
    { name: 'Alice', team: 'Red' },
    { name: 'Bob', team: 'Blue' },
    // ... other rows
  ];
  
  const newTable = [
    { name: 'Alice', team: 'Green' },
    { name: 'Charlie', team: 'Yellow' },
    // ... other rows
  ];
  
  const updatedTable = [...oldTable];
  
  for (const newRow of newTable) {
    const existingRow = updatedTable.find((row) => row.name === newRow.name);
    if (existingRow) {
      existingRow.team = newRow.team;
    } else {
      updatedTable.push(newRow);
    }
  }
  
  console.log(updatedTable);
  
  