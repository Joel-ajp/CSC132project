import sys
from PyQt5.QtWidgets import QApplication, QWidget, QLabel, QComboBox

class MyApp(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.setGeometry(100, 100, 300, 200)
        self.setWindowTitle('Plant Selection')

        label = QLabel('Select Your Plant Species', self)
        label.move(20, 20)

        combobox = QComboBox(self)
        combobox.addItem('Dumb Canes')
        combobox.addItem('Pothos')
        combobox.addItem('Philodendron')
        combobox.move(20, 50)
        combobox.currentIndexChanged.connect(self.selectionChanged)

        self.show()

    def selectionChanged(self, index):
        print(f'Selected option: {index}')

if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = MyApp()
    sys.exit(app.exec_())