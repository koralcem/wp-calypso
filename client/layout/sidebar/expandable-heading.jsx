/** @format */
/**
 * External dependencies
 */
import Gridicon from 'gridicons';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Internal dependencies
 */
import Count from 'components/count';
import SidebarHeading from 'layout/sidebar/heading';
import TranslatableString from 'components/translatable/proptype';

const ExpandableSidebarHeading = ( { title, count, onClick, icon, materialIcon } ) => {
	const MaterialIcon = materialIcon;

	return (
		<SidebarHeading onClick={ onClick }>
			{ icon ? <Gridicon icon={ icon } /> : null }
			{ materialIcon ? <MaterialIcon /> : null }
			<Gridicon icon="chevron-down" />
			<span>{ title }</span>
			{ undefined !== count ? <Count count={ count } /> : null }
		</SidebarHeading>
	);
};

ExpandableSidebarHeading.propTypes = {
	title: TranslatableString.isRequired,
	count: PropTypes.number,
	onClick: PropTypes.func,
	icon: PropTypes.string,
};

ExpandableSidebarHeading.defaultProps = {
	onClick: noop,
};

export default ExpandableSidebarHeading;
