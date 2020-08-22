import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { selectDirectorySelection } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelection,
});

export default connect(mapStateToProps)(Directory);
