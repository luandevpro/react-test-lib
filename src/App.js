import React, { Component } from "react";
import loremIpsum from "lorem-ipsum";
import { List } from "react-virtualized";

const rowCount = 1000;
const listHeight = 600;
const rowHeight = 50;
const rowWidth = 800;

class App extends Component {
	constructor() {
		super();
		this.list = Array(rowCount)
			.fill()
			.map((val, idx) => {
				return {
					id: idx,
					name: "John Doe",
					image: "http://via.placeholder.com/40",
					text: loremIpsum({
						count: 1,
						units: "sentences",
						sentenceLowerBound: 4,
						sentenceUpperBound: 8,
					}),
				};
			});
	}
	renderRow = ({ index, key, isScrolling, style }) => {
		return (
			<div key={key} style={style} className="row">
				<div className="image">
					<img src={this.list[index].image} alt="" />
				</div>
				<div className="content">
					{isScrolling ? (
						"isScrolling"
					) : (
						<div>
							<div>{this.list[index].name}</div>
							<div>{this.list[index].text}</div>
						</div>
					)}
				</div>
			</div>
		);
	};
	render() {
		return (
			<div className="list">
				<List
					width={rowWidth}
					height={listHeight}
					rowHeight={rowHeight}
					rowRenderer={this.renderRow}
					rowCount={this.list.length}
				/>
			</div>
		);
	}
}

export default App;
