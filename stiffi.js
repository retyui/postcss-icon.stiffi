module.exports = {
	type: "css",
	styles: new Map([
		[
			"search",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend { transform: rotate(-45deg); }",
				".extend { top: -3px; left: 1px; width: 13px; }",
				".extend::before { width: 10px; height: 10px; border-radius: 10px; box-shadow: 0px 0px 0px 2px inset; }",
				".extend::after { width: 4px; height: 10px; top: 9px; left: 3px; box-shadow: 0px 0px 0px 2px inset; border-radius: 3px; }"
			]
		],
		[
			"comment",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::after { transform: rotate(45deg); }",
				".extend { left: -1px; width: 15px; }",
				".extend::before { height: 10px; width: 16px; border-radius: 16px 10px; box-shadow: 0px 0px 0px 16px inset; }",
				".extend::after { border-top: 16px solid; border-left: 3px solid transparent; border-right: 4px solid transparent; top: 2px; left: 4px; }"
			]
		],
		[
			"gear",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { width: 14px; height: 14px; box-shadow: 0px 0px 0px 4px inset; border-radius: 16px; border: 1px dashed; top: -1px; left: -1px; }"
			]
		],
		[
			"wrench",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend { transform: rotate(45deg); }",
				".extend::before { width: 4px; height: 5px; top: -2px; left: 3px; border-right: 3px solid; border-bottom: 3px solid; border-left: 3px solid; border-image: initial; border-radius: 5px; border-top: none; }",
				".extend::after { width: 4px; height: 13px; top: 4px; left: 6px; box-shadow: 0px 0px 0px 16px inset; border-radius: 3px; }"
			]
		],
		[
			"profile",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { width: 16px; height: 8px; border-radius: 8px 8px 0px 0px; box-shadow: 0px 0px 0px 16px inset; top: 7px; left: -1px; }",
				".extend::after { width: 7px; height: 8px; box-shadow: 0px 0px 0px 16px inset; border-radius: 7px 8px; left: 3px; }"
			]
		],
		[
			"location",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { width: 8px; height: 8px; left: 3px; border-radius: 8px; box-shadow: 0px 0px 0px 3px inset; }",
				".extend::after { top: 6px; left: 3px; border-top: 10px solid; border-left: 4px solid transparent; border-right: 4px solid transparent; }"
			]
		],
		[
			"video",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { height: 12px; width: 12px; border-radius: 3px; box-shadow: 0px 0px 0px 15px inset; top: 1px; }",
				".extend::after { border-right: 8px solid; border-top: 4px solid transparent; border-bottom: 4px solid transparent; top: 3px; left: 8px; }"
			]
		],
		[
			"photo",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { width: 14px; height: 14px; border-radius: 14px; box-shadow: 0px 0px 0px 4px inset; }",
				".extend::after { width: 14px; height: 12px; box-shadow: 0px 0px 0px 2px inset; top: 1px; }"
			]
		],
		[
			"file",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { transform: rotate(-45deg); }",
				".extend::before { border-top: 5px solid; border-left: 5px solid transparent; border-right: 5px solid transparent; top: 3px; left: 1px; }",
				".extend::after { width: 11px; height: 14px; box-shadow: 0px 0px 0px 2px inset; border-radius: 15px 0px 0px; left: 1px; }"
			]
		],
		[
			"folder",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { width: 16px; height: 11px; border-radius: 2px 2px 0px 0px; box-shadow: 0px 0px 0px 20px inset; top: 3px; left: -1px; }",
				".extend::after { width: 8px; height: 5px; box-shadow: 0px 0px 0px 10px inset; border-radius: 1px 1px 0px 0px; left: 1px; }"
			]
		],
		[
			"flag",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend { transform: rotate(-45deg); }",
				".extend { height: 16px; width: 8px; border-left: 2px solid; top: -2px; left: 4px; }",
				".extend::before { width: 6px; height: 8px; box-shadow: 0px 0px 0px 10px inset; top: 1px; }",
				".extend::after { width: 5px; height: 5px; box-shadow: 0px 0px 0px 8px inset; top: 5px; left: 5px; }"
			]
		],
		[
			"tag",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend { transform: rotate(-45deg); }",
				".extend { width: 12px; height: 14px; }",
				".extend::before { width: 8px; height: 8px; box-shadow: 0px 0px 0px 2px inset; border-radius: 8px; top: -2px; left: 3px; }",
				".extend::after { width: 8px; height: 12px; box-shadow: 0px 0px 0px 16px inset; top: 3px; left: 3px; }"
			]
		],
		[
			"lock",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { width: 14px; height: 10px; top: 5px; border-radius: 2px 2px 0px 0px; box-shadow: 0px 0px 0px 16px inset; }",
				".extend::after { height: 4px; width: 5px; border-radius: 15px 15px 0px 0px; border-top: 3px solid; border-right: 3px solid; border-left: 3px solid; border-image: initial; border-bottom: none; top: -1px; left: 1px; }"
			]
		],
		[
			"unlock",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { width: 14px; height: 10px; top: 5px; border-radius: 2px 2px 0px 0px; box-shadow: 0px 0px 0px 16px inset; }",
				".extend::after { height: 4px; width: 5px; border-radius: 15px 15px 0px 0px; border-top: 3px solid; border-right: 3px solid; border-left: 3px solid; border-image: initial; border-bottom: none; top: -1px; left: 1px; }",
				".extend::after { left: -4px; }"
			]
		],
		[
			"link",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend { transform: rotate(-45deg); }",
				".extend { width: 5px; height: 11px; left: 5px; border-left: 3px solid; }",
				".extend::before, .extend::after { width: 5px; height: 7px; border-radius: 5px; border: 2px solid; left: -6px; }",
				".extend::before { border-bottom: none; top: -4px; }",
				".extend::after { border-top: none; top: 6px; }"
			]
		],
		[
			"bookmark",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { width: 0px; height: 5px; border-width: 5px 5px 6px; border-style: solid; border-top-color: initial; border-right-color: initial; border-left-color: initial; border-image: initial; border-bottom-color: transparent; left: 2px; }"
			]
		],
		[
			"list",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before, .extend::after { height: 2px; width: 16px; border-top: 3px solid; border-bottom: 3px solid; left: -1px; }",
				".extend::after { border-top: none; border-bottom: 3px solid; top: 8px; }"
			]
		],
		[
			"heart",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before, .extend::after { transform: rotate(-45deg); }",
				".extend::after { transform: rotate(45deg); }",
				".extend::before, .extend::after { width: 10px; height: 14px; box-shadow: 0px 0px 0px 20px inset; border-radius: 20px 20px 0px 0px; top: -1px; }",
				".extend::after { left: 4px; }"
			]
		],
		[
			"share",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend { width: 14px; transform: rotate(10deg); }",
				".extend::before { height: 0px; border-left: 6px solid; border-top: 6px solid transparent; border-bottom: 6px solid transparent; left: 8px; }",
				".extend::after { width: 14px; height: 16px; border-radius: 16px; border-width: 5px 0px 0px; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-color: initial; border-image: initial; border-top-style: solid; transform: rotate(-25deg); top: 3px; left: 2px; }"
			]
		],
		[
			"forbidden",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::after { transform: rotate(45deg); }",
				".extend::before { width: 14px; height: 14px; box-shadow: 0px 0px 0px 3px inset; border-radius: 20px; }",
				".extend::after { width: 2px; height: 12px; box-shadow: 0px 0px 0px 16px inset; top: 1px; left: 6px; }"
			]
		],
		[
			"sound",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { width: 7px; height: 8px; box-shadow: 0px 0px 0px 16px inset; top: 3px; border-radius: 2px; }",
				".extend::after { border-right: 8px solid; border-top: 8px solid transparent; border-bottom: 8px solid transparent; top: -1px; left: 5px; }"
			]
		],
		[
			"eject",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { width: 0px; border-bottom: 8px solid; border-right: 8px solid transparent; border-left: 8px solid transparent; left: -1px; }",
				".extend::after { height: 4px; width: 16px; box-shadow: 0px 0px 0px 16px inset; top: 10px; left: -1px; }"
			]
		],
		[
			"play",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { border-left: 9px solid; border-top: 8px solid transparent; border-bottom: 8px solid transparent; top: -1px; left: 3px; }"
			]
		],
		[
			"pause",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before, .extend::after { width: 4px; height: 14px; box-shadow: 0px 0px 0px 16px inset; left: 2px; }",
				".extend::after { left: 8px; }"
			]
		],
		[
			"stop",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend { box-shadow: 0px 0px 0px 16px inset; }"
			]
		],
		[
			"backward",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before, .extend::after { border-top: 8px solid transparent; border-bottom: 8px solid transparent; top: -1px; left: -1px; }",
				".extend::before, .extend::after { border-right: 8px solid; }",
				".extend::after { left: 7px; }"
			]
		],
		[
			"step-backward",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { width: 3px; height: 14px; box-shadow: 0px 0px 0px 8px inset; }",
				".extend::after { border-top: 8px solid transparent; border-bottom: 8px solid transparent; }",
				".extend::before { left: 1px; }",
				".extend::after { border-right: 8px solid; top: -1px; left: 4px; }"
			]
		],
		[
			"forward",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before, .extend::after { border-top: 8px solid transparent; border-bottom: 8px solid transparent; top: -1px; left: -1px; }",
				".extend::before, .extend::after { border-left: 8px solid; }",
				".extend::after { left: 7px; }"
			]
		],
		[
			"step-forward",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::after { width: 3px; height: 14px; box-shadow: 0px 0px 0px 8px inset; }",
				".extend::before { border-top: 8px solid transparent; border-bottom: 8px solid transparent; }",
				".extend::before { border-left: 8px solid; top: -1px; left: 1px; }",
				".extend::after { left: 10px; }"
			]
		],
		[
			"filter",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { height: 0px; border-top: 10px solid; border-left: 7px solid transparent; border-right: 7px solid transparent; }",
				".extend::after { width: 4px; height: 9px; box-shadow: 0px 0px 0px 16px inset; top: 6px; left: 5px; }"
			]
		],
		[
			"left",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::after { transform: rotate(-45deg); }",
				".extend::before { transform: rotate(45deg); }",
				".extend::before, .extend::after { width: 3px; height: 10px; box-shadow: 0px 0px 0px 16px inset; top: -1px; left: 5px; }",
				".extend::after { top: 5px; }"
			]
		],
		[
			"right",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { transform: rotate(-45deg); }",
				".extend::after { transform: rotate(45deg); }",
				".extend::before, .extend::after { width: 3px; height: 10px; box-shadow: 0px 0px 0px 16px inset; top: -1px; left: 5px; }",
				".extend::before, .extend::after { left: 6px; }",
				".extend::after { top: 5px; }"
			]
		],
		[
			"up",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::after { transform: rotate(-45deg); }",
				".extend::before { transform: rotate(45deg); }",
				".extend::before, .extend::after { width: 3px; height: 10px; box-shadow: 0px 0px 0px 16px inset; top: -1px; left: 5px; }",
				".extend::before { left: 3px; }",
				".extend::after { left: 8px; }",
				".extend::before, .extend::after { top: 2px; }"
			]
		],
		[
			"down",
			[
				".extend { float: left; width: 14px; height: 14px; position: relative; display: block; }",
				'.extend::before, .extend::after { position: absolute; content: ""; display: block; }',
				".extend::before { transform: rotate(-45deg); }",
				".extend::after { transform: rotate(45deg); }",
				".extend::before, .extend::after { width: 3px; height: 10px; box-shadow: 0px 0px 0px 16px inset; top: -1px; left: 5px; }",
				".extend::before { left: 3px; }",
				".extend::after { left: 8px; }",
				".extend::before, .extend::after { top: 2px; }"
			]
		]
	])
};
