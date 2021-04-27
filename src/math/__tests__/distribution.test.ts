import * as distribution from '../distribution';

describe('math/distribution', () => {
    it('extendDistribution', () => {
        type TKeys = 'type1' | 'type2';

        const r1 = distribution.extendDistribution<TKeys>(1, 'type1');
        expect(r1).toBeTruthy();
        expect(r1.total).toEqual(1);
        expect(r1.byType.type1).toEqual(1);

        distribution.extendDistribution(3, 'type2', r1);
        expect(r1.total).toEqual(4);
        expect(r1.byType.type1).toEqual(1);
        expect(r1.byType.type2).toEqual(3);

        const d: distribution.Distribution<TKeys> = { total: 0, byType: null };
        distribution.extendDistribution(1, 'type1', d);
        expect(d.total).toEqual(1);
        expect(d.byType.type1).toEqual(1);
        expect(d.byType.type2).toBeUndefined();

        expect(distribution.extendDistribution(0, 'type1').total).toEqual(0);
    });
});
