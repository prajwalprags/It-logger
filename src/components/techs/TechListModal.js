import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: object.isRequired,
  getTechs: func.isRequired,
};

const mapStateToProps = ({ tech }) => ({
  tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
