import React from 'react';
import styles from '../DayGraph.css';
import {Bar} from 'react-chartjs-2';

const TotalGraph = ({data}) => {
	const state = {
		labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		datasets: [
			{
				label: 'watts',
				animation: true,
				fill: false,
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
            title:{
              display:true,
              text:'Montly Solar Production',
              fontSize:20
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

export default TotalGraph;