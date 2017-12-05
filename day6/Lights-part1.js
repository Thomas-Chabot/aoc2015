/* --- The system --- */
class LightSystem {
	constructor(){
		this._lights = [ ];
	}
	
	turnOn (range){
		this._controlLights (range, ()=>true);
	}
	turnOff (range){
		this._controlLights (range, ()=>false);
	}
	toggle (range){
		this._controlLights (range, (x,y)=>!this._lights [x] [y]);
	}
	
	count(f){
		var total = 0;
		this._each ([0, 0, 999, 999], (x,y)=>{
			if (f (this._lights [x] [y]))
				total ++;
		});
		return total;
	}
	
	_controlLights (range, getFunc){
		this._each (range, (x, y) => {
			var isOn = getFunc (x, y);
			this._lights [x] [y] = isOn;
		});
	}
	
	_each ([fromX, fromY, toX, toY], func){
		[fromX, fromY, toX, toY] = [parseInt(fromX), parseInt(fromY), parseInt(toX), parseInt(toY)];
		for (var x = fromX; x <= toX; x++){
			if (!this._lights [x])
				this._lights [x] = { };
			
			for (var y = fromY; y <= toY; y++){
				func (x, y);
			}
		}
	}
}
