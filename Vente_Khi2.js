function chiSquared(observedValues) {
    const row1Total = observedValues[0].reduce((acc, val) => acc + val, 0);
    const row2Total = observedValues[1].reduce((acc, val) => acc + val, 0);
    const col1Total = observedValues.reduce((acc, row) => acc + row[0], 0);
    const col2Total = observedValues.reduce((acc, row) => acc + row[1], 0);
    const col3Total = observedValues.reduce((acc, row) => acc + row[2], 0);
    const col4Total = observedValues.reduce((acc, row) => acc + row[3], 0);
    const total = row1Total + row2Total;

    const expectedValues = [
        [
            (row1Total * col1Total) / total,
            (row1Total * col2Total) / total,
            (row1Total * col3Total) / total,
            (row1Total * col4Total) / total,
        ],
        [
            (row2Total * col1Total) / total,
            (row2Total * col2Total) / total,
            (row2Total * col3Total) / total,
            (row2Total * col4Total) / total,
        ],
    ];

    const chiSquared = observedValues
        .map((row, rowIndex) =>
            row.map((observed, colIndex) => ((observed - expectedValues[rowIndex][colIndex]) ** 2) / observed)
        )
        .reduce((acc, row) => acc.concat(row), [])
        .reduce((acc, val) => acc + val, 0);

    return chiSquared;
}

// Exemple d'utilisation :
const observedValues = [
    [15, 12, 24, 12],
    [22, 28, 19, 6],
];
const chiSquaredValue = chiSquared(observedValues);
console.log(`Valeur du test de khi-deux : ${chiSquaredValue}`);
