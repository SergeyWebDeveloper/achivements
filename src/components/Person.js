import React from 'react';
import PropTypes from 'prop-types';
import {Col, Card} from 'antd';

const {Meta} = Card;

export const Person = ({name, allTime, adaptiveRedesign, redesign, adaptive,edit}) => {
	return (
		<Col span={6} style={{margin: '20px 0', padding: '0 10px'}}>
			<Card
				hoverable
				cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
			>
				<Meta
					title={name}
				/>
				<p><strong>Всего</strong>: {allTime}ч.</p>
				<p><strong>Адаптивные редизайны</strong>: {adaptiveRedesign}ч.</p>
				<p><strong>Редизайны</strong>: {redesign}ч.</p>
				<p><strong>Адаптивы</strong>: {adaptive}</p>
				<p><strong>Правки/доработки</strong>: {edit}</p>
			</Card>
		</Col>
	)
};

Person.proptypes = {
	name: PropTypes.string.isRequired,
	allTime: PropTypes.number.isRequired,
	adaptiveRedesign: PropTypes.number.isRequired,
	redesign: PropTypes.number.isRequired,
	adaptive: PropTypes.number.isRequired,
	edit: PropTypes.number.isRequired
};