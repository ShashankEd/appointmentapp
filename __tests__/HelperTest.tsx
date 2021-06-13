import {
    getDay,
    keepBookDisabled
} from '../src/utils/Helper';

//All the test scripts to cover helper functions written below 

test('1->Today, 2->Tomorrow,3->Day After Tomorrow', () => {
    expect(getDay(1)).toBe('Today');
    expect(getDay(2)).toBe('Tomorrow');
    expect(getDay(3)).toBe('Day After Tomorrow')
});

test('keepBookDisabled ==> if all parameters are fine, then true, else false', () => {
    expect(keepBookDisabled(2,18,'shashank gupta','sg@gmail.com','8296078926')).toBe(true);
    expect(keepBookDisabled(0,0,'','','')).toBe(false);
})