import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../collection-overview/collection-overview";
import Collection from "../../pages/collection/collection";

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
