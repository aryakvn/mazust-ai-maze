const board = [
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
    [5, 0],
    [6, 0],
    [7, 0],
    [7, 1],
    [7, 2],
    [7, 3],
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 7],
    [7, 8],
    [6, 8],
    [5, 8],
    [3, 8],
    [2, 8],
    [4, 8],
    [2, 6],
    [3, 6],
    [4, 6],
    [5, 6],
    [5, 5],
    [0, 10],
    [1, 10],
    [2, 10],
    [4, 10],
    [5, 10],
    [6, 10],
    [7, 10],
    [8, 10],
    [9, 10],
    [9, 9],
    [9, 8],
    [9, 7],
    [9, 6],
    [9, 5],
    [9, 4],
    [9, 2],
    [9, 1],
    [9, 0],
    [10, 2],
    [11, 2],
    [12, 2],
    [13, 2],
    [13, 1],
    [10, 0],
    [11, 0],
    [10, 4],
    [11, 4],
    [11, 5],
    [11, 6],
    [11, 7],
    [10, 10],
    [11, 10],
    [12, 10],
    [13, 10],
    [13, 9],
    [13, 8],
    [13, 7],
    [13, 6],
    [13, 5],
    [13, 3],
    [14, 3],
    [15, 3],
    [15, 4],
    [15, 5],
    [15, 6],
    [15, 7],
    [15, 8],
    [15, 9],
    [15, 10],
    [15, 11],
    [15, 12],
    [14, 12],
    [13, 12],
    [11, 12],
    [12, 12],
    [10, 12],
    [10, 13],
    [10, 14],
    [10, 15],
    [8, 11],
    [8, 12],
    [8, 13],
    [8, 14],
    [8, 15],
    [0, 12],
    [2, 12],
    [1, 12],
    [3, 12],
    [4, 12],
    [5, 12],
    [6, 12],
    [6, 13],
    [6, 14],
    [5, 14],
    [4, 14],
    [3, 14],
    [2, 14],
    [1, 14],
    [1, 15],
    [13, 14],
    [10, 16],
    [1, 16],
    [2, 16],
    [3, 16],
    [4, 16],
    [4, 17],
    [4, 18],
    [6, 16],
    [6, 17],
    [6, 18],
    [8, 16],
    [8, 17],
    [8, 18],
    [9, 18],
    [10, 18],
    [11, 18],
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [4, 0],
    [3, 0],
    [3, 1],
    [1, 6],
    [1, 8],
    [3, 4],
    [15, 1],
    [15, 0],
    [16, 0],
    [17, 0],
    [11, 16],
    [12, 16],
    [12, 18],
    [13, 18],
    [14, 18],
    [15, 18],
    [17, 18],
    [16, 18],
    [15, 14],
    [14, 14],
    [12, 14],
    [16, 14],
    [17, 14],
    [17, 13],
    [17, 12],
    [17, 11],
    [17, 10],
    [17, 9],
    [17, 8],
    [17, 7],
    [17, 6],
    [17, 5],
    [17, 4],
    [18, 4],
    [19, 4],
    [17, 2],
    [18, 2],
    [19, 2],
    [17, 1],
    [20, 2],
    [20, 1],
    [20, 4],
    [21, 4],
    [22, 2],
    [23, 2],
    [24, 2],
    [22, 4],
    [23, 4],
    [23, 5],
    [23, 6],
    [22, 6],
    [21, 6],
    [20, 6],
    [19, 6],
    [19, 9],
    [19, 8],
    [20, 8],
    [21, 8],
    [22, 8],
    [23, 8],
    [13, 16],
    [14, 16],
    [15, 16],
    [18, 18],
    [19, 18],
    [19, 17],
    [19, 16],
    [19, 15],
    [19, 14],
    [18, 12],
    [19, 12],
    [20, 12],
    [21, 12],
    [21, 13],
    [21, 14],
    [21, 15],
    [21, 16],
    [21, 18],
    [21, 17],
    [23, 9],
    [23, 10],
    [23, 12],
    [23, 11],
    [23, 13],
    [23, 14],
    [23, 15],
    [23, 16],
    [23, 17],
    [23, 18],
    [23, 19],
    [15, 21],
    [15, 22],
    [15, 23],
    [16, 23],
    [18, 23],
    [17, 23],
    [19, 23],
    [20, 23],
    [21, 23],
    [22, 23],
    [23, 23],
    [24, 23],
    [23, 21],
    [22, 21],
    [20, 21],
    [21, 21],
    [19, 21],
    [18, 21],
    [17, 21],
    [16, 21],
    [23, 20],
    [17, 19],
    [20, 20],
    [0, 18],
    [0, 19],
    [0, 20],
    [1, 20],
    [2, 20],
    [3, 20],
    [1, 24],
    [1, 23],
    [1, 22],
    [2, 22],
    [3, 22],
    [4, 22],
    [5, 22],
    [4, 24],
    [5, 24],
    [6, 24],
    [7, 24],
    [8, 24],
    [8, 23],
    [8, 22],
    [10, 19],
    [10, 20],
    [11, 20],
    [12, 20],
    [13, 20],
    [10, 24],
    [11, 24],
    [12, 24],
    [12, 23],
    [12, 22]
];