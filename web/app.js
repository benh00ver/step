// HTML elements
const goBack = document.getElementById('goBack')
const mainHtml = document.getElementById('mainHtml')
const exit = document.getElementById('exit2')
const filesListHeading = document.getElementById('filesListHeading')
const archiveZip = document.getElementById('archiveZip')
const archiveTarGz = document.getElementById('archiveTarGz')
const decompress = document.getElementById('decompress')
const status = document.getElementById('status')

// Get user chosen files from browser localStorage
let fileList = localStorage.getItem('fl')
eel.tester(fileList)

// Format label by fileList size
switch(fileList.length) {
	case 1:
		filesListHeading.innerText = 'Chosen Files is:\n' + fileList;
		break
	case (fileList > 1):
		filesListHeading.innerText = 'Chosen File is:\n' + fileList;
		break
	default:
		filesListHeading.innerText = 'No Files Chosen yet';
}
// Event listeners
exit.addEventListener('click', () => {
	localStorage.removeItem('fl')
	close()
	eel.kill()
})
goBack.addEventListener('click', () => {
	mainHtml.click()
})
archiveZip.addEventListener('click', () => {
	eel.compressZip(fileList)
	eel.tester('Shit worked')
	status.innerText = 'Status:\n\tArchived as zip succesfully';
	console.log('Compressing as zip')

})
archiveTarGz.addEventListener('click', () => {
	eel.compressTarGz(fileList)
	status.innerText = 'Status:\n\tArchived as tar succesfully';
})
decompress.addEventListener('click', () => {
	status.innerText = 'Status:\n\File decompressed succesfully';
	eel.autoDecompress(fileList)
})
