/* --- The system --- */
class LightSystem {
	constructor(){
		this._lights = [ ];
	}
	
	turnOn (range){
		this._controlLights (range, (light)=>light + 1);
	}
	turnOff (range){
		this._controlLights (range, (light)=>light - 1);
	}
	toggle (range){
		this._controlLights (range, (light)=>light + 2);
	}
	
	count(){
		var total = 0;
		this._each ([0, 0, 999, 999], (x,y)=>{
			total += this._lights [x] [y] || 0;
		});
		return total;
	}
	
	_controlLights (range, getFunc){
		this._each (range, (x, y) => {
			var light = this._lights [x] [y] || 0;
			var brightness = getFunc (light);
			this._lights [x] [y] = Math.max(0, brightness);
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
