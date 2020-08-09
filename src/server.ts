import app from './app'

app.getServer().listen(3000, (err) => {
	if (err) {
		return console.error(err);
	}
	return console.log(`Backend is listening on port 3000`)
});
