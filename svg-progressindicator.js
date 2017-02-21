
var ProgressSvg = React.createClass({
	
	getDefaultProps: function() {
		return {
			speed: 2,
			strokeWidth: 10,
			circleSize: 100,
		}
	},
	
    render: function() {
        
		let toDasharray    = this.props.circleSize * 3.14;
        let innerRadius    = this.props.circleSize / 2 - this.props.strokeWidth / 2;
        let outerRadius    = this.props.circleSize / 2;
        let scale          = innerRadius / outerRadius
        let percentage     = Math.floor(3.14 * this.props.percentage * scale * (this.props.circleSize / 100));
        let uniqueModifier = Math.floor(Math.random() * 100000);
        
        return (
            <div className={'percentage-circle' + ' ' + 'percentage-circle--' + uniqueModifier}>
                <style>
                    {`
                        @-webkit-keyframes animate-progress-bar--${uniqueModifier} {
                            0% { stroke-dasharray: 0 ${toDasharray}; }
                          100% { stroke-dasharray: ${percentage} ${toDasharray}; }
                        }

                       @keyframes animate-progress-bar {
                            0% { stroke-dasharray: 0 ${toDasharray}; }
                          100% { stroke-dasharray: ${percentage} ${toDasharray}; }
                        }
						
						.percentage-circle--${uniqueModifier} {
							width: ${this.props.circleSize}px;
							height: ${this.props.circleSize}px;
						}

                        .percentage-circle__circle--${uniqueModifier} {
                            animation: animate-progress-bar--${uniqueModifier} ${this.props.speed}s cubic-bezier(.87, -.41, .19, 1.44);
                            animation-fill-mode: forwards;
                        }
                    `}
                </style>
				
				{this.props.showpercentage ? (
					<div className="percentage-circle__percentage">
						{this.props.percentage}%</div>
				) : false}
                
				<svg
                    height={this.props.circleSize}
                    width={this.props.circleSize}
                    >
                    <circle
                        cx={outerRadius}
                        cy={outerRadius}
                        r={innerRadius}
                        stroke="lightgrey"
                        strokeWidth={this.props.strokeWidth}
                        fill="none"
                    />
                    <circle
                        cx={outerRadius}
                        cy={outerRadius}
                        className={'percentage-circle__circle' + ' ' + 'percentage-circle__circle--' + uniqueModifier}
                        r={innerRadius}
                        stroke="red"
                        strokeWidth={this.props.strokeWidth}
                        fill="none"
                    />
                </svg> 
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <ProgressSvg percentage="25" />
        <ProgressSvg strokeWidth="1" percentage="50" speed="2" />
        <ProgressSvg strokeWidth="5" circleSize="200" percentage="99" showpercentage speed="2" />
    </div>,
document.getElementById('container'));