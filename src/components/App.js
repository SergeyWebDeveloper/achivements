import React, {PureComponent} from 'react';
import axios from 'axios';
import {Spin, Row} from 'antd';
import {personal,url} from '../info';

import 'antd/dist/antd.css';
import {Person} from './Person';
import {sumNumbers, reduceNumber} from '../helpers';

const styles = {
	width: '1200px',
	margin: '0 auto',
	textAlign: 'center'
};

export class App extends PureComponent {
	componentDidMount() {
		this.setState({loading: true});
		axios.get(url)
			.then(res =>
				this.setState({
						info: res.data,
						loading: false
					}
				))
			.catch(err => this.setState({
				loading: false,
				error: {
					status: true
				}
			}));
	}

	state = {
		info: {},
		error: {
			status: false,
			message: 'Произошла ошибка при загрузке данных'
		},
		loading: false
	};

	render() {
		return (
			<div className='wrapper__app' style={styles}>
				<h1 style={{color: 'green'}}>Green Area</h1>
				{this.state.loading && <Spin size='large'/>}
				{this.state.error.status && <h3>{this.state.error.message}</h3>}
				<Row>
					{
						Object.keys(this.state.info).map(item => {
							const sumElem = sumNumbers(item, this.state.info);
							const estimatedTimeSum = reduceNumber(sumElem.estimatedTime);
							const adaptiveRedesignTimeSum = reduceNumber(sumElem.adaptiveRedesignTime);
							const redesignTimeSum = reduceNumber(sumElem.redesignTime);
							const adaptiveTimeSum = reduceNumber(sumElem.adaptiveTime);
							const editsTime = (estimatedTimeSum - adaptiveRedesignTimeSum - adaptiveTimeSum - redesignTimeSum).toFixed(2);
							const allCloseTasks=sumNumbers(item,this.state.info).closeTasks;
							return <Person
								key={item} name={personal[item]}
								allTime={estimatedTimeSum}
								adaptiveRedesign={adaptiveRedesignTimeSum}
								redesign={redesignTimeSum}
								adaptive={adaptiveTimeSum}
								edit={editsTime}
								tasks={allCloseTasks}
							/>
						})
					}
				</Row>
			</div>
		)
	}
}