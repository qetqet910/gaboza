from gtts import gTTS
from playsound import playsound
file_path = r'D:\\Data\\vscode-workspace\\TTS\\text.txt'
with open(file_path, 'rt', encoding='UTF8') as f:
  read_file=f.read()
tts = gTTS(text=read_file, lang='ko', )
tts.save(r'D:\\Data\\vscode-workspace\\TTS\\mon.mp3')