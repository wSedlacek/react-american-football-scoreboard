import React from 'react';
import './score-board.style.css';

import TopRow from './components/top-row/top-row.component';
import BottomRow from './components/bottom-row/bottom-row.component';

function ScoreBoard(props) {
  return (
    <section className='scoreboard'>
      <TopRow homeHook={props.homeHook} awayHook={props.awayHook} />
      <BottomRow />
    </section>
  );
}

export default ScoreBoard;
