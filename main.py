#!/usr/bin/env python
import eel, tarfile, zipfile, sys, pathlib
from zipfile import ZipFile

@eel.expose
def tester(str):
	print(f'Debugger output is: {str}')

@eel.expose
def autoDecompress(x):
	fe = pathlib.Path(x).suffix
	if fe == '.zip':
		decompressZip(x)
	elif fe == '.gz':
		decompressTarGz(x)

@eel.expose
def compressTarGz(list):
	with tarfile.open('archive.tar.gz', 'w:gz') as archive:
		archive.add(list)
		print('File Compressed Succesfully')

@eel.expose
def decompressTarGz(list):
	archive = tarfile.open(list,'r:gz')
	archive.extractall()

	print('File Decompressed Succesfully')

@eel.expose
def decompressZip(i):
	with ZipFile(i, 'r') as archive:
		archive.printdir()
		print('File Decompressed Succesfully')
		archive.extractall()

@eel.expose
def compressZip(i):
	try:
		import zlib
		mode = zipfile.ZIP_DEFLATED
	except:
		mode = zipfile.ZIP_STORED
	with ZipFile('arhive.zip', 'w') as archive:
		print('File Compressed Succesfully')
		archive.write(i)

@eel.expose
def kill():
	print("Application terminated")
	sys.exit()

eel.init('web', allowed_extensions=['.js', '.html','.css', '.ts'])
eel.start('main.html', size=(700,500))
