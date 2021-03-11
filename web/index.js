// HTML elements
const fileDialog = document.getElementById('filesDialog')
const fileButton = document.getElementById('filesButton')
const clearSelectionButton = document.getElementById('clearSelection')
const filesHeading = document.getElementById('filesHeading')
const exit = document.getElementById('exit')
const continueButton = document.getElementById('continue')
const appPage = document.getElementById('appPage')

// User chosen file list
let fileList = [];

// Even Listeners
continueButton.addEventListener('click',  () => {
	appPage.click()
})
exit.addEventListener('click',  () => {
	localStorage.removeItem('fl')
	close()
	eel.kill()
})
fileButton.addEventListener('click',  () => {
	fileDialog.click()
})
clearSelectionButton.addEventListener('click',  () => {
	fileList = []
	filesHeading.innerText = 'No files chosen yet.';
	eel.tester(fileList)
	localStorage.removeItem('fl')
})

// Application Logic
filesDialog.addEventListener('change',  () => {
	if (filesDialog.files[0].name) {
		fileList.push(filesDialog.files[0].name)
		localStorage.setItem('fl', fileList)

		if (fileList.length > 1) {
			filesHeading.innerText = 'Chosen files are: ' + fileList;
			eel.tester(fileList)
		} else {
			filesHeading.innerText = 'Chosen file is: ' + fileList;
		}
	}
})
