Log.info('start main');
var scripts=[
	"main1",
	"main2",
	"main3"
];
for(var i=0;i<scripts.length;i++){
	try{
		Log.info('require script: '+scripts[i]);
		require(scripts[i]);
	}catch(err){
		Log.err('Error script: '+scripts[i]);
		Log.err('Error: '+err);
	};
};
Log.info('End main');
