import React from "react";

import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import "./collections-overview.styles.scss";
const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-preview">
      {collections.map(({ id, ...otherColledctionProps }) => (
        <CollectionPreview key={id} {...otherColledctionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
