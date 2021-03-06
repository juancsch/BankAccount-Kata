function formatted (date = new Date()) {

	let month = '' + (date.getMonth() + 1)
	let day = '' + date.getDate()
	const year = date.getFullYear()

	if (month.length < 2) month = '0' + month
	if (day.length < 2) day = '0' + day

	return [day, month, year].join('/')
}

module.exports = {
	today () {
		return new Date()
	},
	dateAsString () {
		return formatted(this.today())
	}
}
