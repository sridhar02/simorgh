import React from 'react';
import { number } from 'prop-types';
import { GridItemConstrainedMedium } from '../../lib/styledGrid';
import Timestamp from '../Timestamp';
import { formatDateNumeric } from './timeFormats';
import { isFirstRelative, isLastRelative, formatType } from './helpers';

const ArticleTimestamp = ({ firstPublished, lastPublished }) => {
  if (!firstPublished || !lastPublished) {
    return null;
  }

  return (
    <GridItemConstrainedMedium>
      <Timestamp
        timestamp={firstPublished}
        dateTimeFormat={formatDateNumeric}
        format={formatType(firstPublished)}
        isRelative={isFirstRelative(firstPublished, lastPublished)}
      />
      {firstPublished !== lastPublished ? (
        <Timestamp
          timestamp={lastPublished}
          dateTimeFormat={formatDateNumeric}
          format={formatType(lastPublished)}
          isRelative={isLastRelative(lastPublished)}
          prefix="Updated"
        />
      ) : null}
    </GridItemConstrainedMedium>
  );
};

ArticleTimestamp.propTypes = {
  firstPublished: number.isRequired,
  lastPublished: number.isRequired,
};

export default ArticleTimestamp;
