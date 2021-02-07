import {render, fireEvent} from '@testing-library/react'

import Main from './index';

it('check button render',() =>{
    const { queryByTitle } = render(<Main/>);
    const btn = queryByTitle("getstart");
    expect(btn).toBeTruthy();
})