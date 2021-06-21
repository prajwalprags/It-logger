import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);
  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  tech: object.isRequired,
  getTechs: func.isRequired,
};

const mapStateToProps = ({ tech }) => ({
  tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
