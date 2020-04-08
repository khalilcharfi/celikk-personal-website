import React from "react";
import PropTypes from "prop-types";
import { container, padding } from "../../stylesheets/components/Utils/Container.module.sass";

const Container = ({ className, children, noPadding }) => {
  return <div className={`${className} ${container} ${!noPadding && padding}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noPadding: PropTypes.bool,
};

Container.defaultProps = {
  children: null,
  className: null,
  noPadding: false,
};

export default Container;
