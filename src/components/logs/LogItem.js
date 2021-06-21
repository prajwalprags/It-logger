import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import { deleteLog, setCurrent } from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({
  log: { message, attention, id, tech, date },
  deleteLog,
  setCurrent,
}) => {
  const onDelete = () => {
    deleteLog(id);
    M.toast({ html: 'Log Deleted' });
  };
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
          onClick={() => setCurrent()}
        >
          {message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{id} </span>
          last updated by <span className='black-text'>{tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-context'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: object.isRequired,
  deleteLog: func.isRequired,
  setCurrent: func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
