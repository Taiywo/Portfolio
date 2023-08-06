import React from 'react';
import { createBoard } from '@wixc3/react-board';
import About from '../../../pages/about/About.jsx';

export default createBoard({
    name: 'About',
    Board: () => <About />
});
