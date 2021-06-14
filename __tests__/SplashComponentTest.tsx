import 'react-native';
import React from 'react';
import SplashHook from '../src/components/SplashHook';
import renderer, {create} from 'react-test-renderer'

//if any asynchronous task is running in the comopnent, then use it
jest.useFakeTimers();
//@ts-ignore
const tree = create(<SplashHook/>);
test('snapshot',() => {
    expect(tree).toMatchSnapshot()
});



