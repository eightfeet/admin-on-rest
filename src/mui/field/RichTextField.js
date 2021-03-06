import React, { PropTypes } from 'react';

export const removeTags = input => input.replace(/<[^>]+>/gm, '');

const RichTextField = ({ source, record = {}, stripTags }) => {
    const value = record[source];
    if (stripTags) {
        return <div>{removeTags(value)}</div>;
    }

    return <div dangerouslySetInnerHTML={{ __html: value }}></div>;
};

RichTextField.defaultProps = {
    stripTags: false,
};

RichTextField.propTypes = {
    source: PropTypes.string.isRequired,
    label: PropTypes.string,
    record: PropTypes.object,
    stripTags: PropTypes.bool,
};

export default RichTextField;
