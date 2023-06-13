import app from './app';


app.listen(app.get('port'), ()=> {console.log('escucuando puerto', app.get('port'))})
