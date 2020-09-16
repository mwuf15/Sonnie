import React from 'react';
import styles from '../DayGraph.css';
import {Bar} from 'react-chartjs-2';

const DayGraph = ({data, status}) => {


	const state = {
		labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
		datasets: [
			{
				label: 'watts',
				animation: true,
				fill: true,
				lineTension: 0.5,
				backgroundColor: 'rgba(114, 236, 245, 0.801)',
				borderColor: 'rgb(255, 255, 255)',
				borderWidth: 2,
				data: data,

			}
		]
	}
	return (
  <div className={styles.title}>
		<Bar
          data={state}
          options={{
						animation: {
							duration: 3000
						},
            title:{
              display:true,
              text:'Hourly Solar Production',
              fontSize:40
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
  </div>
	)
};

export default DayGraph;