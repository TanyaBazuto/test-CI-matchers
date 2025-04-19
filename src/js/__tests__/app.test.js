import sortHitPoints from '../app';

test('testing sorting hit points from max to min', () => {
    const result = sortHitPoints([
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ]);
    const expected = [
        { name: 'маг', health: 100, },
        { name: 'лучник', health: 80,},
        { name: 'мечник', health: 10, },
    ];
    expect(result).toEqual(expected);
});

