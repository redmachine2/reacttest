/**
 * Created by redmachine2 on 4/5/2017.
 */
import React from "react";
export function Square(props){
	return (
		<button className="square" onClick={() => props.onClick()}>
			{props.value}
		</button>
	);
}