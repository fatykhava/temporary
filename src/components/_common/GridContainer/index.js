import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function GridContainer({ children, ...props }) {
  return (
    <Grid container spacing={10} {...props}>
      {children}
    </Grid>
  );
}
