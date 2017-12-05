class UserInput {
	constructor(text){
		this._args = text.split("\n");
		this._lights = new LightSystem();
		
		this._run (this._args);
	}
	
	get lights () { return this._lights; }
	
	_run(lines){
		for (var i in lines){
			if (!lines [i]) continue;
			this._control (lines [i]);
		}
	}
	
	_control (line){
		var [method, range] = this._parse (line);
		switch (method){
			case UserInput.Types.TurnOn:
				this._lights.turnOn (range);
				break;
			case UserInput.Types.TurnOff:
				this._lights.turnOff (range);
				break;
			case UserInput.Types.Toggle:
				this._lights.toggle (range);
				break;
			default:
				console.error(`Unknown command from line ${line}. Received method name ${method}`);
		}
	}
	
	_parse (line) {
		var range = line.match(/[0-9]+/g);
		
		if (line.match(UserInput.Command.Off))
			return [UserInput.Types.TurnOff, range];
		if (line.match(UserInput.Command.On))
			return [UserInput.Types.TurnOn, range];
		if (line.match(UserInput.Command.Toggle))
			return [UserInput.Types.Toggle, range];
			
		return [UserInput.Types.Unknown, range];
	}
}

UserInput.Types = {
	TurnOn: 1,
	TurnOff: 2,
	Toggle: 3,
	Unknown: -1
}
UserInput.Command = {
	On:"turn on",
	Off: "turn off",
	Toggle: "toggle"
}

/* --- The user input --- */
var userInput = new UserInput (document.body.innerText);
console.log (userInput.lights.count((t)=>t === true));